import { getKongreler } from "@/lib/data";
import { AdminTopbar, EmptyHint } from "@/components/admin/AdminUI";
import { ListItem } from "@/components/admin/ListItem";
import { deleteKongreAction } from "@/lib/actions/kongreler-actions";

export const dynamic = "force-dynamic";

export default async function KongrelerPage() {
  const kongreler = await getKongreler();

  return (
    <div>
      <AdminTopbar
        title="Kongreler"
        description="Katıldığınız yurt içi ve yurt dışı kongre, sempozyum ve bilimsel toplantılar."
        actionHref="/admin/kongreler/yeni"
        actionLabel="+ Yeni Ekle"
      />

      {kongreler.length === 0 ? (
        <EmptyHint>Henüz kongre/sempozyum eklenmedi.</EmptyHint>
      ) : (
        kongreler.map((k) => (
          <ListItem
            key={k.id}
            title={k.baslik}
            meta={[
              k.kapsam === "yurt_ici" ? "Yurt İçi" : "Yurt Dışı",
              k.katki_turu,
              k.sehir,
              k.tarih,
            ]
              .filter(Boolean)
              .join(" · ")}
            editHref={`/admin/kongreler/${k.id}`}
            itemId={k.id}
            deleteAction={deleteKongreAction}
          />
        ))
      )}
    </div>
  );
}
