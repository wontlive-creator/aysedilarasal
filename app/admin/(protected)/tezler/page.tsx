import { getTezler } from "@/lib/data";
import { AdminTopbar, EmptyHint } from "@/components/admin/AdminUI";
import { ListItem } from "@/components/admin/ListItem";
import { deleteTezAction } from "@/lib/actions/tezler-actions";

export const dynamic = "force-dynamic";

export default async function TezlerPage() {
  const tezler = await getTezler();

  return (
    <div>
      <AdminTopbar
        title="Tezler"
        description="Yüksek lisans ve doktora tezleriniz."
        actionHref="/admin/tezler/yeni"
        actionLabel="+ Yeni Ekle"
      />

      {tezler.length === 0 ? (
        <EmptyHint>Henüz tez eklenmedi.</EmptyHint>
      ) : (
        tezler.map((t) => (
          <ListItem
            key={t.id}
            title={t.baslik}
            meta={[t.tur, t.universite, t.yil].filter(Boolean).join(" · ")}
            editHref={`/admin/tezler/${t.id}`}
            itemId={t.id}
            deleteAction={deleteTezAction}
          />
        ))
      )}
    </div>
  );
}
