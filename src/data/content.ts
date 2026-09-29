export const clinic = {
  name: "EMIVET",
  fullName: "EMIVET Clínica Veterinária",
  tagline: "Cuidamos bem de quem você ama",
  description:
    "Clínica veterinária 24 horas em Campinas, com atendimento completo em consultas, cirurgias, internação e especialidades. Cuidado de excelência para cães e gatos.",
  hours: "24 horas",
  phone: "(19) 97153-1810",
  phoneRaw: "5519971531810",
  whatsappMessage: "Olá! Gostaria de agendar um atendimento na EMIVET.",
  email: "contato@clinicaemivet.com.br",
  address: {
    street: "Av. Washington Luiz, 115",
    neighborhood: "Ponte Preta",
    city: "Campinas",
    state: "SP",
    full: "Av. Washington Luiz, 115, Ponte Preta, Campinas — SP",
  },
  instagram: "https://www.instagram.com/clinicaemivet",
  instagramHandle: "@clinicaemivet",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Av.+Washington+Luiz+115+Ponte+Preta+Campinas+SP",
} as const;

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
] as const;

export const services = [
  {
    id: "consultas",
    title: "Consultas",
    description:
      "Avaliação clínica completa com atenção individualizada para cães e gatos, em ambiente acolhedor e seguro.",
    details: ["Check-up preventivo", "Acompanhamento contínuo", "Orientação aos tutores"],
    accent: "from-emerald-600 to-green-700",
  },
  {
    id: "cirurgias",
    title: "Cirurgias",
    description:
      "Centro cirúrgico preparado para procedimentos eletivos e de urgência, com monitoramento e protocolos de segurança.",
    details: ["Castração", "Cirurgias gerais", "Pós-operatório assistido"],
    accent: "from-green-700 to-emerald-800",
  },
  {
    id: "urgencia",
    title: "Urgências & Emergências",
    description:
      "Atendimento 24 horas para quando cada minuto importa. Equipe pronta para estabilizar e cuidar do seu pet.",
    details: ["Plantão noturno", "Estabilização", "Internação imediata"],
    accent: "from-teal-600 to-emerald-700",
  },
  {
    id: "internacao",
    title: "Internação",
    description:
      "Estrutura de internação com monitoramento contínuo, conforto e acompanhamento veterinário dedicado.",
    details: ["Observação 24h", "Suporte clínico", "Ambiente controlado"],
    accent: "from-emerald-700 to-green-800",
  },
  {
    id: "odontologia",
    title: "Periodontia",
    description:
      "Limpeza de tártaro e cuidados odontológicos para prevenir dor, infecções e problemas sistêmicos.",
    details: ["Limpeza de tártaro", "Avaliação bucal", "Antes e depois"],
    accent: "from-green-600 to-teal-700",
  },
  {
    id: "exames",
    title: "Exames & Imagem",
    description:
      "Diagnóstico preciso com exames laboratoriais e de imagem para condutas mais seguras e rápidas.",
    details: ["Exames de sangue", "Imagem diagnóstica", "Resultados ágeis"],
    accent: "from-emerald-800 to-green-900",
  },
  {
    id: "vacinas",
    title: "Vacinas Importadas",
    description:
      "Protocolos vacinais atualizados com vacinas importadas para proteger seu pet o ano inteiro.",
    details: ["Calendário vacinal", "Gripe canina", "Reforços em dia"],
    accent: "from-green-700 to-emerald-900",
  },
  {
    id: "especialidades",
    title: "Especialidades",
    description:
      "Atendimento especializado para casos que exigem olhar técnico aprofundado e manejo personalizado.",
    details: ["Avaliação dirigida", "Condutas especializadas", "Encaminhamento interno"],
    accent: "from-teal-700 to-green-800",
  },
] as const;

export const differentials = [
  {
    title: "Atendimento 24 horas",
    description: "Plantão completo todos os dias da semana, incluindo madrugadas e feriados.",
  },
  {
    title: "Cat Friendly",
    description: "Ambiente e manejo pensados para reduzir o estresse dos felinos.",
  },
  {
    title: "Equipe dedicada",
    description: "Profissionais que unem técnica, empatia e comunicação clara com a família.",
  },
  {
    title: "Estrutura completa",
    description: "Consultas, cirurgias, exames, internação e urgências no mesmo lugar.",
  },
] as const;

export const stats = [
  { value: 24, suffix: "h", label: "Atendimento contínuo" },
  { value: 8, suffix: "+", label: "Serviços integrados" },
  { value: 1996, suffix: "+", label: "Tutores conectados" },
  { value: 100, suffix: "%", label: "Foco no bem-estar" },
] as const;

export const gallery = [
  {
    src: "https://images.pexels.com/photos/6235648/pexels-photo-6235648.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Veterinária auscultando um cão com carinho",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.pexels.com/photos/6235017/pexels-photo-6235017.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Exame clínico de pet na clínica",
    span: "",
  },
  {
    src: "https://images.pexels.com/photos/30389453/pexels-photo-30389453.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Gato em close, cuidado felino",
    span: "",
  },
  {
    src: "https://images.pexels.com/photos/7468978/pexels-photo-7468978.jpeg?auto=compress&cs=tinysrgb&w=1000",
    alt: "Consulta veterinária profissional",
    span: "md:col-span-2",
  },
  {
    src: "https://images.pexels.com/photos/39537892/pexels-photo-39537892.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Cão feliz e saudável",
    span: "",
  },
  {
    src: "https://images.pexels.com/photos/16748423/pexels-photo-16748423.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Retrato de gato confiante",
    span: "",
  },
] as const;

export const careTips = [
  { title: "Forneça água e comida", detail: "Hidratação e alimentação de qualidade todos os dias." },
  { title: "Exercícios regulares", detail: "Movimento e brincadeiras mantêm corpo e mente ativos." },
  { title: "Consultas com o veterinário", detail: "Prevenção é o caminho mais seguro para longevidade." },
  { title: "Banhos e escovação", detail: "Higiene reduz desconfortos e problemas de pele." },
  { title: "Brinque com ele sempre", detail: "Vínculo e estímulo mental fazem parte da saúde." },
] as const;

export const faq = [
  {
    q: "A EMIVET funciona de madrugada?",
    a: "Sim. Somos uma clínica veterinária 24 horas em Campinas, com plantão para urgências e emergências a qualquer momento.",
  },
  {
    q: "Vocês atendem gatos com tranquilidade?",
    a: "Sim. Temos abordagem Cat Friendly, com manejo e ambiente pensados para diminuir o estresse felino.",
  },
  {
    q: "Quais serviços principais vocês oferecem?",
    a: "Consultas, cirurgias, urgências, internação, periodontia, exames, vacinas importadas e especialidades.",
  },
  {
    q: "Como agendar ou tirar dúvidas?",
    a: "Fale conosco pelo WhatsApp (19) 97153-1810 ou venha até a Av. Washington Luiz, 115 — Ponte Preta, Campinas/SP.",
  },
] as const;

export const whatsappUrl = `https://wa.me/${clinic.phoneRaw}?text=${encodeURIComponent(clinic.whatsappMessage)}`;
