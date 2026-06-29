"use client";

import { useState } from "react";

export default function ContactForm({ targetEmail }: { targetEmail: string }) {
  const [ad, setAd] = useState("");
  const [eposta, setEposta] = useState("");
  const [mesaj, setMesaj] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!targetEmail) return;
    const konu = encodeURIComponent(`Web sitesi mesajı — ${ad}`);
    const govde = encodeURIComponent(
      `Ad Soyad: ${ad}\nE-posta: ${eposta}\n\nMesaj:\n${mesaj}`
    );
    window.location.href = `mailto:${targetEmail}?subject=${konu}&body=${govde}`;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4.5">
        <label className="mb-1.5 block text-[13.5px] font-semibold text-ink-soft">
          Ad Soyad
        </label>
        <input
          type="text"
          required
          value={ad}
          onChange={(e) => setAd(e.target.value)}
          className="w-full rounded-[10px] border-[1.5px] border-line bg-cream px-3.5 py-3 text-[15px] text-ink focus:border-terra focus:outline-none"
        />
      </div>
      <div className="mb-4.5">
        <label className="mb-1.5 block text-[13.5px] font-semibold text-ink-soft">
          E-posta
        </label>
        <input
          type="email"
          required
          value={eposta}
          onChange={(e) => setEposta(e.target.value)}
          className="w-full rounded-[10px] border-[1.5px] border-line bg-cream px-3.5 py-3 text-[15px] text-ink focus:border-terra focus:outline-none"
        />
      </div>
      <div className="mb-4.5">
        <label className="mb-1.5 block text-[13.5px] font-semibold text-ink-soft">
          Mesajınız
        </label>
        <textarea
          required
          rows={4}
          value={mesaj}
          onChange={(e) => setMesaj(e.target.value)}
          className="w-full rounded-[10px] border-[1.5px] border-line bg-cream px-3.5 py-3 text-[15px] text-ink focus:border-terra focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-burgundy px-7 py-3.5 text-center text-[15px] font-semibold text-white transition hover:bg-burgundy-deep"
      >
        Gönder
      </button>
    </form>
  );
}
