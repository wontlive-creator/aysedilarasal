import type { KongreItem } from "@/lib/types";
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

export default function CongressSection({
  kongreler,
}: {
  kongreler: KongreItem[];
}) {
  const { ici, disi } = splitByKapsam(kongreler);

  return (
    <section
      id="kongreler"
      className="border-t border-line bg-cream-soft py-22 md:py-24"
    >
      <div className="mx-auto max-w-[1080px] px-7">
        <div className="mb-12 max-w-[620px]">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-terra">
            Bilimsel Etkinlikler
          </p>
          <h2 className="mt-2.5 font-[family-name:var(--font-display)] text-[28px] font-semibold text-burgundy-deep md:text-[34px]">
            Kongreler &amp; Sempozyumlar
          </h2>
          <p className="mt-3.5 text-ink-soft">
            Katılım sağladığım yurt içi ve yurt dışı kongre, sempozyum ve
            bilimsel toplantılar.
          </p>
        </div>

        {kongreler.length === 0 ? (
          <EmptyState
            text="Henüz kongre/sempozyum eklenmedi."
            hint="Katıldığınız etkinlikleri yönetim panelinden eklediğinizde burada görünecek."
          />
        ) : (
          <ScopeTabs
            iciCount={ici.length}
            disiCount={disi.length}
            iciContent={
              ici.length === 0 ? (
                <EmptyState text="Yurt içi etkinlik bulunmuyor." hint="" />
              ) : (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {ici.map((k) => (
                    <ContentCard
                      key={k.id}
                      tag={k.katki_turu || "Katılımcı"}
                      title={k.baslik}
                      meta={[k.sehir, k.tarih].filter(Boolean).join(" · ")}
                      summary={k.aciklama}
                    />
                  ))}
                </div>
              )
            }
            disiContent={
              disi.length === 0 ? (
                <EmptyState text="Yurt dışı etkinlik bulunmuyor." hint="" />
              ) : (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {disi.map((k) => (
                    <ContentCard
                      key={k.id}
                      tag={k.katki_turu || "Katılımcı"}
                      title={k.baslik}
                      meta={[k.sehir, k.tarih].filter(Boolean).join(" · ")}
                      summary={k.aciklama}
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
