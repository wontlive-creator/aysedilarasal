"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { verifyCredentials, getAdminUser, saveAdminUser } from "@/lib/credentials";
import { createSession, destroySession, requireSession } from "@/lib/auth";

const ATTEMPTS_COOKIE = "loginAttempts";
const MAX_ATTEMPTS = 8;
const WINDOW_SECONDS = 300;

export async function loginAction(
  _prevState: { hata?: string } | undefined,
  formData: FormData
): Promise<{ hata?: string }> {
  const kullaniciAdi = String(formData.get("kullanici_adi") ?? "").trim();
  const sifre = String(formData.get("sifre") ?? "");

  const cookieStore = await cookies();
  const now = Math.floor(Date.now() / 1000);
  const raw = cookieStore.get(ATTEMPTS_COOKIE)?.value;
  let attempts: number[] = [];
  if (raw) {
    try {
      attempts = (JSON.parse(raw) as number[]).filter(
        (t) => t > now - WINDOW_SECONDS
      );
    } catch {
      attempts = [];
    }
  }

  if (attempts.length >= MAX_ATTEMPTS) {
    return {
      hata: "Çok fazla başarısız deneme yapıldı. Lütfen birkaç dakika sonra tekrar deneyin.",
    };
  }

  if (!kullaniciAdi || !sifre) {
    return { hata: "Kullanıcı adı ve şifre gereklidir." };
  }

  try {
    const gecerli = await verifyCredentials(kullaniciAdi, sifre);
    if (!gecerli) {
      attempts.push(now);
      cookieStore.set(ATTEMPTS_COOKIE, JSON.stringify(attempts), {
        httpOnly: true,
        maxAge: WINDOW_SECONDS,
        path: "/",
      });
      return { hata: "Kullanıcı adı veya şifre yanlış." };
    }
  } catch {
    return {
      hata:
        "Henüz bir admin kullanıcısı tanımlanmamış. Vercel proje ayarlarında ADMIN_USERNAME / ADMIN_PASSWORD_HASH ortam değişkenlerini ekleyin.",
    };
  }

  cookieStore.delete(ATTEMPTS_COOKIE);
  await createSession(kullaniciAdi);
  redirect("/admin");
}

export async function logoutAction(): Promise<void> {
  await destroySession();
  redirect("/admin/login");
}

export async function changePasswordAction(
  _prevState: { hata?: string; basari?: string } | undefined,
  formData: FormData
): Promise<{ hata?: string; basari?: string }> {
  await requireSession();

  const mevcut = String(formData.get("mevcut_sifre") ?? "");
  const yeni = String(formData.get("yeni_sifre") ?? "");
  const yeniTekrar = String(formData.get("yeni_sifre_tekrar") ?? "");

  const admin = await getAdminUser();
  if (!admin) {
    return { hata: "Admin kullanıcısı bulunamadı." };
  }

  const gecerli = await verifyCredentials(admin.kullanici_adi, mevcut);
  if (!gecerli) {
    return { hata: "Mevcut şifreniz yanlış." };
  }

  if (yeni.length < 8) {
    return { hata: "Yeni şifre en az 8 karakter olmalıdır." };
  }
  if (yeni !== yeniTekrar) {
    return { hata: "Yeni şifre tekrarı eşleşmiyor." };
  }

  const yeniHash = await bcrypt.hash(yeni, 10);
  await saveAdminUser({ kullanici_adi: admin.kullanici_adi, sifre_hash: yeniHash });

  return { basari: "Şifreniz başarıyla güncellendi." };
}
