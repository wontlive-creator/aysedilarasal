import Link from "next/link";

export function AdminTopbar({
  title,
  description,
  actionHref,
  actionLabel,
}: {
  title: string;
  description?: string;
  actionHref?: string;
  actionLabel?: string;
}) {
  return (
    <div className="mb-7 flex flex-wrap items-start justify-between gap-4">
      <div>
        <h1 className="text-[26px] text-burgundy-deep font-[family-name:var(--font-display)]">
          {title}
        </h1>
        {description && (
          <p className="mt-1.5 text-[14.5px] text-ink-soft">{description}</p>
        )}
      </div>
      {actionHref && actionLabel && (
        <Link
          href={actionHref}
          className="rounded-[10px] bg-burgundy px-5 py-2.5 text-sm font-semibold text-white hover:bg-burgundy-deep"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
}

export function Alert({ kind, children }: { kind: "success" | "danger"; children: React.ReactNode }) {
  return (
    <div
      className={`mb-5.5 rounded-[10px] px-4.5 py-3.5 text-[14.5px] whitespace-pre-line ${
        kind === "success" ? "bg-success-bg text-success" : "bg-danger-bg text-danger"
      }`}
    >
      {children}
    </div>
  );
}

export function EmptyHint({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[14px] border-[1.5px] border-dashed border-line px-5 py-9 text-center text-ink-soft">
      {children}
    </div>
  );
}
