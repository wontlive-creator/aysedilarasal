"use server";

import { Resend } from "resend";
import { getSite } from "@/lib/data";

export type ContactFormState = {
  basari?: boolean;
  hata?: string;
};

/**
 * İletişim formundan gelen mesajı, sitenin tanımlı e-posta adresine
 * Resend üzerinden gönderir. Resend hesabı ve RESEND_API_KEY ortam
 * değişkeni olmadan bu fonksiyon anlamlı bir hata mesajı döner.
 */
export async function sendContactMessageAction(
  _prevState: ContactFormState | undefined,
  formData: FormData
): Promise<ContactFormState> {
  const ad = String(formData.get("ad") ?? "").trim();
  const eposta = String(formData.get("eposta") ?? "").trim();
  const mesaj = String(formData.get("mesaj") ?? "").trim();

  if (!ad || !eposta || !mesaj) {
    return { hata: "Lütfen tüm alanları doldurun." };
  }

  // Basit e-posta format kontrolü
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(eposta)) {
    return { hata: "Lütfen geçerli bir e-posta adresi girin." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      hata:
        "Site sahibi henüz e-posta gönderimini etkinleştirmedi (RESEND_API_KEY tanımlı değil).",
    };
  }

  const site = await getSite();
  if (!site.email) {
    return { hata: "Site sahibinin e-posta adresi tanımlı değil." };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      // Resend'de özel alan adı doğrulamadan önce yalnızca bu adresten
      // gönderim yapılabilir. Alan adınızı Resend'de doğruladıktan sonra
      // bunu örn. "Web Sitesi <site@aysedilarasal.com.tr>" olarak
      // güncelleyebilirsiniz.
      from: "Web Sitesi <onboarding@resend.dev>",
      to: site.email,
      replyTo: eposta,
      subject: `Web sitesi mesajı — ${ad}`,
      text: `Ad Soyad: ${ad}\nE-posta: ${eposta}\n\nMesaj:\n${mesaj}`,
    });

    if (error) {
      console.error("Resend hata:", error);
      return { hata: "Mesaj gönderilemedi, lütfen daha sonra tekrar deneyin." };
    }

    return { basari: true };
  } catch (err) {
    console.error("E-posta gönderim hatası:", err);
    return { hata: "Mesaj gönderilemedi, lütfen daha sonra tekrar deneyin." };
  }
}
