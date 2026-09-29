import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(() => setShow(false), reduced ? 150 : 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-cream"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="flex flex-col items-center gap-6"
          >
            <motion.img
              src={`${import.meta.env.BASE_URL}images/logo-emivet.png`}
              alt="EMIVET"
              className="h-14 w-auto object-contain sm:h-16"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="h-[2px] w-32 overflow-hidden rounded-full bg-ink/10">
              <motion.div
                className="h-full origin-left bg-emi-600"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <p className="text-[10px] font-semibold tracking-[0.28em] text-ink/40 uppercase">
              Clínica 24 horas
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
