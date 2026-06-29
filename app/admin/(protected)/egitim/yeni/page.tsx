import { AdminTopbar } from "@/components/admin/AdminUI";
import EgitimForm from "@/components/admin/EgitimForm";
import { createEgitimAction } from "@/lib/actions/egitim-actions";

export default function YeniEgitimPage() {
  return (
    <div>
      <AdminTopbar title="Yeni Eğitim Kaydı" />
      <EgitimForm action={createEgitimAction} />
    </div>
  );
}
