import type { SiteInfo } from "@/lib/types";

export default function AboutSection({ site }: { site: SiteInfo }) {
  const paragraflar = (site.hakkinda ?? "")
    .split("\n")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <section id="hakkinda" className="border-t border-line py-22 md:py-24">
      <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-12 px-7 md:grid-cols-2">
        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-terra">
            Hakkımda
          </p>
          <h2 className="mb-6 mt-2.5 font-[family-name:var(--font-display)] text-[28px] font-semibold text-burgundy-deep">
            Bir teknik beceriden çok, bir yol arkadaşlığı.
          </h2>
          <div className="space-y-4 text-ink">
            {paragraflar.length > 0 ? (
              paragraflar.map((p, i) => <p key={i}>{p}</p>)
            ) : (
              <p className="text-ink-soft">
                Hakkımda metni henüz eklenmedi. Yönetim panelinden ekleyebilirsiniz.
              </p>
            )}
          </div>
        </div>

        {site.kariyer_hedefi && (
          <div className="self-start rounded-[18px] border border-line bg-white p-7 shadow-[0_10px_30px_-12px_rgba(58,46,42,0.18)]">
            <span className="mb-2.5 block text-[13px] font-semibold uppercase tracking-[0.12em] text-terra">
              Kariyer Hedefi
            </span>
            <p className="text-ink-soft">{site.kariyer_hedefi}</p>
          </div>
        )}
      </div>
    </section>
  );
}
