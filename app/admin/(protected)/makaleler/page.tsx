import { getMakaleler } from "@/lib/data";
import { AdminTopbar, EmptyHint } from "@/components/admin/AdminUI";
import { ListItem } from "@/components/admin/ListItem";
import { deleteMakaleAction } from "@/lib/actions/makaleler-actions";

export const dynamic = "force-dynamic";

export default async function MakalelerPage() {
  const makaleler = await getMakaleler();

  return (
    <div>
      <AdminTopbar
        title="Makaleler"
        description="Yurt içi ve yurt dışı yayımlanan makaleleriniz."
        actionHref="/admin/makaleler/yeni"
        actionLabel="+ Yeni Ekle"
      />

      {makaleler.length === 0 ? (
        <EmptyHint>Henüz makale eklenmedi.</EmptyHint>
      ) : (
        makaleler.map((m) => (
          <ListItem
            key={m.id}
            title={m.baslik}
            meta={[
              m.kapsam === "yurt_ici" ? "Yurt İçi" : "Yurt Dışı",
              m.dergi,
              m.yil,
            ]
              .filter(Boolean)
              .join(" · ")}
            editHref={`/admin/makaleler/${m.id}`}
            itemId={m.id}
            deleteAction={deleteMakaleAction}
          />
        ))
      )}
    </div>
  );
}
