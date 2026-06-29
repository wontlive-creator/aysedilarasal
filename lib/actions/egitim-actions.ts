"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireSession } from "@/lib/auth";
import { addEgitim, updateEgitim, deleteEgitim } from "@/lib/data";
import type { EgitimItem } from "@/lib/types";

function parseForm(formData: FormData): Omit<EgitimItem, "id"> {
  return {
    derece: String(formData.get("derece") ?? "").trim(),
    bolum: String(formData.get("bolum") ?? "").trim(),
    okul: String(formData.get("okul") ?? "").trim(),
    not_ortalamasi: String(formData.get("not_ortalamasi") ?? "").trim(),
    baslangic: String(formData.get("baslangic") ?? "").trim(),
    bitis: String(formData.get("bitis") ?? "").trim(),
    devam_ediyor: formData.get("devam_ediyor") === "on",
  };
}

export async function createEgitimAction(formData: FormData): Promise<void> {
  await requireSession();
  await addEgitim(parseForm(formData));
  revalidatePath("/");
  revalidatePath("/admin/egitim");
  redirect("/admin/egitim");
}

export async function updateEgitimAction(
  id: string,
  formData: FormData
): Promise<void> {
  await requireSession();
  await updateEgitim(id, parseForm(formData));
  revalidatePath("/");
  revalidatePath("/admin/egitim");
  redirect("/admin/egitim");
}

export async function deleteEgitimAction(id: string): Promise<void> {
  await requireSession();
  await deleteEgitim(id);
  revalidatePath("/");
  revalidatePath("/admin/egitim");
}
