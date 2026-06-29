"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logoutAction } from "@/lib/actions/auth-actions";

const MENU_ICERIK = [
  { href: "/admin", label: "Genel Bakış", icon: "🏠", exact: true },
];

const MENU_GRUP_ICERIK = [
  { href: "/admin/hakkinda", label: "Hakkımda", icon: "👤" },
  { href: "/admin/egitim", label: "Eğitim", icon: "🎓" },
  { href: "/admin/deneyim", label: "Deneyim", icon: "💼" },
  { href: "/admin/tezler", label: "Tezler", icon: "📘" },
  { href: "/admin/makaleler", label: "Makaleler", icon: "📄" },
  { href: "/admin/kongreler", label: "Kongreler", icon: "🎤" },
  { href: "/admin/projeler", label: "Projeler", icon: "📦" },
];

const MENU_GRUP_AYAR = [
  { href: "/admin/iletisim", label: "İletişim Bilgileri", icon: "✉️" },
  { href: "/admin/sifre", label: "Şifre Değiştir", icon: "🔒" },
];

export default function AdminSidebar({ adSoyad }: { adSoyad: string }) {
  const pathname = usePathname();

  function isActive(href: string, exact?: boolean) {
    return exact ? pathname === href : pathname.startsWith(href);
  }

  function NavLink({
    href,
    label,
    icon,
    exact,
  }: {
    href: string;
    label: string;
    icon: string;
    exact?: boolean;
  }) {
    return (
      <li>
        <Link
          href={href}
          className={`flex items-center gap-2.5 rounded-[10px] px-3.5 py-2.5 text-[14.5px] font-medium ${
            isActive(href, exact)
              ? "bg-terra text-white"
              : "text-white/78 hover:bg-white/8 hover:text-white"
          }`}
        >
          <span>{icon}</span>
          {label}
        </Link>
      </li>
    );
  }

  return (
    <aside className="w-full shrink-0 bg-burgundy-deep p-7 text-white md:w-[250px]">
      <div className="mb-1 text-[19px] font-[family-name:var(--font-display)]">
        {adSoyad}
      </div>
      <div className="mb-7 text-[12.5px] text-white/65">Yönetim Paneli</div>

      <ul className="space-y-0.5">
        {MENU_ICERIK.map((item) => (
          <NavLink key={item.href} {...item} />
        ))}
      </ul>

      <div className="mb-2 mt-5.5 ml-3.5 text-[11px] uppercase tracking-[0.08em] text-white/50">
        İçerik
      </div>
      <ul className="space-y-0.5">
        {MENU_GRUP_ICERIK.map((item) => (
          <NavLink key={item.href} {...item} />
        ))}
      </ul>

      <div className="mb-2 mt-5.5 ml-3.5 text-[11px] uppercase tracking-[0.08em] text-white/50">
        Ayarlar
      </div>
      <ul className="space-y-0.5">
        {MENU_GRUP_AYAR.map((item) => (
          <NavLink key={item.href} {...item} />
        ))}
        <li>
          <a
            href="/"
            target="_blank"
            className="flex items-center gap-2.5 rounded-[10px] px-3.5 py-2.5 text-[14.5px] font-medium text-white/78 hover:bg-white/8 hover:text-white"
          >
            🔗 Siteyi Görüntüle
          </a>
        </li>
        <li>
          <form action={logoutAction}>
            <button
              type="submit"
              className="flex w-full items-center gap-2.5 rounded-[10px] px-3.5 py-2.5 text-left text-[14.5px] font-medium text-white/78 hover:bg-white/8 hover:text-white"
            >
              🚪 Çıkış Yap
            </button>
          </form>
        </li>
      </ul>
    </aside>
  );
}
