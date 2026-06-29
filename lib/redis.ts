import { Redis } from "@upstash/redis";

/**
 * Vercel Marketplace üzerinden Upstash Redis entegrasyonu kurulduğunda
 * environment variable isimleri projeye göre değişebilir:
 *  - Yeni entegrasyonlar genelde: UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN
 *  - Eski "Vercel KV"den taşınanlar:  KV_REST_API_URL / KV_REST_API_TOKEN
 * Her iki ismi de destekliyoruz ki kurulumda hangisi gelirse çalışsın.
 */
const url =
  process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
const token =
  process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;

/**
 * Yerel geliştirmede (npm run dev) henüz bir Redis bağlantısı kurulmamışsa,
 * basit bir bellek-içi (in-memory) sahte istemci kullanılır. Bu sayede
 * tasarım/arayüz, gerçek bir Upstash hesabı olmadan da önizlenebilir.
 * Production'da (Vercel) gerçek env değişkenleri tanımlı olduğu için bu
 * sahte istemci asla devreye girmez.
 */
function createMemoryRedis() {
  const store = new Map<string, unknown>();
  console.warn(
    "[redis] Gerçek Upstash bağlantısı bulunamadı — yalnızca bu çalışma " +
      "oturumu için geçerli, bellek-içi sahte bir veri deposu kullanılıyor. " +
      "Vercel'de Storage > Marketplace > Upstash for Redis ekleyin."
  );
  return {
    get: async <T,>(key: string) => (store.has(key) ? (store.get(key) as T) : null),
    set: async (key: string, value: unknown) => {
      store.set(key, value);
      return "OK";
    },
  } as unknown as Redis;
}

export const redis: Redis =
  url && token
    ? new Redis({ url, token })
    : process.env.NODE_ENV !== "production"
    ? createMemoryRedis()
    : new Redis({ url: url ?? "", token: token ?? "" });
