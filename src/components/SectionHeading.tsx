import { Reveal } from "./Reveal";
import { cn } from "../utils/cn";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <p
            className={cn(
              "mb-4 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.22em] uppercase",
              light ? "text-emi-300" : "text-emi-600",
            )}
          >
            <span className={cn("h-px w-8", light ? "bg-emi-300/70" : "bg-emi-600/70")} />
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.06}>
        <h2
          className={cn(
            "font-display text-3xl leading-[1.05] font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem]",
            light ? "text-white" : "text-ink",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.12}>
          <p
            className={cn(
              "mt-5 max-w-2xl text-base leading-relaxed sm:text-lg",
              light ? "text-white/70" : "text-ink/60",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
