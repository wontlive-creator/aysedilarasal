import { getSite } from "@/lib/data";
import { AdminTopbar, Alert } from "@/components/admin/AdminUI";
import { FormField, FormTextarea } from "@/components/admin/FormFields";
import SubmitButton from "@/components/admin/SubmitButton";
import { updateAboutAction } from "@/lib/actions/site-actions";

export const dynamic = "force-dynamic";

export default async function HakkindaPage({
  searchParams,
}: {
  searchParams: Promise<{ basari?: string }>;
}) {
  const { basari } = await searchParams;
  const site = await getSite();

  return (
    <div>
      <AdminTopbar
        title="Hakkımda"
        description="Sitenin giriş (hero) metni, hakkımda yazınız ve kariyer hedefiniz."
      />

      {basari && <Alert kind="success">Bilgiler başarıyla güncellendi.</Alert>}

      <form
        action={updateAboutAction}
        className="rounded-[14px] border border-line bg-white p-7"
      >
        <FormField
          label="Ad Soyad"
          name="ad_soyad"
          required
          defaultValue={site.ad_soyad}
        />
        <FormField
          label="Unvan"
          name="unvan"
          required
          defaultValue={site.unvan}
          placeholder="Örn: Psikolojik Danışman (PDR)"
        />
        <FormField
          label="Hero Başlığı"
          name="hero_baslik"
          required
          defaultValue={site.hero_baslik}
          hint="Ana sayfanın en üstünde büyük puntoyla görünen cümle."
        />
        <FormTextarea
          label="Hakkımda"
          name="hakkinda"
          defaultValue={site.hakkinda}
          rows={8}
          hint="Her paragrafı ayrı bir satıra yazın; site bunları otomatik olarak paragraflara böler."
        />
        <FormTextarea
          label="Kariyer Hedefi"
          name="kariyer_hedefi"
          defaultValue={site.kariyer_hedefi}
          rows={4}
        />
        <div className="mt-6">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
