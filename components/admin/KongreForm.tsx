import { FormField, FormTextarea, FormSelect } from "@/components/admin/FormFields";
import SubmitButton from "@/components/admin/SubmitButton";
import Link from "next/link";
import type { KongreItem } from "@/lib/types";

export default function KongreForm({
  item,
  action,
}: {
  item?: KongreItem;
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
        hint="Site bu seçime göre etkinliği 'Yurt İçi' veya 'Yurt Dışı' sekmesinde gösterir."
      />
      <FormField
        label="Kongre / Sempozyum Adı"
        name="baslik"
        required
        defaultValue={item?.baslik}
      />
      <FormSelect
        label="Katkı Türü"
        name="katki_turu"
        defaultValue={item?.katki_turu || "Katılımcı"}
        options={[
          { value: "Katılımcı", label: "Katılımcı" },
          { value: "Sözlü Bildiri", label: "Sözlü Bildiri" },
          { value: "Poster Bildiri", label: "Poster Bildiri" },
          { value: "Davetli Konuşmacı", label: "Davetli Konuşmacı" },
          { value: "Düzenleme Kurulu", label: "Düzenleme Kurulu" },
        ]}
      />
      <div className="grid grid-cols-2 gap-5">
        <FormField label="Şehir / Ülke" name="sehir" defaultValue={item?.sehir} />
        <FormField label="Tarih" name="tarih" defaultValue={item?.tarih} placeholder="Örn: Mayıs 2024" />
      </div>
      <FormTextarea
        label="Açıklama (opsiyonel)"
        name="aciklama"
        defaultValue={item?.aciklama}
      />
      <div className="mt-6 flex gap-2.5">
        <SubmitButton />
        <Link
          href="/admin/kongreler"
          className="rounded-[10px] border-[1.5px] border-line px-6 py-2.75 text-sm font-semibold text-ink hover:border-burgundy hover:text-burgundy"
        >
          Vazgeç
        </Link>
      </div>
    </form>
  );
}
