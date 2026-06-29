"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireSession } from "@/lib/auth";
import { getSite, saveSite } from "@/lib/data";

export async function updateAboutAction(formData: FormData): Promise<void> {
  await requireSession();
  const site = await getSite();

  await saveSite({
    ...site,
    ad_soyad: String(formData.get("ad_soyad") ?? "").trim(),
    unvan: String(formData.get("unvan") ?? "").trim(),
    hero_baslik: String(formData.get("hero_baslik") ?? "").trim(),
    hakkinda: String(formData.get("hakkinda") ?? "").trim(),
    kariyer_hedefi: String(formData.get("kariyer_hedefi") ?? "").trim(),
  });

  revalidatePath("/");
  revalidatePath("/admin/hakkinda");
  redirect("/admin/hakkinda?basari=1");
}

export async function updateContactAction(formData: FormData): Promise<void> {
  await requireSession();
  const site = await getSite();

  await saveSite({
    ...site,
    email: String(formData.get("email") ?? "").trim(),
    telefon: String(formData.get("telefon") ?? "").trim(),
    sosyal: {
      linkedin: String(formData.get("linkedin") ?? "").trim(),
      instagram: String(formData.get("instagram") ?? "").trim(),
      twitter: String(formData.get("twitter") ?? "").trim(),
      wordpress: String(formData.get("wordpress") ?? "").trim(),
    },
  });

  revalidatePath("/");
  revalidatePath("/admin/iletisim");
  redirect("/admin/iletisim?basari=1");
}
