export default function ContentCard({
  tag,
  title,
  meta,
  summary,
  link,
  linkLabel = "Detayına ulaş",
}: {
  tag: string;
  title: string;
  meta?: string;
  summary?: string;
  link?: string;
  linkLabel?: string;
}) {
  return (
    <div className="flex flex-col gap-2.5 rounded-[18px] border border-line bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-12px_rgba(58,46,42,0.18)]">
      <span className="self-start text-xs font-bold uppercase tracking-wide text-terra">
        {tag}
      </span>
      <h3 className="text-[18px] leading-snug text-burgundy-deep font-[family-name:var(--font-display)]">
        {title}
      </h3>
      {meta && <p className="text-[13.5px] text-ink-soft">{meta}</p>}
      {summary && <p className="flex-grow text-[14.5px] text-ink-soft">{summary}</p>}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-burgundy hover:text-burgundy-deep"
        >
          {linkLabel} →
        </a>
      )}
    </div>
  );
}
