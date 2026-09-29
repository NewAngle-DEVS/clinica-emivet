import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Clock3, MapPin, Phone, Send } from "lucide-react";
import { clinic, whatsappUrl } from "../data/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { InstagramIcon } from "./icons";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const message = String(data.get("message") || "");
    const text = `Olá, sou ${name}. Telefone: ${phone}. ${message}`;
    setLoading(true);
    window.open(
      `https://wa.me/${clinic.phoneRaw}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      e.currentTarget.reset();
    }, 600);
  };

  return (
    <section id="contato" className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 right-0 h-80 w-80 rounded-full bg-emi-600/20 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              light
              eyebrow="Contato"
              title={
                <>
                  Vamos cuidar do seu pet{" "}
                  <span className="font-serif italic font-normal text-emi-300">juntos</span>.
                </>
              }
              description="Agende pelo WhatsApp, ligue ou venha até a clínica. Estamos de plantão 24 horas."
            />

            <div className="mt-10 space-y-5">
              <Reveal>
                <a
                  href={`tel:${clinic.phoneRaw}`}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-emi-400/30"
                  data-cursor="hover"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-emi-600/20 text-emi-300">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs tracking-[0.16em] text-white/40 uppercase">Telefone / WhatsApp</span>
                    <span className="mt-1 block font-display text-xl font-bold">{clinic.phone}</span>
                  </span>
                </a>
              </Reveal>
              <Reveal delay={0.06}>
                <a
                  href={clinic.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-emi-400/30"
                  data-cursor="hover"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-emi-600/20 text-emi-300">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs tracking-[0.16em] text-white/40 uppercase">Endereço</span>
                    <span className="mt-1 block font-display text-lg font-bold leading-snug">
                      {clinic.address.full}
                    </span>
                  </span>
                </a>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-emi-600/20 text-emi-300">
                    <Clock3 className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs tracking-[0.16em] text-white/40 uppercase">Horário</p>
                    <p className="mt-1 font-display text-xl font-bold">Aberto 24 horas</p>
                    <p className="mt-1 text-sm text-white/50">Urgências e emergências todos os dias</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.14}>
                <a
                  href={clinic.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-emi-300 transition hover:text-emi-200"
                  data-cursor="hover"
                >
                  <InstagramIcon className="h-4 w-4" />
                  {clinic.instagramHandle}
                </a>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <form
                onSubmit={onSubmit}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block sm:col-span-1">
                    <span className="mb-2 block text-xs tracking-[0.14em] text-white/45 uppercase">Nome</span>
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="Seu nome"
                      className="w-full rounded-xl border border-white/10 bg-ink-soft/60 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-emi-500"
                    />
                  </label>
                  <label className="block sm:col-span-1">
                    <span className="mb-2 block text-xs tracking-[0.14em] text-white/45 uppercase">Telefone</span>
                    <input
                      required
                      name="phone"
                      type="tel"
                      placeholder="(19) 90000-0000"
                      className="w-full rounded-xl border border-white/10 bg-ink-soft/60 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-emi-500"
                    />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="mb-2 block text-xs tracking-[0.14em] text-white/45 uppercase">Mensagem</span>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      placeholder="Conte rapidamente o que o seu pet precisa..."
                      className="w-full resize-none rounded-xl border border-white/10 bg-ink-soft/60 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-emi-500"
                    />
                  </label>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-white/40">
                    Ao enviar, você será direcionado ao WhatsApp da clínica.
                  </p>
                  <motion.button
                    type="submit"
                    disabled={loading}
                    data-cursor="hover"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-emi-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emi-500 disabled:opacity-70"
                  >
                    {loading ? "Abrindo..." : sent ? "Mensagem pronta" : "Enviar no WhatsApp"}
                    <Send className="h-4 w-4" />
                  </motion.button>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex text-sm text-emi-300 underline-offset-4 hover:underline"
                >
                  Ou clique para falar direto no WhatsApp 24h
                </a>
              </form>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-white/10">
                <iframe
                  title="Localização EMIVET Campinas"
                  src="https://maps.google.com/maps?q=Av.%20Washington%20Luiz%20115%20Ponte%20Preta%20Campinas%20SP&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="h-64 w-full grayscale contrast-125 invert-[0.88] sm:h-72"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
