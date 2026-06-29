import bcrypt from "bcryptjs";
import { getObject, setObject } from "./store";
import type { AdminUser } from "./types";

/**
 * Admin kullanıcı adı/şifre hash'i normalde Redis'te tutulur, böylece
 * şifre değiştirme işlemi anında etkili olur ve yeniden deploy
 * gerektirmez. İlk kurulumda Redis'te kayıt yoksa, ADMIN_USERNAME /
 * ADMIN_PASSWORD_HASH ortam değişkenleri devreye girer (ilk girişi
 * yapabilmek için). İlk girişten sonra "Şifre Değiştir" sayfası
 * kaydı doğrudan Redis'e yazar.
 */
export async function getAdminUser(): Promise<AdminUser | null> {
  const stored = await getObject<AdminUser>("admin_user");
  if (stored) return stored;

  const envKullanici = process.env.ADMIN_USERNAME;
  const envHash = process.env.ADMIN_PASSWORD_HASH;
  if (envKullanici && envHash) {
    return { kullanici_adi: envKullanici, sifre_hash: envHash };
  }
  return null;
}

export async function saveAdminUser(user: AdminUser): Promise<void> {
  await setObject("admin_user", user);
}

export async function verifyCredentials(
  kullaniciAdi: string,
  sifre: string
): Promise<boolean> {
  const admin = await getAdminUser();
  if (!admin) {
    throw new Error(
      "Henüz bir admin kullanıcısı tanımlanmamış. ADMIN_USERNAME / ADMIN_PASSWORD_HASH ortam değişkenlerini kontrol edin."
    );
  }

  if (kullaniciAdi !== admin.kullanici_adi) {
    // Zamanlama farkını azaltmak için her durumda hash karşılaştırması yapılır.
    await bcrypt.compare(sifre, admin.sifre_hash);
    return false;
  }

  return bcrypt.compare(sifre, admin.sifre_hash);
}
