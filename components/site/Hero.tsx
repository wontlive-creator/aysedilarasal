import Image from "next/image";
import type { SiteInfo } from "@/lib/types";

export default function Hero({ site }: { site: SiteInfo }) {
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
          {/* Yolculuk imza çizgisi — arkaplanda dekoratif */}
          <svg
            className="pointer-events-none absolute -right-8 -top-8 w-36 opacity-40"
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

          {/* Hafif bordo glow — kartın arkasında derinlik */}
          <div className="absolute inset-4 -z-10 rounded-[32px] bg-burgundy/10 blur-2xl" />

          <Image
            src="/logo/kimlik-kart.png"
            alt="Ayşe Dilara Sal — PDR Doktorant Kimlik Kartı"
            width={600}
            height={894}
            className="relative z-10 w-full max-w-[280px] rounded-[20px] shadow-[0_20px_60px_-16px_rgba(84,32,31,0.35)] md:max-w-[300px]"
            priority
          />
        </div>
      </div>
    </header>
  );
}
