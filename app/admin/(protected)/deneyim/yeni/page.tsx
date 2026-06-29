import { AdminTopbar } from "@/components/admin/AdminUI";
import DeneyimForm from "@/components/admin/DeneyimForm";
import { createDeneyimAction } from "@/lib/actions/deneyim-actions";

export default function YeniDeneyimPage() {
  return (
    <div>
      <AdminTopbar title="Yeni Deneyim Kaydı" />
      <DeneyimForm action={createDeneyimAction} />
    </div>
  );
}
