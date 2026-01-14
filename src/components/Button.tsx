import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  target?: "_blank" | "_self";
  rel?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  target = "_self",
  rel,
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-zinc-200/60 focus:ring-offset-2 focus:ring-offset-zinc-950";
  const styles =
    variant === "primary"
      ? "bg-zinc-50 text-zinc-950 hover:bg-zinc-200"
      : "border border-zinc-700 bg-zinc-950 text-zinc-50 hover:bg-zinc-900";

  return (
    <a href={href} target={target} rel={rel} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}
