import { FormField, FormTextarea } from "@/components/admin/FormFields";
import SubmitButton from "@/components/admin/SubmitButton";
import Link from "next/link";
import type { ProjeItem } from "@/lib/types";

export default function ProjeForm({
  item,
  action,
}: {
  item?: ProjeItem;
  action: (formData: FormData) => Promise<void>;
}) {
  return (
    <form action={action} className="rounded-[14px] border border-line bg-white p-7">
      <FormField
        label="Proje Adı"
        name="baslik"
        required
        defaultValue={item?.baslik}
      />
      <FormTextarea
        label="Açıklama"
        name="aciklama"
        defaultValue={item?.aciklama}
      />
      <FormField
        label="Web Sitesi (opsiyonel)"
        name="link_web"
        type="url"
        defaultValue={item?.link_web}
        placeholder="https://..."
      />
      <FormField
        label="Google Play Bağlantısı (opsiyonel)"
        name="link_play_store"
        type="url"
        defaultValue={item?.link_play_store}
        placeholder="https://play.google.com/..."
      />
      <div className="mt-6 flex gap-2.5">
        <SubmitButton />
        <Link
          href="/admin/projeler"
          className="rounded-[10px] border-[1.5px] border-line px-6 py-2.75 text-sm font-semibold text-ink hover:border-burgundy hover:text-burgundy"
        >
          Vazgeç
        </Link>
      </div>
    </form>
  );
}
