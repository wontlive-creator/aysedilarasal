import { notFound } from "next/navigation";
import { getMakaleler } from "@/lib/data";
import { AdminTopbar } from "@/components/admin/AdminUI";
import MakaleForm from "@/components/admin/MakaleForm";
import { updateMakaleAction } from "@/lib/actions/makaleler-actions";

export default async function DuzenleMakalePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const liste = await getMakaleler();
  const item = liste.find((m) => m.id === id);
  if (!item) notFound();

  const action = async (formData: FormData) => {
    "use server";
    await updateMakaleAction(id, formData);
  };

  return (
    <div>
      <AdminTopbar title="Makaleyi Düzenle" />
      <MakaleForm item={item} action={action} />
    </div>
  );
}
