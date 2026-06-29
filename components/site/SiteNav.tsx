"use client";

import { useState } from "react";
import Logo from "./Logo";

const LINKS = [
  { href: "#hakkinda", label: "Hakkında" },
  { href: "#egitim", label: "Eğitim & Deneyim" },
  { href: "#akademik", label: "Akademik Çalışmalar" },
  { href: "#kongreler", label: "Kongreler" },
  { href: "#projeler", label: "Projeler" },
  { href: "#iletisim", label: "İletişim" },
];

export default function SiteNav({ adSoyad }: { adSoyad: string }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-cream/90 backdrop-blur-sm">
      <div className="mx-auto flex h-[72px] max-w-[1080px] items-center justify-between px-7">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo />
          <span className="font-[family-name:var(--font-display)] text-xl font-semibold text-burgundy-deep">
            {adSoyad}
            <span className="text-terra">.</span>
          </span>
        </a>

        <ul className="hidden gap-7 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[15px] font-medium text-ink hover:text-burgundy"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-label="Menüyü aç"
          className="text-2xl text-burgundy-deep md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          ☰
        </button>
      </div>

      {open && (
        <ul className="flex flex-col gap-4 border-b border-line bg-cream px-7 pb-7 md:hidden">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block text-[15px] font-medium text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
