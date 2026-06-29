import { AdminTopbar } from "@/components/admin/AdminUI";
import MakaleForm from "@/components/admin/MakaleForm";
import { createMakaleAction } from "@/lib/actions/makaleler-actions";

export default function YeniMakalePage() {
  return (
    <div>
      <AdminTopbar title="Yeni Makale Ekle" />
      <MakaleForm action={createMakaleAction} />
    </div>
  );
}
