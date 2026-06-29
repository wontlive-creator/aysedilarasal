import { FormField, FormTextarea, FormSelect } from "@/components/admin/FormFields";
import SubmitButton from "@/components/admin/SubmitButton";
import Link from "next/link";
import type { TezItem } from "@/lib/types";

export default function TezForm({
  item,
  action,
}: {
  item?: TezItem;
  action: (formData: FormData) => Promise<void>;
}) {
  return (
    <form action={action} className="rounded-[14px] border border-line bg-white p-7">
      <FormSelect
        label="Tez Türü"
        name="tur"
        defaultValue={item?.tur || "Yüksek Lisans Tezi"}
        options={[
          { value: "Yüksek Lisans Tezi", label: "Yüksek Lisans Tezi" },
          { value: "Doktora Tezi", label: "Doktora Tezi" },
        ]}
      />
      <FormField
        label="Başlık"
        name="baslik"
        required
        defaultValue={item?.baslik}
      />
      <div className="grid grid-cols-2 gap-5">
        <FormField
          label="Üniversite"
          name="universite"
          defaultValue={item?.universite}
        />
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
        hint="YÖK Tez Merkezi veya başka bir bağlantı verebilirsiniz."
      />
      <div className="mt-6 flex gap-2.5">
        <SubmitButton />
        <Link
          href="/admin/tezler"
          className="rounded-[10px] border-[1.5px] border-line px-6 py-2.75 text-sm font-semibold text-ink hover:border-burgundy hover:text-burgundy"
        >
          Vazgeç
        </Link>
      </div>
    </form>
  );
}
