import { notFound } from "next/navigation";
import { getKongreler } from "@/lib/data";
import { AdminTopbar } from "@/components/admin/AdminUI";
import KongreForm from "@/components/admin/KongreForm";
import { updateKongreAction } from "@/lib/actions/kongreler-actions";

export default async function DuzenleKongrePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const liste = await getKongreler();
  const item = liste.find((k) => k.id === id);
  if (!item) notFound();

  const action = async (formData: FormData) => {
    "use server";
    await updateKongreAction(id, formData);
  };

  return (
    <div>
      <AdminTopbar title="Kongre / Sempozyumu Düzenle" />
      <KongreForm item={item} action={action} />
    </div>
  );
}
