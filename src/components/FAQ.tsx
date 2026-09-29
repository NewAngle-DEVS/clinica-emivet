import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faq } from "../data/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { cn } from "../utils/cn";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-sand py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Dúvidas frequentes"
              title={
                <>
                  Tudo o que você precisa saber{" "}
                  <span className="font-serif italic font-normal text-emi-600">antes de vir</span>.
                </>
              }
              description="Transparência faz parte do cuidado. Se faltar alguma resposta, nosso time está a uma mensagem de distância."
            />
          </div>
          <div className="lg:col-span-7">
            <div className="space-y-3">
              {faq.map((item, i) => {
                const isOpen = open === i;
                return (
                  <Reveal key={item.q} delay={i * 0.05}>
                    <div className="overflow-hidden rounded-2xl border border-ink/8 bg-white">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                        onClick={() => setOpen(isOpen ? null : i)}
                        data-cursor="hover"
                      >
                        <span className="font-display text-lg font-bold text-ink sm:text-xl">
                          {item.q}
                        </span>
                        <span
                          className={cn(
                            "grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/10 transition",
                            isOpen && "rotate-45 bg-emi-600 text-white border-emi-600",
                          )}
                        >
                          <Plus className="h-4 w-4" />
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          >
                            <p className="px-5 pb-5 text-sm leading-relaxed text-ink/60 sm:text-base">
                              {item.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
