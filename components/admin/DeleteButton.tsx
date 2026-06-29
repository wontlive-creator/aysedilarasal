"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DeleteButton({
  itemId,
  deleteAction,
}: {
  itemId: string;
  deleteAction: (id: string) => Promise<void>;
}) {
  const [confirming, setConfirming] = useState(false);
  const [pending, setPending] = useState(false);
  const router = useRouter();

  if (confirming) {
    return (
      <div className="flex items-center gap-1.5">
        <button
          disabled={pending}
          onClick={async () => {
            setPending(true);
            await deleteAction(itemId);
            router.refresh();
          }}
          className="rounded-[8px] bg-danger px-3.5 py-1.5 text-[13px] font-semibold text-white disabled:opacity-60"
        >
          {pending ? "Siliniyor…" : "Onayla"}
        </button>
        <button
          onClick={() => setConfirming(false)}
          className="rounded-[8px] border-[1.5px] border-line px-3.5 py-1.5 text-[13px] font-semibold text-ink"
        >
          Vazgeç
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => setConfirming(true)}
      className="rounded-[8px] bg-danger-bg px-3.5 py-1.5 text-[13px] font-semibold text-danger hover:bg-danger hover:text-white"
    >
      Sil
    </button>
  );
}
