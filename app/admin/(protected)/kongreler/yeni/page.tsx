import { AdminTopbar } from "@/components/admin/AdminUI";
import KongreForm from "@/components/admin/KongreForm";
import { createKongreAction } from "@/lib/actions/kongreler-actions";

export default function YeniKongrePage() {
  return (
    <div>
      <AdminTopbar title="Yeni Kongre / Sempozyum Ekle" />
      <KongreForm action={createKongreAction} />
    </div>
  );
}
