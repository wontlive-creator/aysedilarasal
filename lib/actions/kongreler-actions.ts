"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireSession } from "@/lib/auth";
import { addKongre, updateKongre, deleteKongre } from "@/lib/data";
import type { KongreItem, Kapsam } from "@/lib/types";

function parseForm(formData: FormData): Omit<KongreItem, "id"> {
  return {
    baslik: String(formData.get("baslik") ?? "").trim(),
    katki_turu: String(formData.get("katki_turu") ?? "").trim(),
    sehir: String(formData.get("sehir") ?? "").trim(),
    tarih: String(formData.get("tarih") ?? "").trim(),
    kapsam: (formData.get("kapsam") as Kapsam) ?? "yurt_ici",
    aciklama: String(formData.get("aciklama") ?? "").trim(),
  };
}

export async function createKongreAction(formData: FormData): Promise<void> {
  await requireSession();
  await addKongre(parseForm(formData));
  revalidatePath("/");
  revalidatePath("/admin/kongreler");
  redirect("/admin/kongreler");
}

export async function updateKongreAction(
  id: string,
  formData: FormData
): Promise<void> {
  await requireSession();
  await updateKongre(id, parseForm(formData));
  revalidatePath("/");
  revalidatePath("/admin/kongreler");
  redirect("/admin/kongreler");
}

export async function deleteKongreAction(id: string): Promise<void> {
  await requireSession();
  await deleteKongre(id);
  revalidatePath("/");
  revalidatePath("/admin/kongreler");
}
