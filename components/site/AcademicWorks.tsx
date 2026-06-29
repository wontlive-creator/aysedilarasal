import type { TezItem, MakaleItem } from "@/lib/types";
import { splitByKapsam } from "@/lib/data";
import ScopeTabs from "./ScopeTabs";
import ContentCard from "./ContentCard";

function EmptyState({ text, hint }: { text: string; hint: string }) {
  return (
    <div className="rounded-[18px] border-[1.5px] border-dashed border-line px-6 py-10 text-center text-ink-soft">
      <strong className="mb-1.5 block font-[family-name:var(--font-display)] text-lg text-burgundy-deep">
        {text}
      </strong>
      {hint}
    </div>
  );
}

export default function AcademicWorks({
  tezler,
  makaleler,
}: {
  tezler: TezItem[];
  makaleler: MakaleItem[];
}) {
  const { ici: makaleIci, disi: makaleDisi } = splitByKapsam(makaleler);

  return (
    <section id="akademik" className="border-t border-line py-22 md:py-24">
      <div className="mx-auto max-w-[1080px] px-7">
        <div className="mb-12 max-w-[620px]">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-terra">
            Akademik Çalışmalar
          </p>
          <h2 className="mt-2.5 font-[family-name:var(--font-display)] text-[28px] font-semibold text-burgundy-deep md:text-[34px]">
            Tezler &amp; Makaleler
          </h2>
          <p className="mt-3.5 text-ink-soft">
            Yüksek lisans ve doktora sürecimde yazdığım tezler ile yurt
            içi ve yurt dışında yayımlanan makalelerim.
          </p>
        </div>

        <h3 className="mb-4.5 text-lg text-ink">Tezler</h3>
        {tezler.length === 0 ? (
          <div className="mb-12">
            <EmptyState
              text="Henüz tez eklenmedi."
              hint="Yüksek lisans ve doktora tezleri yönetim panelinden eklendiğinde burada görünecek."
            />
          </div>
        ) : (
          <div className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tezler.map((t) => (
              <ContentCard
                key={t.id}
                tag={t.tur || "Tez"}
                title={t.baslik}
                meta={[t.universite, t.yil].filter(Boolean).join(" · ")}
                summary={t.ozet}
                link={t.link}
                linkLabel="Teze ulaş"
              />
            ))}
          </div>
        )}

        <h3 className="mb-4.5 text-lg text-ink">Makaleler</h3>
        {makaleler.length === 0 ? (
          <EmptyState
            text="Henüz makale eklenmedi."
            hint="Yurt içi ve yurt dışı yayınlarınız yönetim panelinden eklendiğinde burada görünecek."
          />
        ) : (
          <ScopeTabs
            iciCount={makaleIci.length}
            disiCount={makaleDisi.length}
            iciContent={
              makaleIci.length === 0 ? (
                <EmptyState text="Yurt içi makale bulunmuyor." hint="" />
              ) : (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {makaleIci.map((m) => (
                    <ContentCard
                      key={m.id}
                      tag="Makale"
                      title={m.baslik}
                      meta={[m.dergi, m.yil].filter(Boolean).join(" · ")}
                      summary={m.ozet}
                      link={m.link}
                      linkLabel="Makaleye ulaş"
                    />
                  ))}
                </div>
              )
            }
            disiContent={
              makaleDisi.length === 0 ? (
                <EmptyState text="Yurt dışı makale bulunmuyor." hint="" />
              ) : (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {makaleDisi.map((m) => (
                    <ContentCard
                      key={m.id}
                      tag="Makale"
                      title={m.baslik}
                      meta={[m.dergi, m.yil].filter(Boolean).join(" · ")}
                      summary={m.ozet}
                      link={m.link}
                      linkLabel="Makaleye ulaş"
                    />
                  ))}
                </div>
              )
            }
          />
        )}
      </div>
    </section>
  );
}
