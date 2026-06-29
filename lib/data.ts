import { getList, addItem, updateItem, deleteItem, getObject, setObject } from "./store";
import type {
  SiteInfo,
  EgitimItem,
  DeneyimItem,
  TezItem,
  MakaleItem,
  KongreItem,
  ProjeItem,
} from "./types";

const DEFAULT_SITE: SiteInfo = {
  ad_soyad: "Ayşe Dilara Sal",
  unvan: "Psikolojik Danışman (PDR)",
  hero_baslik: "Kendini tanıma yolculuğunda güvenli bir alan.",
  hakkinda: "",
  kariyer_hedefi: "",
  email: "",
  telefon: "",
  sosyal: {},
};

export async function getSite(): Promise<SiteInfo> {
  const site = await getObject<SiteInfo>("site");
  return site ?? DEFAULT_SITE;
}
export async function saveSite(site: SiteInfo): Promise<void> {
  await setObject("site", site);
}

export async function getEgitim() {
  return getList<EgitimItem>("egitim");
}
export async function addEgitim(item: Omit<EgitimItem, "id">) {
  return addItem<EgitimItem>("egitim", item);
}
export async function updateEgitim(id: string, item: Omit<EgitimItem, "id">) {
  return updateItem<EgitimItem>("egitim", id, item);
}
export async function deleteEgitim(id: string) {
  return deleteItem("egitim", id);
}

export async function getDeneyim() {
  return getList<DeneyimItem>("deneyim");
}
export async function addDeneyim(item: Omit<DeneyimItem, "id">) {
  return addItem<DeneyimItem>("deneyim", item);
}
export async function updateDeneyim(id: string, item: Omit<DeneyimItem, "id">) {
  return updateItem<DeneyimItem>("deneyim", id, item);
}
export async function deleteDeneyim(id: string) {
  return deleteItem("deneyim", id);
}

export async function getTezler() {
  return getList<TezItem>("tezler");
}
export async function addTez(item: Omit<TezItem, "id">) {
  return addItem<TezItem>("tezler", item);
}
export async function updateTez(id: string, item: Omit<TezItem, "id">) {
  return updateItem<TezItem>("tezler", id, item);
}
export async function deleteTez(id: string) {
  return deleteItem("tezler", id);
}

export async function getMakaleler() {
  return getList<MakaleItem>("makaleler");
}
export async function addMakale(item: Omit<MakaleItem, "id">) {
  return addItem<MakaleItem>("makaleler", item);
}
export async function updateMakale(id: string, item: Omit<MakaleItem, "id">) {
  return updateItem<MakaleItem>("makaleler", id, item);
}
export async function deleteMakale(id: string) {
  return deleteItem("makaleler", id);
}

export async function getKongreler() {
  return getList<KongreItem>("kongreler");
}
export async function addKongre(item: Omit<KongreItem, "id">) {
  return addItem<KongreItem>("kongreler", item);
}
export async function updateKongre(id: string, item: Omit<KongreItem, "id">) {
  return updateItem<KongreItem>("kongreler", id, item);
}
export async function deleteKongre(id: string) {
  return deleteItem("kongreler", id);
}

export async function getProjeler() {
  return getList<ProjeItem>("projeler");
}
export async function addProje(item: Omit<ProjeItem, "id">) {
  return addItem<ProjeItem>("projeler", item);
}
export async function updateProje(id: string, item: Omit<ProjeItem, "id">) {
  return updateItem<ProjeItem>("projeler", id, item);
}
export async function deleteProje(id: string) {
  return deleteItem("projeler", id);
}

export function splitByKapsam<T extends { kapsam: "yurt_ici" | "yurt_disi" }>(
  items: T[]
): { ici: T[]; disi: T[] } {
  return {
    ici: items.filter((i) => i.kapsam === "yurt_ici"),
    disi: items.filter((i) => i.kapsam === "yurt_disi"),
  };
}
