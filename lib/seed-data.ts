import type {
  SiteInfo,
  EgitimItem,
  DeneyimItem,
  ProjeItem,
} from "./types";

/**
 * İlk kurulumda Redis'e yazılacak gerçek içerik. "Tohumlama" (seed)
 * işlemi yalnızca admin panelindeki "İlk içeriği yükle" butonuyla,
 * bilinçli olarak tetiklenir; otomatik çalışmaz.
 */

export const SEED_SITE: SiteInfo = {
  ad_soyad: "Ayşe Dilara Sal",
  unvan: "Psikolojik Danışman (PDR)",
  hero_baslik: "Kendini tanıma yolculuğunda güvenli bir alan.",
  hakkinda:
    "Psikolojik Danışma ve Rehberlik yolculuğuma Gazi Üniversitesi'nde başladım ve bu tutkumu Hacettepe Üniversitesi'nde devam ettiğim Doktora programı ile en üst akademik seviyeye taşımayı hedefliyorum. Eğitim sürecim boyunca sadece teorik bilgilerle yetinmeyip; insanın duygu dünyasını anlamaya, sağlıklı iletişim kanalları kurmaya ve bireysel farkındalığı yönetmeye odaklandım.\nMesleğimi; teknik bir becerinin ötesinde, samimiyet ve güven üzerine kurulu bir yol arkadaşlığı olarak görüyorum. Lisans ve lisansüstü eğitimlerimde sağladığım güçlü altyapı ile bireylerin hayatlarına dokunmayı, onlara kendilerini tanıma yolculuklarında güvenli bir alan açmayı görev ediniyorum. Gelişime olan inancım ve akademik donanımımla, PDR alanında iz bırakan çalışmalar yapmaya ve danışanlarımın gelişim süreçlerine katkı sağlamaya devam ediyorum.",
  kariyer_hedefi:
    "Lisans, yüksek lisans ve doktora eğitimlerim boyunca başarıyla tamamladığım mesleki derslerim ve kişisel özelliklerim doğrultusunda; insan ilişkileri, iletişim, duygu ve düşünceleri fark ederek yönetme ilgi ve becerimin yanı sıra eğitimimde sağladığım alt yapı ve deneyimlerim ile kariyer danışmanlığı alanında ilerlemeyi planlamaktayım.",
  email: "aysedilarasal@gmail.com",
  telefon: "",
  sosyal: {
    wordpress: "https://dilarasal.wordpress.com/",
    twitter: "https://twitter.com/adilarapd",
    instagram: "https://instagram.com/adilara.sl",
    linkedin: "https://linkedin.com/ayse-dilara-sal-905203196",
  },
};

export const SEED_EGITIM: EgitimItem[] = [
  {
    id: "edu-1",
    derece: "Doktora",
    bolum: "Psikolojik Danışma ve Rehberlik",
    okul: "Hacettepe Üniversitesi",
    not_ortalamasi: "",
    baslangic: "Devam ediyor",
    bitis: "",
    devam_ediyor: true,
  },
  {
    id: "edu-2",
    derece: "Lisans",
    bolum: "Psikolojik Danışmanlık ve Rehberlik",
    okul: "Gazi Üniversitesi",
    not_ortalamasi: "3.75 / 4.00",
    baslangic: "09/2017",
    bitis: "06/2021",
    devam_ediyor: false,
  },
  {
    id: "edu-3",
    derece: "Lisans",
    bolum: "Sosyoloji (Açıköğretim Fakültesi)",
    okul: "Anadolu Üniversitesi",
    not_ortalamasi: "2.93 / 4.00",
    baslangic: "09/2018",
    bitis: "",
    devam_ediyor: false,
  },
];

export const SEED_DENEYIM: DeneyimItem[] = [
  {
    id: "exp-1",
    pozisyon: "Psikolojik Danışmanlık Hizmeti",
    kurum: "Serbest / Online",
    baslangic: "2019",
    bitis: "",
    devam_ediyor: true,
    aciklama:
      "Pandemi'nin insan hayatına eklemiş olduğu interaktif online iletişim kanallarının kullanımı ile uzaktan; kişisel gelişim ve kariyer planlaması alanlarında serbest olarak psikolojik danışmanlık hizmeti vermekteyim.",
  },
  {
    id: "exp-2",
    pozisyon: "Psikolojik Danışmanlık ve Gözlem Stajı",
    kurum: "Öz Bilinçli Psikolojik Danışmanlık Merkezi",
    baslangic: "",
    bitis: "",
    devam_ediyor: false,
    aciklama: "",
  },
];

export const SEED_PROJELER: ProjeItem[] = [
  {
    id: "proj-1",
    baslik: "Kaybeden & Bulan",
    aciklama:
      "Eşyanı mı kaybettin, yoksa bir şey mi buldun? Kaybolan ve bulunan eşyaların sahipleriyle buluşmasını sağlayan platform.",
    link_web: "https://kaybedenvebulan.com.tr/",
    link_play_store:
      "https://play.google.com/store/apps/details?id=com.kaybedenvebulan.app",
  },
];
