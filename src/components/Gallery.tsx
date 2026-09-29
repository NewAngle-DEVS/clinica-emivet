import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { gallery } from "../data/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { cn } from "../utils/cn";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="galeria" className="relative bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Galeria"
          title={
            <>
              Momentos de cuidado,{" "}
              <span className="font-serif italic font-normal text-emi-600">confiança</span> e
              recuperação.
            </>
          }
          description="Um recorte visual do carinho e da técnica que guiam cada atendimento na EMIVET."
        />

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] md:grid-cols-4 md:gap-4 lg:auto-rows-[240px]">
          {gallery.map((item, i) => (
            <Reveal key={item.src} delay={i * 0.05} className={cn(item.span)}>
              <button
                type="button"
                onClick={() => setActive(i)}
                data-cursor="hover"
                className="group relative h-full w-full overflow-hidden rounded-2xl focus:outline-none"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <span className="absolute bottom-3 left-3 translate-y-2 text-left text-xs font-medium text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                  {item.alt}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white"
              onClick={() => setActive(null)}
              aria-label="Fechar"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              src={gallery[active].src}
              alt={gallery[active].alt}
              className="max-h-[80vh] max-w-5xl rounded-2xl object-contain shadow-2xl"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
