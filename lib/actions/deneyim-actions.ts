"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireSession } from "@/lib/auth";
import { addDeneyim, updateDeneyim, deleteDeneyim } from "@/lib/data";
import type { DeneyimItem } from "@/lib/types";

function parseForm(formData: FormData): Omit<DeneyimItem, "id"> {
  return {
    pozisyon: String(formData.get("pozisyon") ?? "").trim(),
    kurum: String(formData.get("kurum") ?? "").trim(),
    baslangic: String(formData.get("baslangic") ?? "").trim(),
    bitis: String(formData.get("bitis") ?? "").trim(),
    devam_ediyor: formData.get("devam_ediyor") === "on",
    aciklama: String(formData.get("aciklama") ?? "").trim(),
  };
}

export async function createDeneyimAction(formData: FormData): Promise<void> {
  await requireSession();
  await addDeneyim(parseForm(formData));
  revalidatePath("/");
  revalidatePath("/admin/deneyim");
  redirect("/admin/deneyim");
}

export async function updateDeneyimAction(
  id: string,
  formData: FormData
): Promise<void> {
  await requireSession();
  await updateDeneyim(id, parseForm(formData));
  revalidatePath("/");
  revalidatePath("/admin/deneyim");
  redirect("/admin/deneyim");
}

export async function deleteDeneyimAction(id: string): Promise<void> {
  await requireSession();
  await deleteDeneyim(id);
  revalidatePath("/");
  revalidatePath("/admin/deneyim");
}
