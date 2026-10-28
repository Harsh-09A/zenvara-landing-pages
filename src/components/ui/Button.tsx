import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "onDark";

const styles: Record<Variant, string> = {
  primary: "bg-navy text-white hover:bg-navy/90",
  secondary: "border border-gold text-navy hover:bg-gold/10",
  onDark: "border border-gold text-white hover:bg-white/10",
};

interface ButtonProps extends Omit<ComponentProps<typeof Link>, "className"> {
  variant?: Variant;
  className?: string;
  download?: boolean;
}

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  return (
    <Link
      className={`inline-flex min-h-12 items-center justify-center px-7 text-sm font-medium tracking-wide transition-colors ${styles[variant]} ${className}`}
      {...props}
    />
  );
}
