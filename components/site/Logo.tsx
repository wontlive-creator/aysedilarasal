import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo/logo-icon.png"
      alt="Ayşe Dilara Sal logosu"
      width={200}
      height={175}
      className={`h-10 w-auto ${className}`}
      priority
    />
  );
}
