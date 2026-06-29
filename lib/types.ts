// Tüm içerik tipleri burada tanımlanır. Admin formları ve genel site
// bileşenleri aynı tipleri kullanır.

export type Kapsam = "yurt_ici" | "yurt_disi";

export interface SiteInfo {
  ad_soyad: string;
  unvan: string;
  hero_baslik: string;
  hakkinda: string; // \n ile ayrılmış paragraflar
  kariyer_hedefi: string;
  email: string;
  telefon: string;
  sosyal: {
    wordpress?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export interface EgitimItem {
  id: string;
  derece: string; // Lisans, Yüksek Lisans, Doktora
  bolum: string;
  okul: string;
  not_ortalamasi?: string;
  baslangic: string;
  bitis?: string;
  devam_ediyor: boolean;
}

export interface DeneyimItem {
  id: string;
  pozisyon: string;
  kurum: string;
  baslangic?: string;
  bitis?: string;
  devam_ediyor: boolean;
  aciklama?: string;
}

export interface TezItem {
  id: string;
  tur: string; // "Yüksek Lisans Tezi" | "Doktora Tezi"
  baslik: string;
  universite?: string;
  yil?: string;
  ozet?: string;
  link?: string;
}

export interface MakaleItem {
  id: string;
  baslik: string;
  dergi?: string;
  yil?: string;
  kapsam: Kapsam;
  ozet?: string;
  link?: string;
}

export interface KongreItem {
  id: string;
  baslik: string;
  katki_turu?: string; // Sözlü Bildiri, Poster, Davetli Konuşmacı, Katılımcı...
  sehir?: string;
  tarih?: string;
  kapsam: Kapsam;
  aciklama?: string;
}

export interface ProjeItem {
  id: string;
  baslik: string;
  aciklama?: string;
  link_web?: string;
  link_play_store?: string;
}

export interface AdminUser {
  kullanici_adi: string;
  sifre_hash: string;
}
