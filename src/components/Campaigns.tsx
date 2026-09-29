import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealItem, RevealStagger } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { whatsappUrl } from "../data/content";

const campaigns = [
  {
    title: "Campanha de Castração",
    subtitle: "Machos e fêmeas",
    description:
      "Procedimentos com segurança, orientação completa e acompanhamento no pós-operatório.",
    tone: "bg-emi-600 text-white",
  },
  {
    title: "Vacinas em dia",
    subtitle: "Protocolos importados",
    description:
      "Mantenha a proteção do seu pet atualizada, incluindo prevenção contra gripe canina.",
    tone: "bg-ink text-white",
  },
  {
    title: "Periodontia",
    subtitle: "Limpeza de tártaro",
    description:
      "Saúde bucal que reflete no bem-estar geral — com avaliação e cuidado especializado.",
    tone: "bg-white text-ink border border-ink/8",
  },
];

export function Campaigns() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Campanhas & prevenção"
          title={
            <>
              Cuidar também é{" "}
              <span className="font-serif italic font-normal text-emi-600">antecipar</span>.
            </>
          }
          description="Acompanhe as iniciativas da EMIVET e garanta o melhor para o seu melhor amigo."
        />

        <RevealStagger className="mt-12 grid gap-4 md:grid-cols-3">
          {campaigns.map((c) => (
            <RevealItem key={c.title}>
              <article
                className={`group flex h-full flex-col justify-between rounded-[1.75rem] p-7 transition duration-500 hover:-translate-y-1 ${c.tone}`}
              >
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.18em] uppercase opacity-70">
                    {c.subtitle}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-[1.7rem]">
                    {c.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed opacity-75">{c.description}</p>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold opacity-90 transition group-hover:gap-3"
                >
                  Quero saber mais
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal delay={0.1}>
          <div className="mt-10 overflow-hidden rounded-[2rem] bg-gradient-to-br from-emi-700 via-emi-600 to-emi-800 p-8 text-white sm:p-10 md:flex md:items-center md:justify-between md:gap-8">
            <div className="max-w-xl">
              <p className="text-[11px] font-semibold tracking-[0.2em] text-emi-200 uppercase">
                Checklist do pet feliz
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
                Bem-estar físico, mental e social — o combo que a EMIVET reforça com as famílias.
              </h3>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-emi-800 transition hover:bg-emi-50 md:mt-0"
            >
              Agendar check-up
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
