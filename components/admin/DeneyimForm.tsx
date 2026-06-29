import { FormField, FormTextarea, FormCheckbox } from "@/components/admin/FormFields";
import SubmitButton from "@/components/admin/SubmitButton";
import Link from "next/link";
import type { DeneyimItem } from "@/lib/types";

export default function DeneyimForm({
  item,
  action,
}: {
  item?: DeneyimItem;
  action: (formData: FormData) => Promise<void>;
}) {
  return (
    <form action={action} className="rounded-[14px] border border-line bg-white p-7">
      <FormField
        label="Pozisyon / Görev"
        name="pozisyon"
        required
        defaultValue={item?.pozisyon}
        placeholder="Örn: Psikolojik Danışmanlık Hizmeti"
      />
      <FormField
        label="Kurum"
        name="kurum"
        required
        defaultValue={item?.kurum}
        placeholder="Örn: Serbest / Online"
      />
      <div className="grid grid-cols-2 gap-5">
        <FormField
          label="Başlangıç (opsiyonel)"
          name="baslangic"
          defaultValue={item?.baslangic}
          placeholder="Örn: 2019"
        />
        <FormField
          label="Bitiş (boş bırakılabilir)"
          name="bitis"
          defaultValue={item?.bitis}
        />
      </div>
      <FormCheckbox
        label="Hâlâ devam ediyor"
        name="devam_ediyor"
        defaultChecked={item?.devam_ediyor}
      />
      <FormTextarea
        label="Açıklama (opsiyonel)"
        name="aciklama"
        defaultValue={item?.aciklama}
      />
      <div className="mt-6 flex gap-2.5">
        <SubmitButton />
        <Link
          href="/admin/deneyim"
          className="rounded-[10px] border-[1.5px] border-line px-6 py-2.75 text-sm font-semibold text-ink hover:border-burgundy hover:text-burgundy"
        >
          Vazgeç
        </Link>
      </div>
    </form>
  );
}
