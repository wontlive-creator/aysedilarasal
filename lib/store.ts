import { redis } from "./redis";

/**
 * Liste tipi içerikler (eğitim, deneyim, tezler, makaleler, kongreler,
 * projeler) tek bir Redis key'i altında JSON dizisi olarak saklanır.
 * Bu, Redis'in basit key-value yapısına en uygun ve en az istek
 * gerektiren yaklaşımdır.
 */

const PREFIX = "aysedilarasal:";

export async function getList<T extends { id: string }>(
  key: string
): Promise<T[]> {
  const data = await redis.get<T[]>(PREFIX + key);
  return data ?? [];
}

export async function setList<T>(key: string, items: T[]): Promise<void> {
  await redis.set(PREFIX + key, items);
}

export async function addItem<T extends { id: string }>(
  key: string,
  item: Omit<T, "id">
): Promise<T> {
  const list = await getList<T>(key);
  const newItem = { ...item, id: generateId() } as T;
  // en yeni en üstte görünsün
  const updated = [newItem, ...list];
  await setList(key, updated);
  return newItem;
}

export async function updateItem<T extends { id: string }>(
  key: string,
  id: string,
  item: Omit<T, "id">
): Promise<boolean> {
  const list = await getList<T>(key);
  const idx = list.findIndex((row) => row.id === id);
  if (idx === -1) return false;
  list[idx] = { ...item, id } as T;
  await setList(key, list);
  return true;
}

export async function deleteItem(key: string, id: string): Promise<boolean> {
  const list = await getList<{ id: string }>(key);
  const filtered = list.filter((row) => row.id !== id);
  if (filtered.length === list.length) return false;
  await setList(key, filtered);
  return true;
}

export async function getObject<T>(key: string): Promise<T | null> {
  const data = await redis.get<T>(PREFIX + key);
  return data ?? null;
}

export async function setObject<T>(key: string, value: T): Promise<void> {
  await redis.set(PREFIX + key, value);
}

function generateId(): string {
  return (
    Date.now().toString(36) + Math.random().toString(36).slice(2, 9)
  );
}
