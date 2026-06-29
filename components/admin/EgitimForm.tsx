import { FormField, FormCheckbox } from "@/components/admin/FormFields";
import SubmitButton from "@/components/admin/SubmitButton";
import Link from "next/link";
import type { EgitimItem } from "@/lib/types";

export default function EgitimForm({
  item,
  action,
}: {
  item?: EgitimItem;
  action: (formData: FormData) => Promise<void>;
}) {
  return (
    <form action={action} className="rounded-[14px] border border-line bg-white p-7">
      <FormField
        label="Derece"
        name="derece"
        required
        defaultValue={item?.derece}
        placeholder="Örn: Doktora, Yüksek Lisans, Lisans"
      />
      <FormField
        label="Bölüm"
        name="bolum"
        required
        defaultValue={item?.bolum}
        placeholder="Örn: Psikolojik Danışma ve Rehberlik"
      />
      <FormField
        label="Okul / Üniversite"
        name="okul"
        required
        defaultValue={item?.okul}
      />
      <FormField
        label="Not Ortalaması (opsiyonel)"
        name="not_ortalamasi"
        defaultValue={item?.not_ortalamasi}
        placeholder="Örn: 3.75 / 4.00"
      />
      <div className="grid grid-cols-2 gap-5">
        <FormField
          label="Başlangıç"
          name="baslangic"
          defaultValue={item?.baslangic}
          placeholder="Örn: 09/2017"
        />
        <FormField
          label="Bitiş (boş bırakılabilir)"
          name="bitis"
          defaultValue={item?.bitis}
          placeholder="Örn: 06/2021"
        />
      </div>
      <FormCheckbox
        label="Hâlâ devam ediyor"
        name="devam_ediyor"
        defaultChecked={item?.devam_ediyor}
      />
      <div className="mt-6 flex gap-2.5">
        <SubmitButton />
        <Link
          href="/admin/egitim"
          className="rounded-[10px] border-[1.5px] border-line px-6 py-2.75 text-sm font-semibold text-ink hover:border-burgundy hover:text-burgundy"
        >
          Vazgeç
        </Link>
      </div>
    </form>
  );
}
