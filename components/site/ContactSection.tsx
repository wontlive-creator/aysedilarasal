import type { SiteInfo } from "@/lib/types";
import ContactForm from "./ContactForm";

const SOSYAL_ETIKET: Record<string, string> = {
  linkedin: "in",
  instagram: "ig",
  twitter: "𝕏",
  wordpress: "W",
};

export default function ContactSection({ site }: { site: SiteInfo }) {
  const sosyalLinkler = Object.entries(site.sosyal || {}).filter(
    ([, url]) => !!url
  );

  return (
    <section
      id="iletisim"
      className="border-t border-line bg-cream-soft py-22 md:py-24"
    >
      <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-10 px-7 md:grid-cols-2">
        <div className="rounded-3xl bg-burgundy p-10 text-white">
          <span className="text-[13px] font-semibold uppercase tracking-[0.12em] text-terra-soft">
            İletişim
          </span>
          <h2 className="mt-2.5 font-[family-name:var(--font-display)] text-[26px] font-semibold text-white">
            Birlikte konuşalım.
          </h2>
          <p className="mt-3.5 text-white/85">
            Görüşme talebiniz veya sorularınız için bana ulaşabilirsiniz.
          </p>

          {site.email && (
            <div className="mt-4.5 flex items-center gap-3 text-[15.5px]">
              ✉️{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-white">
                {site.email}
              </a>
            </div>
          )}
          {site.telefon && (
            <div className="mt-4.5 flex items-center gap-3 text-[15.5px]">
              📞{" "}
              <a href={`tel:${site.telefon}`} className="font-semibold text-white">
                {site.telefon}
              </a>
            </div>
          )}

          {sosyalLinkler.length > 0 && (
            <div className="mt-7 flex gap-3">
              {sosyalLinkler.map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={key}
                  className="flex h-10.5 w-10.5 items-center justify-center rounded-full bg-white/15 text-base text-white hover:bg-white/25"
                >
                  {SOSYAL_ETIKET[key] ?? key.charAt(0).toUpperCase()}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="rounded-3xl border border-line bg-white p-10">
          <h2 className="mb-1.5 text-xl text-burgundy-deep font-[family-name:var(--font-display)]">
            Mesaj Gönder
          </h2>
          <p className="mb-6 text-[14.5px] text-ink-soft">
            Formu doldurduğunuzda mesajınız bana iletilecektir.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
