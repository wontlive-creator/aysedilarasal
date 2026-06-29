"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireSession } from "@/lib/auth";
import { addMakale, updateMakale, deleteMakale } from "@/lib/data";
import type { MakaleItem, Kapsam } from "@/lib/types";

function parseForm(formData: FormData): Omit<MakaleItem, "id"> {
  return {
    baslik: String(formData.get("baslik") ?? "").trim(),
    dergi: String(formData.get("dergi") ?? "").trim(),
    yil: String(formData.get("yil") ?? "").trim(),
    kapsam: (formData.get("kapsam") as Kapsam) ?? "yurt_ici",
    ozet: String(formData.get("ozet") ?? "").trim(),
    link: String(formData.get("link") ?? "").trim(),
  };
}

export async function createMakaleAction(formData: FormData): Promise<void> {
  await requireSession();
  await addMakale(parseForm(formData));
  revalidatePath("/");
  revalidatePath("/admin/makaleler");
  redirect("/admin/makaleler");
}

export async function updateMakaleAction(
  id: string,
  formData: FormData
): Promise<void> {
  await requireSession();
  await updateMakale(id, parseForm(formData));
  revalidatePath("/");
  revalidatePath("/admin/makaleler");
  redirect("/admin/makaleler");
}

export async function deleteMakaleAction(id: string): Promise<void> {
  await requireSession();
  await deleteMakale(id);
  revalidatePath("/");
  revalidatePath("/admin/makaleler");
}
