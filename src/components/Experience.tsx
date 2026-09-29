import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { careTips, clinic } from "../data/content";
import { Reveal } from "./Reveal";

export function Experience() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <p className="mb-4 text-[11px] font-semibold tracking-[0.22em] text-emi-600 uppercase">
                Experiência EMIVET
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-3xl leading-[1.05] font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
                Mais do que clínica:{" "}
                <span className="font-serif italic font-normal text-emi-600">um lugar</span> onde o pet
                se sente seguro.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-ink/60 sm:text-lg">
                Ambiente preparado para acolher tutores e animais em consultas de rotina, campanhas
                preventivas e momentos críticos. Em {clinic.address.city}, com atendimento contínuo e
                comunicação clara em cada etapa.
              </p>
            </Reveal>

            <div className="mt-10 space-y-3">
              {careTips.map((tip, i) => (
                <Reveal key={tip.title} delay={0.05 * i}>
                  <div className="flex gap-4 rounded-2xl border border-ink/6 bg-white/80 p-4 transition hover:border-emi-600/20">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emi-600 font-display text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-ink">{tip.title}</p>
                      <p className="mt-0.5 text-sm text-ink/55">{tip.detail}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="relative min-h-[520px]">
            <motion.div
              style={{ x }}
              className="absolute top-0 right-0 w-[78%] overflow-hidden rounded-[2rem] shadow-2xl"
            >
              <img
                src="https://images.pexels.com/photos/7470634/pexels-photo-7470634.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Consulta veterinária EMIVET"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              style={{ x: x2 }}
              className="absolute bottom-0 left-0 w-[58%] overflow-hidden rounded-[1.5rem] border-4 border-cream shadow-xl"
            >
              <img
                src="https://images.pexels.com/photos/23021510/pexels-photo-23021510.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Pet confiante e saudável"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </motion.div>
            <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emi-600 px-5 py-5 text-center text-white shadow-[0_20px_50px_-12px_rgba(27,122,61,0.7)]">
              <p className="font-display text-2xl font-bold leading-none">24h</p>
              <p className="mt-1 text-[10px] tracking-[0.14em] uppercase opacity-80">sempre</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
