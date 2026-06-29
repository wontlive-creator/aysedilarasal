import Script from "next/script";
import {
  getSite,
  getEgitim,
  getDeneyim,
  getTezler,
  getMakaleler,
  getKongreler,
  getProjeler,
} from "@/lib/data";
import SiteNav from "@/components/site/SiteNav";
import Hero from "@/components/site/Hero";
import AboutSection from "@/components/site/AboutSection";
import EducationExperience from "@/components/site/EducationExperience";
import AcademicWorks from "@/components/site/AcademicWorks";
import CongressSection from "@/components/site/CongressSection";
import ProjectsSection from "@/components/site/ProjectsSection";
import ContactSection from "@/components/site/ContactSection";
import SiteFooter from "@/components/site/SiteFooter";

// Admin panelinden yapılan her güncelleme anında yansısın diye
// statik önbellekleme kapalı; sayfa her istekte yeniden render edilir.
export const dynamic = "force-dynamic";

export default async function HomePage() {
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

  return (
    <>
      <SiteNav adSoyad={site.ad_soyad} />
      <Hero site={site} />
      <AboutSection site={site} />
      <EducationExperience egitim={egitim} deneyim={deneyim} />
      <AcademicWorks tezler={tezler} makaleler={makaleler} />
      <CongressSection kongreler={kongreler} />
      <ProjectsSection projeler={projeler} />
      <ContactSection site={site} />
      <SiteFooter adSoyad={site.ad_soyad} />

      {/* Google AdSense — sadece herkese açık ana sayfada yüklenir */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6368006900269736"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      {/* Statcounter — sadece herkese açık ana sayfada yüklenir */}
      <Script id="statcounter-init" strategy="afterInteractive">
        {`
          var sc_project=13330001;
          var sc_invisible=1;
          var sc_security="c5b4bb00";
        `}
      </Script>
      <Script
        src="https://www.statcounter.com/counter/counter.js"
        strategy="afterInteractive"
      />
      <noscript>
        <div className="statcounter">
          <a
            title="Web Analytics Made Easy - Statcounter"
            href="https://statcounter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="statcounter"
              src="https://c.statcounter.com/13330001/0/c5b4bb00/1/"
              alt="Web Analytics Made Easy - Statcounter"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </a>
        </div>
      </noscript>
    </>
  );
}
