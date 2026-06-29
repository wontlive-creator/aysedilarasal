export default function SiteFooter({ adSoyad }: { adSoyad: string }) {
  return (
    <footer className="border-t border-line py-8 text-center text-[13.5px] text-ink-soft">
      <div className="mx-auto max-w-[1080px] px-7">
        <p>&copy; {new Date().getFullYear()} {adSoyad}. Tüm hakları saklıdır.</p>
        <p className="mt-1">
          <a href="/admin" className="text-[13px] text-ink-soft hover:text-burgundy">
            Yönetim Paneli
          </a>
        </p>
      </div>
    </footer>
  );
}
