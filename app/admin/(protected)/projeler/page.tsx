import { getProjeler } from "@/lib/data";
import { AdminTopbar, EmptyHint } from "@/components/admin/AdminUI";
import { ListItem } from "@/components/admin/ListItem";
import { deleteProjeAction } from "@/lib/actions/projeler-actions";

export const dynamic = "force-dynamic";

export default async function ProjelerPage() {
  const projeler = await getProjeler();

  return (
    <div>
      <AdminTopbar
        title="Projeler"
        description="PDR alanı dışında katkı sağladığınız veya geliştirdiğiniz projeler."
        actionHref="/admin/projeler/yeni"
        actionLabel="+ Yeni Ekle"
      />

      {projeler.length === 0 ? (
        <EmptyHint>Henüz proje eklenmedi.</EmptyHint>
      ) : (
        projeler.map((p) => (
          <ListItem
            key={p.id}
            title={p.baslik}
            meta={p.aciklama}
            editHref={`/admin/projeler/${p.id}`}
            itemId={p.id}
            deleteAction={deleteProjeAction}
          />
        ))
      )}
    </div>
  );
}
