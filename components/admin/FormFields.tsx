export function FormField({
  label,
  name,
  type = "text",
  defaultValue,
  required,
  hint,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  defaultValue?: string;
  required?: boolean;
  hint?: string;
  placeholder?: string;
}) {
  return (
    <div className="mb-5">
      <label className="mb-1.5 block text-[13.5px] font-semibold text-ink-soft">
        {label}
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-[10px] border-[1.5px] border-line bg-cream px-3.5 py-2.75 text-[15px] text-ink focus:border-terra focus:outline-none"
      />
      {hint && <p className="mt-1.5 text-[12.5px] text-ink-soft">{hint}</p>}
    </div>
  );
}

export function FormTextarea({
  label,
  name,
  defaultValue,
  required,
  hint,
  rows = 4,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  required?: boolean;
  hint?: string;
  rows?: number;
}) {
  return (
    <div className="mb-5">
      <label className="mb-1.5 block text-[13.5px] font-semibold text-ink-soft">
        {label}
      </label>
      <textarea
        name={name}
        defaultValue={defaultValue}
        required={required}
        rows={rows}
        className="w-full rounded-[10px] border-[1.5px] border-line bg-cream px-3.5 py-2.75 text-[15px] text-ink focus:border-terra focus:outline-none"
      />
      {hint && <p className="mt-1.5 text-[12.5px] text-ink-soft">{hint}</p>}
    </div>
  );
}

export function FormSelect({
  label,
  name,
  defaultValue,
  options,
  hint,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  options: { value: string; label: string }[];
  hint?: string;
}) {
  return (
    <div className="mb-5">
      <label className="mb-1.5 block text-[13.5px] font-semibold text-ink-soft">
        {label}
      </label>
      <select
        name={name}
        defaultValue={defaultValue}
        className="w-full rounded-[10px] border-[1.5px] border-line bg-cream px-3.5 py-2.75 text-[15px] text-ink focus:border-terra focus:outline-none"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {hint && <p className="mt-1.5 text-[12.5px] text-ink-soft">{hint}</p>}
    </div>
  );
}

export function FormCheckbox({
  label,
  name,
  defaultChecked,
}: {
  label: string;
  name: string;
  defaultChecked?: boolean;
}) {
  return (
    <div className="mb-5 flex items-center gap-2.5">
      <input
        type="checkbox"
        name={name}
        id={name}
        defaultChecked={defaultChecked}
        className="h-4.5 w-4.5 accent-burgundy"
      />
      <label htmlFor={name} className="text-[14.5px] font-medium text-ink">
        {label}
      </label>
    </div>
  );
}
