import type { SiteInfo } from "@/lib/types";

export default function Hero({ site }: { site: SiteInfo }) {
  const ilkHarf = site.ad_soyad?.charAt(0) ?? "A";

  return (
    <header className="relative overflow-hidden py-24 pb-28 md:pb-32">
      <div className="mx-auto grid max-w-[1080px] grid-cols-1 items-center gap-12 px-7 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-terra">
            {site.unvan}
          </p>
          <h1 className="mb-6 font-[family-name:var(--font-display)] text-[34px] font-semibold leading-[1.12] text-burgundy-deep md:text-[54px]">
            {site.hero_baslik}
          </h1>
          <p className="mb-8 max-w-[480px] text-lg text-ink-soft">
            Merhaba, ben {site.ad_soyad}. Psikolojik Danışma ve Rehberlik
            alanında akademik birikimimi, danışanlarıma kendilerini tanıma
            yolculuklarında güvenli ve samimi bir alan sunmak için
            kullanıyorum.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a
              href="#iletisim"
              className="inline-flex items-center gap-2 rounded-full bg-burgundy px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_30px_-12px_rgba(58,46,42,0.25)] transition hover:-translate-y-px hover:bg-burgundy-deep"
            >
              İletişime Geç
            </a>
            <a
              href="#hakkinda"
              className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-burgundy px-7 py-3.5 text-[15px] font-semibold text-burgundy transition hover:-translate-y-px hover:bg-burgundy hover:text-white"
            >
              Hakkımda
            </a>
          </div>
        </div>

        <div className="relative order-first flex justify-center md:order-none">
          <svg
            className="pointer-events-none absolute -right-12 -top-10 w-44 opacity-50"
            viewBox="0 0 220 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 200 C 60 200, 40 120, 90 110 C 140 100, 120 30, 200 20"
              stroke="#7A2E2E"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="2 10"
            />
            <circle cx="10" cy="200" r="5" fill="#C97B4A" />
            <circle cx="200" cy="20" r="5" fill="#7A2E2E" />
          </svg>

          <div className="relative flex aspect-[4/5] w-full max-w-[280px] items-end overflow-hidden rounded-[28px] bg-gradient-to-br from-terra-soft to-burgundy p-6 shadow-[0_10px_30px_-12px_rgba(58,46,42,0.25)] md:max-w-[360px]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.25),transparent_55%)]" />
            <span className="absolute -top-3 left-3 font-[family-name:var(--font-display)] text-[140px] leading-none text-white/20">
              {ilkHarf}
            </span>
            <span className="relative z-10 rounded-full bg-ink/30 px-4 py-2 text-[15px] font-semibold text-white backdrop-blur-sm">
              PDR &middot; Doktora Adayı
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
