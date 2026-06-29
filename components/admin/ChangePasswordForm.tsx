"use client";

import { useActionState } from "react";
import { changePasswordAction } from "@/lib/actions/auth-actions";
import { Alert } from "@/components/admin/AdminUI";

export default function ChangePasswordForm() {
  const [state, formAction, pending] = useActionState(
    changePasswordAction,
    undefined
  );

  return (
    <form
      action={formAction}
      className="rounded-[14px] border border-line bg-white p-7"
    >
      {state?.hata && <Alert kind="danger">{state.hata}</Alert>}
      {state?.basari && <Alert kind="success">{state.basari}</Alert>}

      <div className="mb-5">
        <label className="mb-1.5 block text-[13.5px] font-semibold text-ink-soft">
          Mevcut Şifre
        </label>
        <input
          type="password"
          name="mevcut_sifre"
          required
          className="w-full rounded-[10px] border-[1.5px] border-line bg-cream px-3.5 py-2.75 text-[15px] text-ink focus:border-terra focus:outline-none"
        />
      </div>
      <div className="mb-5">
        <label className="mb-1.5 block text-[13.5px] font-semibold text-ink-soft">
          Yeni Şifre
        </label>
        <input
          type="password"
          name="yeni_sifre"
          required
          minLength={8}
          className="w-full rounded-[10px] border-[1.5px] border-line bg-cream px-3.5 py-2.75 text-[15px] text-ink focus:border-terra focus:outline-none"
        />
        <p className="mt-1.5 text-[12.5px] text-ink-soft">En az 8 karakter olmalıdır.</p>
      </div>
      <div className="mb-2">
        <label className="mb-1.5 block text-[13.5px] font-semibold text-ink-soft">
          Yeni Şifre (Tekrar)
        </label>
        <input
          type="password"
          name="yeni_sifre_tekrar"
          required
          minLength={8}
          className="w-full rounded-[10px] border-[1.5px] border-line bg-cream px-3.5 py-2.75 text-[15px] text-ink focus:border-terra focus:outline-none"
        />
      </div>

      <div className="mt-6">
        <button
          type="submit"
          disabled={pending}
          className="rounded-[10px] bg-burgundy px-6 py-2.75 text-sm font-semibold text-white hover:bg-burgundy-deep disabled:opacity-60"
        >
          {pending ? "Güncelleniyor…" : "Şifreyi Güncelle"}
        </button>
      </div>
    </form>
  );
}
