import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { whatsappUrl } from "../data/content";

export function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      data-cursor="hover"
      className="fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-12px_rgba(37,211,102,0.7)] sm:right-6 sm:bottom-6 sm:px-5"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.97 }}
    >
      <span className="relative">
        <span className="absolute inset-0 animate-ping rounded-full bg-white/40" />
        <MessageCircle className="relative h-5 w-5" fill="currentColor" />
      </span>
      <span className="hidden sm:inline">WhatsApp 24h</span>
    </motion.a>
  );
}
