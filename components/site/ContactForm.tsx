"use client";

import { useActionState, useEffect, useRef } from "react";
import { sendContactMessageAction } from "@/lib/actions/contact-actions";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContactMessageAction,
    undefined
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.basari) {
      formRef.current?.reset();
    }
  }, [state?.basari]);

  return (
    <form ref={formRef} action={formAction}>
      {state?.hata && (
        <div className="mb-4.5 rounded-[10px] bg-danger-bg px-4 py-3 text-sm text-danger">
          {state.hata}
        </div>
      )}
      {state?.basari && (
        <div className="mb-4.5 rounded-[10px] bg-success-bg px-4 py-3 text-sm text-success">
          Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapılacaktır.
        </div>
      )}

      <div className="mb-4.5">
        <label className="mb-1.5 block text-[13.5px] font-semibold text-ink-soft">
          Ad Soyad
        </label>
        <input
          type="text"
          name="ad"
          required
          className="w-full rounded-[10px] border-[1.5px] border-line bg-cream px-3.5 py-3 text-[15px] text-ink focus:border-terra focus:outline-none"
        />
      </div>
      <div className="mb-4.5">
        <label className="mb-1.5 block text-[13.5px] font-semibold text-ink-soft">
          E-posta
        </label>
        <input
          type="email"
          name="eposta"
          required
          className="w-full rounded-[10px] border-[1.5px] border-line bg-cream px-3.5 py-3 text-[15px] text-ink focus:border-terra focus:outline-none"
        />
      </div>
      <div className="mb-4.5">
        <label className="mb-1.5 block text-[13.5px] font-semibold text-ink-soft">
          Mesajınız
        </label>
        <textarea
          name="mesaj"
          required
          rows={4}
          className="w-full rounded-[10px] border-[1.5px] border-line bg-cream px-3.5 py-3 text-[15px] text-ink focus:border-terra focus:outline-none"
        />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-burgundy px-7 py-3.5 text-center text-[15px] font-semibold text-white transition hover:bg-burgundy-deep disabled:opacity-60"
      >
        {pending ? "Gönderiliyor…" : "Gönder"}
      </button>
    </form>
  );
}
