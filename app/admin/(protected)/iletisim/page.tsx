import { getSite } from "@/lib/data";
import { AdminTopbar, Alert } from "@/components/admin/AdminUI";
import { FormField } from "@/components/admin/FormFields";
import SubmitButton from "@/components/admin/SubmitButton";
import { updateContactAction } from "@/lib/actions/site-actions";

export const dynamic = "force-dynamic";

export default async function IletisimPage({
  searchParams,
}: {
  searchParams: Promise<{ basari?: string }>;
}) {
  const { basari } = await searchParams;
  const site = await getSite();

  return (
    <div>
      <AdminTopbar
        title="İletişim Bilgileri"
        description="E-posta, telefon ve sosyal medya bağlantılarınız. Bu bilgiler sitenin İletişim bölümünde gösterilir."
      />

      {basari && <Alert kind="success">İletişim bilgileri güncellendi.</Alert>}

      <form
        action={updateContactAction}
        className="rounded-[14px] border border-line bg-white p-7"
      >
        <FormField
          label="E-posta"
          name="email"
          type="email"
          defaultValue={site.email}
          placeholder="ornek@gmail.com"
        />
        <FormField
          label="Telefon"
          name="telefon"
          type="tel"
          defaultValue={site.telefon}
          placeholder="05XX XXX XX XX"
          hint="Boş bırakırsanız sitede telefon numarası gösterilmez."
        />

        <div className="my-6 border-t border-line" />

        <FormField
          label="LinkedIn"
          name="linkedin"
          type="url"
          defaultValue={site.sosyal?.linkedin}
          placeholder="https://linkedin.com/..."
        />
        <FormField
          label="Instagram"
          name="instagram"
          type="url"
          defaultValue={site.sosyal?.instagram}
          placeholder="https://instagram.com/..."
        />
        <FormField
          label="Twitter / X"
          name="twitter"
          type="url"
          defaultValue={site.sosyal?.twitter}
          placeholder="https://twitter.com/..."
        />
        <FormField
          label="WordPress / Blog"
          name="wordpress"
          type="url"
          defaultValue={site.sosyal?.wordpress}
          placeholder="https://..."
        />

        <div className="mt-6">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
