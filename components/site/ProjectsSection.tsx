import type { ProjeItem } from "@/lib/types";

export default function ProjectsSection({
  projeler,
}: {
  projeler: ProjeItem[];
}) {
  if (projeler.length === 0) return null;

  return (
    <section id="projeler" className="border-t border-line py-22 md:py-24">
      <div className="mx-auto max-w-[1080px] px-7">
        <div className="mb-12 max-w-[620px]">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-terra">
            Diğer Çalışmalar
          </p>
          <h2 className="mt-2.5 font-[family-name:var(--font-display)] text-[28px] font-semibold text-burgundy-deep md:text-[34px]">
            Projeler
          </h2>
          <p className="mt-3.5 text-ink-soft">
            PDR alanı dışında katkı sağladığım veya geliştirdiğim projeler.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {projeler.map((p) => (
            <div
              key={p.id}
              className="grid grid-cols-[auto_1fr] items-center gap-5 rounded-[18px] border border-line bg-white p-7 sm:grid-cols-[auto_1fr]"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-terra to-burgundy text-2xl text-white">
                📦
              </div>
              <div>
                <h3 className="mb-1.5 text-[18px] text-burgundy-deep font-[family-name:var(--font-display)]">
                  {p.baslik}
                </h3>
                {p.aciklama && (
                  <p className="mb-3 text-[14.5px] text-ink-soft">
                    {p.aciklama}
                  </p>
                )}
                <div className="flex flex-wrap gap-3.5">
                  {p.link_web && (
                    <a
                      href={p.link_web}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-burgundy hover:text-burgundy-deep"
                    >
                      🌐 Web Sitesi
                    </a>
                  )}
                  {p.link_play_store && (
                    <a
                      href={p.link_play_store}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-burgundy hover:text-burgundy-deep"
                    >
                      ▶ Google Play
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
