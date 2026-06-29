import Link from "next/link";
import {
  getSite,
  getEgitim,
  getDeneyim,
  getTezler,
  getMakaleler,
  getKongreler,
  getProjeler,
} from "@/lib/data";
import SeedButton from "./SeedButton";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const [site, egitim, deneyim, tezler, makaleler, kongreler, projeler] =
    await Promise.all([
      getSite(),
      getEgitim(),
      getDeneyim(),
      getTezler(),
      getMakaleler(),
      getKongreler(),
      getProjeler(),
    ]);

  const kartlar = [
    { href: "/admin/egitim", label: "Eğitim", sayi: egitim.length },
    { href: "/admin/deneyim", label: "Deneyim", sayi: deneyim.length },
    { href: "/admin/tezler", label: "Tezler", sayi: tezler.length },
    { href: "/admin/makaleler", label: "Makaleler", sayi: makaleler.length },
    { href: "/admin/kongreler", label: "Kongreler", sayi: kongreler.length },
    { href: "/admin/projeler", label: "Projeler", sayi: projeler.length },
  ];

  const icerikBos =
    !site.hakkinda &&
    egitim.length === 0 &&
    deneyim.length === 0 &&
    projeler.length === 0;

  const ilkAd = (site.ad_soyad || "").split(" ")[0] || "Hoş geldiniz";

  return (
    <div>
      <div className="mb-7 flex flex-wrap items-start justify-between gap-5">
        <div>
          <h1 className="text-[26px] text-burgundy-deep font-[family-name:var(--font-display)]">
            Merhaba, {ilkAd} 👋
          </h1>
          <p className="mt-1.5 text-[14.5px] text-ink-soft">
            Sitenizin içeriğini buradan güncelleyebilirsiniz. Soldaki
            menüden ilgili bölüme gidin.
          </p>
        </div>
        <a
          href="/"
          target="_blank"
          className="rounded-[10px] border-[1.5px] border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:border-burgundy hover:text-burgundy"
        >
          🔗 Siteyi Görüntüle
        </a>
      </div>

      {icerikBos && (
        <div className="mb-7 rounded-[14px] border border-line bg-white p-7">
          <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-terra">
            İlk Kurulum
          </span>
          <h3 className="mb-2 text-base text-ink">
            Siteniz henüz boş görünüyor.
          </h3>
          <p className="mb-4 text-[14.5px] text-ink-soft">
            Hazırlanan örnek özgeçmiş içeriğini (Hakkımda, Eğitim, Deneyim
            ve Kaybeden &amp; Bulan projesi) tek tıkla yükleyebilir, sonra
            kendi bilgilerinizle düzenleyebilirsiniz.
          </p>
          <SeedButton />
        </div>
      )}

      <div className="mb-7 grid grid-cols-2 gap-5 sm:grid-cols-3">
        {kartlar.map((k) => (
          <Link
            key={k.href}
            href={k.href}
            className="block rounded-[14px] border border-line bg-white p-6 transition hover:shadow-[0_10px_30px_-12px_rgba(58,46,42,0.18)]"
          >
            <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-terra">
              {k.label}
            </span>
            <h2 className="text-[30px] text-burgundy-deep font-[family-name:var(--font-display)]">
              {k.sayi}
            </h2>
            <p className="mt-1.5 text-sm text-ink-soft">kayıt</p>
          </Link>
        ))}
      </div>

      <div className="rounded-[14px] border border-line bg-white p-7">
        <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-terra">
          İpucu
        </span>
        <h3 className="mb-2 text-base text-ink">
          Yeni bir makale veya kongre eklemek mi istiyorsunuz?
        </h3>
        <p className="text-[14.5px] text-ink-soft">
          Soldaki menüden &quot;Makaleler&quot; veya &quot;Kongreler&quot;
          sekmesine girip <strong>&quot;Yeni Ekle&quot;</strong> butonuna
          tıklamanız yeterli. Yurt içi/yurt dışı ayrımını ekleme formunda
          seçebilirsiniz; site otomatik olarak sekmeler halinde
          gösterecektir.
        </p>
      </div>
    </div>
  );
}
