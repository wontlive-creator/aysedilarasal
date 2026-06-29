import { getEgitim } from "@/lib/data";
import { AdminTopbar, EmptyHint } from "@/components/admin/AdminUI";
import { ListItem } from "@/components/admin/ListItem";
import { deleteEgitimAction } from "@/lib/actions/egitim-actions";

export const dynamic = "force-dynamic";

export default async function EgitimPage() {
  const egitim = await getEgitim();

  return (
    <div>
      <AdminTopbar
        title="Eğitim"
        description="Lisans, yüksek lisans ve doktora eğitim bilgileriniz."
        actionHref="/admin/egitim/yeni"
        actionLabel="+ Yeni Ekle"
      />

      {egitim.length === 0 ? (
        <EmptyHint>Henüz eğitim kaydı eklenmedi.</EmptyHint>
      ) : (
        egitim.map((e) => (
          <ListItem
            key={e.id}
            title={`${e.derece} — ${e.bolum}`}
            meta={`${e.okul} · ${e.baslangic}${e.bitis ? " – " + e.bitis : ""}${e.devam_ediyor ? " (Devam Ediyor)" : ""}`}
            editHref={`/admin/egitim/${e.id}`}
            itemId={e.id}
            deleteAction={deleteEgitimAction}
          />
        ))
      )}
    </div>
  );
}
