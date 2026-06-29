"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({
  label = "Kaydet",
  pendingLabel = "Kaydediliyor…",
}: {
  label?: string;
  pendingLabel?: string;
}) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-[10px] bg-burgundy px-6 py-2.75 text-sm font-semibold text-white hover:bg-burgundy-deep disabled:opacity-60"
    >
      {pending ? pendingLabel : label}
    </button>
  );
}
