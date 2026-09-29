import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stats } from "../data/content";
import { Reveal } from "./Reveal";

gsap.registerPlugin(ScrollTrigger);

export function Stats() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = ref.current;
    if (!root || reduced) return;

    const ctx = gsap.context(() => {
      const numbers = root.querySelectorAll<HTMLElement>("[data-count]");
      numbers.forEach((el) => {
        const target = Number(el.dataset.count || 0);
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = Math.floor(obj.val).toLocaleString("pt-BR");
          },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="diferenciais" className="relative bg-sand py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-10 text-center text-[11px] font-semibold tracking-[0.22em] text-emi-700 uppercase">
            Números que sustentam a confiança
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="text-center md:border-r md:border-ink/8 md:last:border-0">
                <p className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">
                  <span data-count={stat.value}>{stat.value}</span>
                  <span className="text-emi-600">{stat.suffix}</span>
                </p>
                <p className="mt-2 text-sm text-ink/50">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
