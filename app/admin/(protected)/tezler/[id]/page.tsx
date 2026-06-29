import { notFound } from "next/navigation";
import { getTezler } from "@/lib/data";
import { AdminTopbar } from "@/components/admin/AdminUI";
import TezForm from "@/components/admin/TezForm";
import { updateTezAction } from "@/lib/actions/tezler-actions";

export default async function DuzenleTezPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const liste = await getTezler();
  const item = liste.find((t) => t.id === id);
  if (!item) notFound();

  const action = async (formData: FormData) => {
    "use server";
    await updateTezAction(id, formData);
  };

  return (
    <div>
      <AdminTopbar title="Tezi Düzenle" />
      <TezForm item={item} action={action} />
    </div>
  );
}
