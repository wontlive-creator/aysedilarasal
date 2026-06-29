import { notFound } from "next/navigation";
import { getDeneyim } from "@/lib/data";
import { AdminTopbar } from "@/components/admin/AdminUI";
import DeneyimForm from "@/components/admin/DeneyimForm";
import { updateDeneyimAction } from "@/lib/actions/deneyim-actions";

export default async function DuzenleDeneyimPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const liste = await getDeneyim();
  const item = liste.find((d) => d.id === id);
  if (!item) notFound();

  const action = async (formData: FormData) => {
    "use server";
    await updateDeneyimAction(id, formData);
  };

  return (
    <div>
      <AdminTopbar title="Deneyim Kaydını Düzenle" />
      <DeneyimForm item={item} action={action} />
    </div>
  );
}
