"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireSession } from "@/lib/auth";
import { addProje, updateProje, deleteProje } from "@/lib/data";
import type { ProjeItem } from "@/lib/types";

function parseForm(formData: FormData): Omit<ProjeItem, "id"> {
  return {
    baslik: String(formData.get("baslik") ?? "").trim(),
    aciklama: String(formData.get("aciklama") ?? "").trim(),
    link_web: String(formData.get("link_web") ?? "").trim(),
    link_play_store: String(formData.get("link_play_store") ?? "").trim(),
  };
}

export async function createProjeAction(formData: FormData): Promise<void> {
  await requireSession();
  await addProje(parseForm(formData));
  revalidatePath("/");
  revalidatePath("/admin/projeler");
  redirect("/admin/projeler");
}

export async function updateProjeAction(
  id: string,
  formData: FormData
): Promise<void> {
  await requireSession();
  await updateProje(id, parseForm(formData));
  revalidatePath("/");
  revalidatePath("/admin/projeler");
  redirect("/admin/projeler");
}

export async function deleteProjeAction(id: string): Promise<void> {
  await requireSession();
  await deleteProje(id);
  revalidatePath("/");
  revalidatePath("/admin/projeler");
}
