import { notFound } from "next/navigation";
import { getEgitim } from "@/lib/data";
import { AdminTopbar } from "@/components/admin/AdminUI";
import EgitimForm from "@/components/admin/EgitimForm";
import { updateEgitimAction } from "@/lib/actions/egitim-actions";

export default async function DuzenleEgitimPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const liste = await getEgitim();
  const item = liste.find((e) => e.id === id);
  if (!item) notFound();

  const action = async (formData: FormData) => {
    "use server";
    await updateEgitimAction(id, formData);
  };

  return (
    <div>
      <AdminTopbar title="Eğitim Kaydını Düzenle" />
      <EgitimForm item={item} action={action} />
    </div>
  );
}
