import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { whatsappUrl } from "../data/content";

export function HoursBanner() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.96]);

  return (
    <section ref={ref} className="bg-cream px-5 py-8 sm:px-8">
      <motion.div
        style={{ scale }}
        className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 overflow-hidden rounded-[2rem] bg-emi-600 px-8 py-10 text-white sm:flex-row sm:items-center sm:px-12"
      >
        <div className="pointer-events-none absolute -right-10 -bottom-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
        <div>
          <p className="text-[11px] font-semibold tracking-[0.22em] text-emi-100 uppercase">
            Emergência a qualquer hora
          </p>
          <h2 className="mt-2 max-w-xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Seu pet não espera. Nós também não.
          </h2>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="hover"
          className="relative inline-flex rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-emi-800 shadow-lg transition hover:bg-emi-50"
        >
          Chamar plantão 24h
        </a>
      </motion.div>
    </section>
  );
}
