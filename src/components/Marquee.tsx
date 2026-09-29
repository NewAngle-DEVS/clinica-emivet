import { clinic } from "../data/content";

const items = [
  "Consultas",
  "Cirurgias",
  "Internação",
  "Urgências 24h",
  "Vacinas importadas",
  "Periodontia",
  "Cat Friendly",
  "Especialidades",
  clinic.address.city + "/" + clinic.address.state,
  "Exames e imagem",
];

export function Marquee() {
  const row = [...items, ...items];

  return (
    <section className="relative overflow-hidden border-y border-ink/8 bg-ink py-4 text-white" aria-hidden>
      <div className="flex w-max animate-[marquee_38s_linear_infinite] gap-0 will-change-transform">
        {row.map((item, i) => (
          <div key={`${item}-${i}`} className="flex items-center gap-6 px-6">
            <span className="font-display text-sm font-semibold tracking-[0.12em] uppercase sm:text-base">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-emi-400" />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[marquee_38s_linear_infinite\\] { animation: none; }
        }
      `}</style>
    </section>
  );
}
