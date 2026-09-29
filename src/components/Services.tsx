import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { services, whatsappUrl } from "../data/content";
import { cn } from "../utils/cn";

export function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="servicos" className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute top-0 right-0 h-[480px] w-[480px] rounded-full bg-emi-600/20 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-teal-500/10 blur-[90px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            light
            eyebrow="O que fazemos"
            title={
              <>
                Serviços pensados para{" "}
                <span className="font-serif italic font-normal text-emi-300">cada momento</span> da vida do seu pet.
              </>
            }
            description="Da prevenção à emergência: estrutura integrada para decisões rápidas, seguras e humanas."
          />
          <Reveal delay={0.1}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-emi-400/50 hover:bg-white/5"
            >
              Solicitar atendimento
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        {/* Desktop interactive list */}
        <div className="mt-14 hidden gap-10 lg:grid lg:grid-cols-12">
          <div className="lg:col-span-5">
            <ul className="space-y-1">
              {services.map((service, i) => (
                <li key={service.id}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    data-cursor="hover"
                    className={cn(
                      "group flex w-full items-center justify-between border-b border-white/10 py-5 text-left transition-colors",
                      active === i ? "border-emi-400/40" : "hover:border-white/25",
                    )}
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-white/30">0{i + 1}</span>
                      <span
                        className={cn(
                          "font-display text-2xl font-bold tracking-tight transition-colors",
                          active === i ? "text-white" : "text-white/45 group-hover:text-white/80",
                        )}
                      >
                        {service.title}
                      </span>
                    </span>
                    <ArrowUpRight
                      className={cn(
                        "h-5 w-5 transition-all",
                        active === i ? "translate-x-0 text-emi-300 opacity-100" : "-translate-x-1 text-white/20 opacity-0 group-hover:opacity-60",
                      )}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative lg:col-span-7">
            <div className="sticky top-28 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm xl:p-10">
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${current.accent}`} />
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-[11px] font-semibold tracking-[0.22em] text-emi-300 uppercase">
                    Serviço em destaque
                  </p>
                  <h3 className="mt-3 font-display text-4xl font-bold tracking-tight xl:text-5xl">
                    {current.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-white/65 xl:text-lg">
                    {current.description}
                  </p>
                  <ul className="mt-8 space-y-3">
                    {current.details.map((d) => (
                      <li key={d} className="flex items-center gap-3 text-sm text-white/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-emi-400" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="mt-10 inline-flex items-center gap-2 rounded-full bg-emi-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emi-500"
                  >
                    Quero esse atendimento
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile cards */}
        <div className="mt-12 grid gap-4 lg:hidden">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.04}>
              <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-mono text-xs text-white/30">0{i + 1}</span>
                  <span className={`h-1 w-12 rounded-full bg-gradient-to-r ${service.accent}`} />
                </div>
                <h3 className="font-display text-xl font-bold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{service.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.details.map((d) => (
                    <span key={d} className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70">
                      {d}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
