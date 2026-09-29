import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeartHandshake, Stethoscope, Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal, RevealItem, RevealStagger } from "./Reveal";
import { clinic, differentials } from "../data/content";

const aboutImage =
  "https://images.pexels.com/photos/7468978/pexels-photo-7468978.jpeg?auto=compress&cs=tinysrgb&w=1400";
const catImage =
  "https://images.pexels.com/photos/30389453/pexels-photo-30389453.jpeg?auto=compress&cs=tinysrgb&w=900";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="sobre" ref={ref} className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 paw-pattern opacity-60" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="relative lg:col-span-5">
            <motion.div style={{ y }} className="relative z-10 overflow-hidden rounded-[2rem] shadow-[0_30px_70px_-28px_rgba(12,18,16,0.4)]">
              <img
                src={aboutImage}
                alt="Equipe veterinária EMIVET em atendimento"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              style={{ y: y2 }}
              className="absolute -right-4 -bottom-10 z-20 w-36 overflow-hidden rounded-2xl border-4 border-cream shadow-2xl sm:w-44 lg:-right-8"
            >
              <img src={catImage} alt="Gato cuidado com carinho" className="aspect-[3/4] object-cover" loading="lazy" />
            </motion.div>
            <div className="absolute -top-6 -left-4 z-0 h-40 w-40 rounded-full border border-emi-600/20 sm:-left-8" />
            <div className="absolute top-16 -left-2 z-0 h-24 w-24 rounded-full bg-emi-600/10 blur-xl" />
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            <SectionHeading
              eyebrow="Quem somos"
              title={
                <>
                  Medicina veterinária com{" "}
                  <span className="font-serif italic font-normal text-emi-600">presença</span>, técnica e afeto.
                </>
              }
              description={`${clinic.fullName} nasceu para ser o ponto de confiança das famílias de Campinas. Atendimento contínuo, estrutura completa e um time que trata cada pet como parte da família.`}
            />

            <RevealStagger className="mt-10 grid gap-4 sm:grid-cols-2">
              {differentials.map((item, i) => (
                <RevealItem key={item.title}>
                  <div className="group h-full rounded-2xl border border-ink/6 bg-white/70 p-5 transition duration-500 hover:-translate-y-1 hover:border-emi-600/20 hover:shadow-[0_20px_40px_-24px_rgba(27,122,61,0.35)]">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emi-50 text-emi-700">
                      {i === 0 && <Stethoscope className="h-5 w-5" />}
                      {i === 1 && <Sparkles className="h-5 w-5" />}
                      {i === 2 && <HeartHandshake className="h-5 w-5" />}
                      {i === 3 && <ShieldIcon />}
                    </div>
                    <h3 className="font-display text-lg font-bold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/55">{item.description}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>

            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-ink/8 pt-8">
                <div>
                  <p className="font-display text-3xl font-bold text-emi-700">24h</p>
                  <p className="text-sm text-ink/50">prontos para atender</p>
                </div>
                <div className="h-10 w-px bg-ink/10" />
                <div>
                  <p className="font-display text-3xl font-bold text-emi-700">Campinas</p>
                  <p className="text-sm text-ink/50">Ponte Preta · referência local</p>
                </div>
                <div className="h-10 w-px bg-ink/10" />
                <div>
                  <p className="font-display text-3xl font-bold text-emi-700">Cães & Gatos</p>
                  <p className="text-sm text-ink/50">cuidado completo</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3l8 3v6c0 5-3.4 8.4-8 9-4.6-.6-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
