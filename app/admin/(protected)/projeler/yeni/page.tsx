import { AdminTopbar } from "@/components/admin/AdminUI";
import ProjeForm from "@/components/admin/ProjeForm";
import { createProjeAction } from "@/lib/actions/projeler-actions";

export default function YeniProjePage() {
  return (
    <div>
      <AdminTopbar title="Yeni Proje Ekle" />
      <ProjeForm action={createProjeAction} />
    </div>
  );
}
