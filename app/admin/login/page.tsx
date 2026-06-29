import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import LoginForm from "./LoginForm";

export default async function LoginPage() {
  const session = await getSession();
  if (session) {
    redirect("/admin");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-cream-soft p-5">
      <div className="w-full max-w-[380px] rounded-[20px] border border-line bg-white p-11 shadow-[0_14px_40px_-16px_rgba(58,46,42,0.2)]">
        <h1 className="text-2xl text-burgundy-deep font-[family-name:var(--font-display)]">
          Yönetim Paneli
        </h1>
        <p className="mb-7 mt-1.5 text-sm text-ink-soft">
          Sitenizin içeriğini güncellemek için giriş yapın.
        </p>
        <LoginForm />
      </div>
    </div>
  );
}
