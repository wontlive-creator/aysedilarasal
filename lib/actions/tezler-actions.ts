"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireSession } from "@/lib/auth";
import { addTez, updateTez, deleteTez } from "@/lib/data";
import type { TezItem } from "@/lib/types";

function parseForm(formData: FormData): Omit<TezItem, "id"> {
  return {
    tur: String(formData.get("tur") ?? "").trim(),
    baslik: String(formData.get("baslik") ?? "").trim(),
    universite: String(formData.get("universite") ?? "").trim(),
    yil: String(formData.get("yil") ?? "").trim(),
    ozet: String(formData.get("ozet") ?? "").trim(),
    link: String(formData.get("link") ?? "").trim(),
  };
}

export async function createTezAction(formData: FormData): Promise<void> {
  await requireSession();
  await addTez(parseForm(formData));
  revalidatePath("/");
  revalidatePath("/admin/tezler");
  redirect("/admin/tezler");
}

export async function updateTezAction(
  id: string,
  formData: FormData
): Promise<void> {
  await requireSession();
  await updateTez(id, parseForm(formData));
  revalidatePath("/");
  revalidatePath("/admin/tezler");
  redirect("/admin/tezler");
}

export async function deleteTezAction(id: string): Promise<void> {
  await requireSession();
  await deleteTez(id);
  revalidatePath("/");
  revalidatePath("/admin/tezler");
}
