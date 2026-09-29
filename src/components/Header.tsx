import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { clinic, navLinks, whatsappUrl } from "../data/content";
import { cn } from "../utils/cn";
import { useMagnetic } from "../hooks/useMagnetic";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const cta = useMagnetic<HTMLAnchorElement>(0.25);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled || open
            ? "border-b border-ink/5 bg-cream/85 backdrop-blur-xl shadow-[0_10px_40px_-24px_rgba(12,18,16,0.35)]"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8">
          <a href="#inicio" className="relative z-10" data-cursor="hover">
            <Logo />
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-cursor="hover"
                className="rounded-full px-3.5 py-2 text-[13px] font-medium text-ink/70 transition-colors hover:text-emi-700"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${clinic.phoneRaw}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-ink/70 transition hover:text-emi-700"
              data-cursor="hover"
            >
              <Phone className="h-4 w-4 text-emi-600" />
              {clinic.phone}
            </a>
            <a
              ref={cta.ref}
              onMouseMove={cta.onMove}
              onMouseLeave={cta.onLeave}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="inline-flex items-center rounded-full bg-emi-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_28px_-12px_rgba(27,122,61,0.8)] transition hover:bg-emi-700"
            >
              Agendar agora
            </a>
          </div>

          <button
            type="button"
            className="relative z-10 grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-white/70 text-ink lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            data-cursor="hover"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-cream lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex h-full flex-col px-6 pt-28 pb-10">
              <nav className="flex flex-1 flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                    className="border-b border-ink/8 py-4 font-display text-3xl font-bold tracking-tight text-ink"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <div className="space-y-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center rounded-full bg-emi-600 py-4 text-base font-semibold text-white"
                  onClick={() => setOpen(false)}
                >
                  WhatsApp 24 horas
                </a>
                <p className="text-center text-sm text-ink/50">{clinic.address.full}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
