import { AdminTopbar } from "@/components/admin/AdminUI";
import TezForm from "@/components/admin/TezForm";
import { createTezAction } from "@/lib/actions/tezler-actions";

export default function YeniTezPage() {
  return (
    <div>
      <AdminTopbar title="Yeni Tez Ekle" />
      <TezForm action={createTezAction} />
    </div>
  );
}
