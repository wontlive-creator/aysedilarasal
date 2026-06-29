import { FormField, FormTextarea, FormSelect } from "@/components/admin/FormFields";
import SubmitButton from "@/components/admin/SubmitButton";
import Link from "next/link";
import type { MakaleItem } from "@/lib/types";

export default function MakaleForm({
  item,
  action,
}: {
  item?: MakaleItem;
  action: (formData: FormData) => Promise<void>;
}) {
  return (
    <form action={action} className="rounded-[14px] border border-line bg-white p-7">
      <FormSelect
        label="Kapsam"
        name="kapsam"
        defaultValue={item?.kapsam || "yurt_ici"}
        options={[
          { value: "yurt_ici", label: "Yurt İçi" },
          { value: "yurt_disi", label: "Yurt Dışı" },
        ]}
        hint="Site bu seçime göre makaleyi 'Yurt İçi' veya 'Yurt Dışı' sekmesinde gösterir."
      />
      <FormField
        label="Başlık"
        name="baslik"
        required
        defaultValue={item?.baslik}
      />
      <div className="grid grid-cols-2 gap-5">
        <FormField label="Dergi" name="dergi" defaultValue={item?.dergi} />
        <FormField label="Yıl" name="yil" defaultValue={item?.yil} placeholder="Örn: 2024" />
      </div>
      <FormTextarea
        label="Özet (opsiyonel)"
        name="ozet"
        defaultValue={item?.ozet}
      />
      <FormField
        label="Bağlantı (opsiyonel)"
        name="link"
        type="url"
        defaultValue={item?.link}
        placeholder="https://..."
        hint="DOI bağlantısı veya makalenin yayımlandığı sayfa."
      />
      <div className="mt-6 flex gap-2.5">
        <SubmitButton />
        <Link
          href="/admin/makaleler"
          className="rounded-[10px] border-[1.5px] border-line px-6 py-2.75 text-sm font-semibold text-ink hover:border-burgundy hover:text-burgundy"
        >
          Vazgeç
        </Link>
      </div>
    </form>
  );
}
