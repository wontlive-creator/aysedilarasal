import { getDeneyim } from "@/lib/data";
import { AdminTopbar, EmptyHint } from "@/components/admin/AdminUI";
import { ListItem } from "@/components/admin/ListItem";
import { deleteDeneyimAction } from "@/lib/actions/deneyim-actions";

export const dynamic = "force-dynamic";

export default async function DeneyimPage() {
  const deneyim = await getDeneyim();

  return (
    <div>
      <AdminTopbar
        title="Deneyim"
        description="Mesleki deneyimleriniz ve stajlarınız."
        actionHref="/admin/deneyim/yeni"
        actionLabel="+ Yeni Ekle"
      />

      {deneyim.length === 0 ? (
        <EmptyHint>Henüz deneyim kaydı eklenmedi.</EmptyHint>
      ) : (
        deneyim.map((d) => (
          <ListItem
            key={d.id}
            title={d.pozisyon}
            meta={`${d.kurum}${d.baslangic ? " · " + d.baslangic : ""}${d.bitis ? " – " + d.bitis : d.devam_ediyor ? " – Halen" : ""}`}
            editHref={`/admin/deneyim/${d.id}`}
            itemId={d.id}
            deleteAction={deleteDeneyimAction}
          />
        ))
      )}
    </div>
  );
}
