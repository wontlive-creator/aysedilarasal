"use client";

import { useState, type ReactNode } from "react";

export default function ScopeTabs({
  iciCount,
  disiCount,
  iciContent,
  disiContent,
}: {
  iciCount: number;
  disiCount: number;
  iciContent: ReactNode;
  disiContent: ReactNode;
}) {
  const [active, setActive] = useState<"ici" | "disi">("ici");

  return (
    <div>
      <div className="mb-8 inline-flex gap-1 rounded-full border border-line bg-white p-1">
        <button
          onClick={() => setActive("ici")}
          className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
            active === "ici"
              ? "bg-burgundy text-white"
              : "text-ink-soft hover:text-ink"
          }`}
        >
          Yurt İçi ({iciCount})
        </button>
        <button
          onClick={() => setActive("disi")}
          className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
            active === "disi"
              ? "bg-burgundy text-white"
              : "text-ink-soft hover:text-ink"
          }`}
        >
          Yurt Dışı ({disiCount})
        </button>
      </div>
      <div>{active === "ici" ? iciContent : disiContent}</div>
    </div>
  );
}
