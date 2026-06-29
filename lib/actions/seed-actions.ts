"use server";

import { revalidatePath } from "next/cache";
import { requireSession } from "@/lib/auth";
import { saveSite, getEgitim, getDeneyim, getProjeler } from "@/lib/data";
import { setList } from "@/lib/store";
import {
  SEED_SITE,
  SEED_EGITIM,
  SEED_DENEYIM,
  SEED_PROJELER,
} from "@/lib/seed-data";

export async function seedContentAction(): Promise<{ basari?: string; hata?: string }> {
  await requireSession();

  try {
    const [mevcutEgitim, mevcutDeneyim, mevcutProjeler] = await Promise.all([
      getEgitim(),
      getDeneyim(),
      getProjeler(),
    ]);

    await saveSite(SEED_SITE);
    if (mevcutEgitim.length === 0) await setList("egitim", SEED_EGITIM);
    if (mevcutDeneyim.length === 0) await setList("deneyim", SEED_DENEYIM);
    if (mevcutProjeler.length === 0) await setList("projeler", SEED_PROJELER);

    revalidatePath("/");
    revalidatePath("/admin");
    return { basari: "Örnek içerik yüklendi." };
  } catch {
    return {
      hata:
        "İçerik yüklenemedi. Redis bağlantınızı (Upstash) kontrol edin.",
    };
  }
}
