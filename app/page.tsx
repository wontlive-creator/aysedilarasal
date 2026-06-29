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
    </>
  );
}
