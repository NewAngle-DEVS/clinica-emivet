import { Logo } from "./Logo";
import { InstagramIcon } from "./icons";
import { clinic, navLinks, whatsappUrl } from "../data/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/8 bg-cream pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink/55">
              {clinic.tagline}. Clínica veterinária 24 horas em Campinas, com estrutura completa para
              cães e gatos.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="mt-6 inline-flex rounded-full bg-emi-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emi-700"
            >
              WhatsApp {clinic.phone}
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-ink/40 uppercase">Navegação</p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-ink/65 transition hover:text-emi-700">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-ink/40 uppercase">Contato</p>
            <ul className="mt-4 space-y-3 text-sm text-ink/65">
              <li>{clinic.address.full}</li>
              <li>
                <a href={`tel:${clinic.phoneRaw}`} className="hover:text-emi-700">
                  {clinic.phone}
                </a>
              </li>
              <li>Atendimento 24 horas</li>
              <li>
                <a
                  href={clinic.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-emi-700"
                >
                  <InstagramIcon className="h-4 w-4" />
                  {clinic.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ink/8 pt-6 text-xs text-ink/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {clinic.fullName}. Todos os direitos reservados.
          </p>
          <p>Campinas · São Paulo · Brasil</p>
        </div>
      </div>
    </footer>
  );
}
