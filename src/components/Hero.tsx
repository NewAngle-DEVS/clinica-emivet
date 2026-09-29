import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ArrowDownRight, Clock3, MapPin, ShieldCheck } from "lucide-react";
import { clinic, whatsappUrl } from "../data/content";
import { useMagnetic } from "../hooks/useMagnetic";

const heroImage =
  "https://images.pexels.com/photos/6235648/pexels-photo-6235648.jpeg?auto=compress&cs=tinysrgb&w=1600";
const sideImage =
  "https://images.pexels.com/photos/39537892/pexels-photo-39537892.jpeg?auto=compress&cs=tinysrgb&w=900";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const primary = useMagnetic<HTMLAnchorElement>(0.28);
  const secondary = useMagnetic<HTMLAnchorElement>(0.2);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !titleRef.current) return;

    const words = titleRef.current.querySelectorAll(".word");
    gsap.fromTo(
      words,
      { yPercent: 110, opacity: 0, rotate: 4 },
      {
        yPercent: 0,
        opacity: 1,
        rotate: 0,
        duration: 1.05,
        stagger: 0.07,
        ease: "power4.out",
        delay: 0.25,
      },
    );
  }, []);

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative isolate min-h-[100svh] overflow-hidden bg-cream pt-28 pb-16 sm:pt-32 lg:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-70" />
      <div className="pointer-events-none absolute -top-24 -right-20 h-[420px] w-[420px] rounded-full bg-emi-200/40 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -left-24 h-[320px] w-[320px] rounded-full bg-emi-100/80 blur-3xl" />

      <motion.div style={{ opacity }} className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-8">
          <motion.div style={{ y: textY }} className="lg:col-span-7">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emi-600/15 bg-white/70 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-emi-700 uppercase backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-emi-500 opacity-60" />
                <span className="relative h-2 w-2 rounded-full bg-emi-600" />
              </span>
              Clínica 24 horas · Campinas/SP
            </div>

            <h1
              ref={titleRef}
              className="font-display text-[clamp(2.6rem,7.5vw,5.6rem)] leading-[0.92] font-extrabold tracking-[-0.03em] text-ink"
            >
              <span className="block overflow-hidden pb-1">
                <span className="word inline-block will-change-transform">Cuidado</span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span className="word inline-block will-change-transform">veterinário</span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span className="word inline-block will-change-transform">
                  de <span className="font-serif italic font-normal text-emi-600">excelência</span>
                </span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span className="word inline-block will-change-transform">para quem</span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span className="word inline-block will-change-transform">você ama.</span>
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-ink/60 sm:text-lg">
              {clinic.description}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                ref={primary.ref}
                onMouseMove={primary.onMove}
                onMouseLeave={primary.onLeave}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="group inline-flex items-center gap-2 rounded-full bg-emi-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_-16px_rgba(27,122,61,0.85)] transition hover:bg-emi-700"
              >
                Falar no WhatsApp
                <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                ref={secondary.ref}
                onMouseMove={secondary.onMove}
                onMouseLeave={secondary.onLeave}
                href="#servicos"
                data-cursor="hover"
                className="inline-flex items-center gap-2 rounded-full border border-ink/12 bg-white/70 px-6 py-3.5 text-sm font-semibold text-ink transition hover:border-emi-600/30 hover:text-emi-700"
              >
                Ver serviços
              </a>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { icon: Clock3, label: "Plantão 24h", value: "Todos os dias" },
                { icon: ShieldCheck, label: "Cat Friendly", value: "Cães e gatos" },
                { icon: MapPin, label: "Ponte Preta", value: "Campinas/SP" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-ink/6 bg-white/60 p-4 backdrop-blur"
                >
                  <item.icon className="mb-3 h-4 w-4 text-emi-600" />
                  <p className="text-xs tracking-wide text-ink/45 uppercase">{item.label}</p>
                  <p className="mt-1 text-sm font-semibold text-ink">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative lg:col-span-5">
            <motion.div style={{ y: imageY }} className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-emi-600/20 via-transparent to-emi-200/30 blur-sm" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/60 shadow-[0_40px_80px_-30px_rgba(12,18,16,0.45)]">
                <img
                  src={heroImage}
                  alt="Atendimento veterinário carinhoso na EMIVET"
                  className="aspect-[4/5] w-full object-cover sm:aspect-[5/6]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
                <div className="absolute right-4 bottom-4 left-4 rounded-2xl border border-white/20 bg-white/15 p-4 backdrop-blur-md">
                  <p className="font-serif text-xl text-white italic">“Cuidamos bem de quem você ama”</p>
                  <p className="mt-1 text-xs tracking-[0.16em] text-white/70 uppercase">EMIVET · 24 horas</p>
                </div>
              </div>

              <motion.div
                className="absolute -bottom-8 -left-4 hidden w-40 overflow-hidden rounded-2xl border-4 border-cream shadow-xl sm:block lg:-left-10"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <img src={sideImage} alt="Pet feliz e saudável" className="aspect-square object-cover" loading="lazy" />
              </motion.div>

              <motion.div
                className="absolute -top-5 -right-2 rounded-2xl bg-ink px-4 py-3 text-white shadow-xl sm:right-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <p className="text-[10px] tracking-[0.2em] text-emi-300 uppercase">Urgência</p>
                <p className="font-display text-2xl font-bold">24h</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[11px] tracking-[0.25em] text-ink/35 uppercase lg:flex">
        <span className="h-8 w-px bg-ink/15" />
        Scroll
      </div>
    </section>
  );
}
