"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { seedContentAction } from "@/lib/actions/seed-actions";

export default function SeedButton() {
  const [pending, setPending] = useState(false);
  const [mesaj, setMesaj] = useState<string | null>(null);
  const router = useRouter();

  async function handleClick() {
    setPending(true);
    setMesaj(null);
    const result = await seedContentAction();
    setPending(false);
    setMesaj(result.basari ?? result.hata ?? null);
    if (result.basari) {
      router.refresh();
    }
  }

  return (
    <div>
      <button
        onClick={handleClick}
        disabled={pending}
        className="rounded-[10px] bg-burgundy px-5 py-2.5 text-sm font-semibold text-white hover:bg-burgundy-deep disabled:opacity-60"
      >
        {pending ? "Yükleniyor…" : "Örnek İçeriği Yükle"}
      </button>
      {mesaj && <p className="mt-3 text-sm text-ink-soft">{mesaj}</p>}
    </div>
  );
}
