import { AdminTopbar } from "@/components/admin/AdminUI";
import ChangePasswordForm from "@/components/admin/ChangePasswordForm";

export default function SifrePage() {
  return (
    <div>
      <AdminTopbar
        title="Şifre Değiştir"
        description="Yönetim paneline giriş yaptığınız şifreyi güncelleyin."
      />
      <ChangePasswordForm />
    </div>
  );
}
