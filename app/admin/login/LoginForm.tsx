"use client";

import { useActionState } from "react";
import { loginAction } from "@/lib/actions/auth-actions";

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAction, undefined);

  return (
    <form action={formAction}>
      {state?.hata && (
        <div className="mb-5 rounded-[10px] bg-danger-bg px-4 py-3 text-sm text-danger">
          {state.hata}
        </div>
      )}
      <div className="mb-5">
        <label className="mb-1.5 block text-sm font-semibold text-ink-soft">
          Kullanıcı Adı
        </label>
        <input
          type="text"
          name="kullanici_adi"
          required
          autoFocus
          className="w-full rounded-[10px] border-[1.5px] border-line bg-cream px-3.5 py-3 text-[15px] focus:border-terra focus:outline-none"
        />
      </div>
      <div className="mb-6">
        <label className="mb-1.5 block text-sm font-semibold text-ink-soft">
          Şifre
        </label>
        <input
          type="password"
          name="sifre"
          required
          className="w-full rounded-[10px] border-[1.5px] border-line bg-cream px-3.5 py-3 text-[15px] focus:border-terra focus:outline-none"
        />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-[10px] bg-burgundy px-5 py-3 text-center text-[15px] font-semibold text-white transition hover:bg-burgundy-deep disabled:opacity-60"
      >
        {pending ? "Giriş yapılıyor…" : "Giriş Yap"}
      </button>
    </form>
  );
}
