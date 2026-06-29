import { notFound } from "next/navigation";
import { getProjeler } from "@/lib/data";
import { AdminTopbar } from "@/components/admin/AdminUI";
import ProjeForm from "@/components/admin/ProjeForm";
import { updateProjeAction } from "@/lib/actions/projeler-actions";

export default async function DuzenleProjePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const liste = await getProjeler();
  const item = liste.find((p) => p.id === id);
  if (!item) notFound();

  const action = async (formData: FormData) => {
    "use server";
    await updateProjeAction(id, formData);
  };

  return (
    <div>
      <AdminTopbar title="Projeyi Düzenle" />
      <ProjeForm item={item} action={action} />
    </div>
  );
}
