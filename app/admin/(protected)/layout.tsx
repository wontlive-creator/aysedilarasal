import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { getSite } from "@/lib/data";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default async function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  if (!session) {
    redirect("/admin/login");
  }

  const site = await getSite();

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <AdminSidebar adSoyad={site.ad_soyad || "Yönetim Paneli"} />
      <main className="max-w-[980px] flex-grow p-6 md:p-11">{children}</main>
    </div>
  );
}
