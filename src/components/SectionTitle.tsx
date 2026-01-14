export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8">
      <p className="text-sm font-semibold tracking-widest text-zinc-300/80">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-zinc-200/80">{subtitle}</p>
      ) : null}
    </div>
  );
}
