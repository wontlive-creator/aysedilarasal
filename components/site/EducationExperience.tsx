import type { EgitimItem, DeneyimItem } from "@/lib/types";

function EmptyState({ text }: { text: string }) {
  return (
    <div className="rounded-[18px] border-[1.5px] border-dashed border-line px-6 py-10 text-center text-ink-soft">
      <strong className="mb-1.5 block font-[family-name:var(--font-display)] text-lg text-burgundy-deep">
        {text}
      </strong>
      Yönetim panelinden ekleyebilirsiniz.
    </div>
  );
}

function TimelineDot({ active }: { active?: boolean }) {
  return (
    <span
      className={`absolute -left-9 top-1 h-4 w-4 rounded-full border-[3px] ${
        active ? "border-terra bg-terra" : "border-burgundy bg-white"
      }`}
    />
  );
}

export default function EducationExperience({
  egitim,
  deneyim,
}: {
  egitim: EgitimItem[];
  deneyim: DeneyimItem[];
}) {
  return (
    <section id="egitim" className="border-t border-line bg-cream-soft py-22 md:py-24">
      <div className="mx-auto max-w-[1080px] px-7">
        <div className="mb-12 max-w-[620px]">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-terra">
            Akademik &amp; Mesleki Yolculuk
          </p>
          <h2 className="mt-2.5 font-[family-name:var(--font-display)] text-[28px] font-semibold text-burgundy-deep md:text-[34px]">
            Eğitim ve Deneyim
          </h2>
          <p className="mt-3.5 text-ink-soft">
            Lisans eğitimimden doktora sürecime kadar attığım adımlar ve
            mesleki deneyimlerim.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-4.5 text-lg text-ink">Eğitim</h3>
            {egitim.length === 0 ? (
              <EmptyState text="Henüz eğitim bilgisi eklenmedi." />
            ) : (
              <div className="relative pl-9 before:absolute before:bottom-1.5 before:left-[7px] before:top-1.5 before:w-0.5 before:rounded-full before:bg-gradient-to-b before:from-terra before:to-burgundy">
                {egitim.map((e) => (
                  <div key={e.id} className="relative pb-9 last:pb-0">
                    <TimelineDot active={e.devam_ediyor} />
                    <div className="rounded-[14px] border border-line bg-white px-6 py-5">
                      <div className="mb-1.5 text-[13px] font-semibold uppercase tracking-[0.06em] text-terra">
                        {e.baslangic}
                        {e.bitis ? ` – ${e.bitis}` : ""}
                        {e.devam_ediyor && (
                          <span className="ml-2 rounded-full bg-cream-soft px-2.5 py-0.5 text-[12px] font-semibold text-burgundy normal-case tracking-normal">
                            Devam Ediyor
                          </span>
                        )}
                      </div>
                      <h3 className="text-[19px] text-burgundy-deep font-[family-name:var(--font-display)]">
                        {e.derece}
                      </h3>
                      <p className="mb-2 text-[15px] font-medium text-ink-soft">
                        {e.bolum} &middot; {e.okul}
                      </p>
                      {e.not_ortalamasi && (
                        <p className="text-[15px] text-ink-soft">
                          Not Ortalaması: {e.not_ortalamasi}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <h3 className="mb-4.5 text-lg text-ink">Deneyim</h3>
            {deneyim.length === 0 ? (
              <EmptyState text="Henüz deneyim bilgisi eklenmedi." />
            ) : (
              <div className="relative pl-9 before:absolute before:bottom-1.5 before:left-[7px] before:top-1.5 before:w-0.5 before:rounded-full before:bg-gradient-to-b before:from-terra before:to-burgundy">
                {deneyim.map((d) => (
                  <div key={d.id} className="relative pb-9 last:pb-0">
                    <TimelineDot active={d.devam_ediyor} />
                    <div className="rounded-[14px] border border-line bg-white px-6 py-5">
                      {d.baslangic && (
                        <div className="mb-1.5 text-[13px] font-semibold uppercase tracking-[0.06em] text-terra">
                          {d.baslangic}
                          {d.bitis
                            ? ` – ${d.bitis}`
                            : d.devam_ediyor
                            ? " – Halen"
                            : ""}
                        </div>
                      )}
                      <h3 className="text-[19px] text-burgundy-deep font-[family-name:var(--font-display)]">
                        {d.pozisyon}
                      </h3>
                      <p className="mb-2 text-[15px] font-medium text-ink-soft">
                        {d.kurum}
                      </p>
                      {d.aciklama && (
                        <p className="text-[15px] text-ink-soft">{d.aciklama}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
