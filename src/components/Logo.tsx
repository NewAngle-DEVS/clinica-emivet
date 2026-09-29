import { cn } from "../utils/cn";

type Props = {
  className?: string;
  variant?: "dark" | "light" | "mark";
};

export function Logo({ className, variant = "dark" }: Props) {
  if (variant === "mark") {
    return (
      <span className={cn("inline-flex items-center", className)} aria-label="EMIVET">
        <CrossMark />
      </span>
    );
  }

  return (
    <span
      className={cn("inline-flex items-center gap-2.5", className)}
      aria-label="EMIVET Clínica Veterinária"
    >
      <img
        src="/images/logo-emivet.png"
        alt="EMIVET Clínica Veterinária"
        className={cn(
          "h-10 w-auto object-contain sm:h-11",
          variant === "light" && "brightness-0 invert",
        )}
      />
    </span>
  );
}

function CrossMark() {
  return (
    <span className="relative grid h-10 w-10 place-items-center sm:h-11 sm:w-11">
      <span className="absolute inset-0 rounded-xl bg-emi-600 shadow-[0_8px_20px_-8px_rgba(27,122,61,0.65)]" />
      <svg viewBox="0 0 40 40" className="relative h-[22px] w-[22px] text-white" aria-hidden>
        <rect x="16" y="6" width="8" height="28" rx="2" fill="currentColor" />
        <rect x="6" y="16" width="28" height="8" rx="2" fill="currentColor" />
      </svg>
    </span>
  );
}
