import Link from "next/link";
import DeleteButton from "./DeleteButton";

export function ListItem({
  title,
  meta,
  editHref,
  deleteAction,
  itemId,
}: {
  title: string;
  meta?: string;
  editHref: string;
  deleteAction: (id: string) => Promise<void>;
  itemId: string;
}) {
  return (
    <div className="mb-3 flex items-center justify-between gap-4 rounded-[14px] border border-line bg-white px-5.5 py-4.5">
      <div className="min-w-0">
        <h3 className="truncate text-base text-ink">{title}</h3>
        {meta && <p className="mt-1 text-[13.5px] text-ink-soft">{meta}</p>}
      </div>
      <div className="flex shrink-0 gap-2">
        <Link
          href={editHref}
          className="rounded-[8px] border-[1.5px] border-line bg-white px-3.5 py-1.5 text-[13px] font-semibold text-ink hover:border-burgundy hover:text-burgundy"
        >
          Düzenle
        </Link>
        <DeleteButton itemId={itemId} deleteAction={deleteAction} />
      </div>
    </div>
  );
}
