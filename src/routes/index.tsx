import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-pecas.jpg";
import batteryImg from "@/assets/bateria.jpg";

// TODO: substituir pelo número real do WhatsApp da loja (formato: 55 + DDD + número)
const WHATSAPP_NUMBER = "5554999999999";

const BRANDS = [
  "BOSCH",
  "MOURA",
  "NGK",
  "MONDIAL",
  "COFAP",
  "FRAM",
  "HELLA",
  "ZTECH",
  "TECMIDIA",
  "GEDORE",
];

function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Steindorff Auto Peças e Baterias",
      },
      {
        name: "description",
        content:
          "Auto peças e baterias com atendimento rápido. Orçamento em minutos pelo WhatsApp e entrega na hora.",
      },
      { property: "og:title", content: "Steindorff Auto Peças e Baterias" },
      {
        property: "og:description",
        content:
          "Auto peças e baterias com atendimento rápido. Orçamento em minutos pelo WhatsApp e entrega na hora.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const IconWrench = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M14.7 6.3a5 5 0 0 0-6.9 6.1L3 17.2V21h3.8l4.8-4.8a5 5 0 0 0 6.1-6.9L15 12l-3-3 2.7-2.7z" />
  </svg>
);

const IconBattery = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <rect x="2" y="7" width="18" height="12" rx="2" />
    <path d="M20 10h2v6h-2M6 11v4M9 11v4M12 11h4" />
  </svg>
);

const IconTruck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" />
  </svg>
);

const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const SERVICES = [
  {
    icon: <IconWrench />,
    title: "Auto peças",
    text: "Peças nacionais e importadas para as principais montadoras. Originais e de linha paralela, sempre com nota e garantia.",
  },
  {
    icon: <IconBattery />,
    title: "Baterias",
    text: "As melhores marcas com teste gratuito, instalação no local e garantia de fábrica. A sua parou? A gente resolve.",
  },
  {
    icon: <IconTruck />,
    title: "Entrega rápida",
    text: "Pedido confirmado, peça a caminho. Entregamos na sua casa, oficina ou no ponto onde o carro parou.",
  },
  {
    icon: <IconClock />,
    title: "Atendimento de verdade",
    text: "Gente que entende de carro do outro lado do WhatsApp. Manda o modelo e o ano, e a gente acha a peça certa.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Chama no WhatsApp",
    text: "Manda o modelo do seu carro e o que você precisa. Foto da peça ajuda ainda mais.",
  },
  {
    num: "02",
    title: "Recebe o orçamento",
    text: "Preço, prazo e disponibilidade em poucos minutos. Sem enrolação.",
  },
  {
    num: "03",
    title: "Retira ou recebe",
    text: "Pega na loja ou recebe onde estiver. Em bateria, instalamos na hora.",
  },
];

function Landing() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    veiculo: "",
    necessidade: "",
  });

  const update =
    (field: keyof typeof form) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Meu nome é ${form.nome}. Preciso de: ${form.necessidade}. Veículo: ${form.veiculo}. Meu telefone: ${form.telefone}.`;
    window.open(waLink(message), "_blank");
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Barra superior */}
      <div className="bg-primary">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-1 px-4 py-2 text-center text-xs font-bold uppercase tracking-widest text-primary-foreground">
          <span>Baterias com instalação no local</span>
          <span className="hidden sm:inline">•</span>
          <span>Entrega rápida na região</span>
          <span className="hidden sm:inline">•</span>
          <span>Orçamento em minutos</span>
        </div>
      </div>

      {/* Navegação */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="#" className="font-display text-2xl uppercase tracking-wide">
            Steindorff <span className="text-primary">Auto Peças</span>
          </a>
          <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-widest text-muted-foreground md:flex">
            <a href="#pecas" className="transition hover:text-primary">Peças</a>
            <a href="#baterias" className="transition hover:text-primary">Baterias</a>
            <a href="#como-funciona" className="transition hover:text-primary">Como funciona</a>
            <a href="#orcamento" className="transition hover:text-primary">Orçamento</a>
          </nav>
          <a
            href="#orcamento"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary-foreground transition hover:brightness-110"
          >
            Pedir orçamento
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-diagonal-stripes" />
        <div className="absolute -right-40 top-0 h-full w-[60%] bg-red-glow" />
        <div className="relative mx-auto grid max-w-6xl gap-14 px-4 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="anim-fade-up kicker">
              Auto peças • Baterias • Entrega rápida
            </span>
            <h1 className="anim-fade-up anim-delay-1 mt-5 font-display text-6xl uppercase leading-[0.95] md:text-8xl">
              A peça certa <span className="text-primary">chega hoje</span>.
            </h1>
            <p className="anim-fade-up anim-delay-2 mt-6 max-w-md text-lg text-muted-foreground">
              Steindorff Auto Peças e Baterias: você manda o modelo do seu carro
              e recebe o orçamento em minutos. Peça certa, preço justo e quem
              entende do assunto do outro lado da conversa.
            </p>
            <div className="anim-fade-up anim-delay-3 mt-9 flex flex-wrap gap-4">
              <a className="btn-cta" href="#orcamento">
                Pedir orçamento
              </a>
              <a
                className="btn-outline"
                href={waLink("Olá! Quero um orçamento de peça ou bateria.")}
                target="_blank"
                rel="noreferrer"
              >
                Chamar no WhatsApp
              </a>
            </div>
            <dl className="anim-fade-up anim-delay-3 mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
              <div>
                <dt className="font-display text-3xl text-primary">100%</dt>
                <dd className="mt-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Nota e garantia
                </dd>
              </div>
              <div>
                <dt className="font-display text-3xl text-primary">Minutos</dt>
                <dd className="mt-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Para o orçamento
                </dd>
              </div>
              <div>
                <dt className="font-display text-3xl text-primary">Hoje</dt>
                <dd className="mt-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Sua peça chega
                </dd>
              </div>
            </dl>
          </div>
          <div className="relative anim-fade-up anim-delay-2">
            <div className="absolute -inset-3 -rotate-2 rounded-2xl bg-secondary" />
            <img
              src={heroImg}
              alt="Peças automotivas e bateria em destaque"
              className="relative aspect-[4/5] w-full rounded-2xl border-2 border-border object-cover"
            />
            <div className="absolute -bottom-5 -left-5 rounded-md bg-primary px-5 py-3 font-display text-lg uppercase text-primary-foreground shadow-lg">
              Baterias com instalação
            </div>
          </div>
        </div>
      </section>

      {/* Marca de marcas */}
      <div className="overflow-hidden border-y-2 border-border bg-primary py-3">
        <div className="flex w-max animate-marquee gap-12">
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <span
              key={i}
              className="flex items-center gap-12 font-display text-xl uppercase text-primary-foreground"
            >
              {brand}
              <span className="text-secondary-foreground">★</span>
            </span>
          ))}
        </div>
      </div>

      {/* Serviços */}
      <section id="pecas" className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <span className="kicker">O que a gente resolve</span>
        <h2 className="section-title mt-3">
          Tudo pro seu carro <span className="text-primary">rodar de novo</span>
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary text-secondary-foreground transition group-hover:bg-primary group-hover:text-primary-foreground">
                {service.icon}
              </div>
              <h3 className="mt-5 font-display text-2xl uppercase">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Baterias */}
      <section id="baterias" className="bg-secondary text-secondary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:py-28 lg:grid-cols-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-secondary-foreground/80">
              Baterias
            </span>
            <h2 className="section-title mt-3">
              Bateria te deixou <span className="text-primary">na mão</span>?
            </h2>
            <p className="mt-6 max-w-md text-lg text-secondary-foreground/90">
              A gente testa, indica a bateria certa para o seu carro e instala
              onde você estiver. Sem susto no preço e com garantia de fábrica.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Teste gratuito do sistema elétrico",
                "Instalação no local, na hora",
                "As melhores marcas com garantia",
                "Retirada e destino correto da bateria velha",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 font-semibold">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <IconCheck />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              className="btn-cta mt-10"
              href={waLink("Olá! Minha bateria parou, preciso de ajuda.")}
              target="_blank"
              rel="noreferrer"
            >
              Preciso de uma bateria agora
            </a>
          </div>
          <div className="relative">
            <img
              src={batteryImg}
              alt="Bateria automotiva nova"
              className="aspect-[4/3] w-full rounded-2xl border-2 border-primary-foreground/20 object-cover"
            />
            <div className="absolute -bottom-5 right-6 rounded-md bg-primary px-5 py-3 font-display text-lg uppercase text-primary-foreground shadow-lg">
              Instalação na hora
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <span className="kicker">Simples assim</span>
        <h2 className="section-title mt-3">
          Do <span className="text-primary">problema</span> à peça em 3 passos
        </h2>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.num} className="relative">
              <span className="text-outline font-display text-8xl leading-none">
                {step.num}
              </span>
              <h3 className="mt-4 font-display text-2xl uppercase text-primary">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Orçamento */}
      <section id="orcamento" className="border-t border-border bg-card/40">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:py-28 lg:grid-cols-2">
          <div>
            <span className="kicker">Orçamento grátis</span>
            <h2 className="section-title mt-3">
              Conte o que você <span className="text-primary">precisa</span>
            </h2>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Preencha ao lado e sua solicitação abre direto no nosso WhatsApp,
              pronta pra enviar. Respondemos rapidinho com preço e prazo.
            </p>
            <p className="mt-8 font-display text-2xl uppercase text-primary">
              Prefere ligar? Chama no WhatsApp do mesmo jeito.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border-2 border-primary bg-card p-8 shadow-2xl"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="label" htmlFor="nome">Seu nome</label>
                <input
                  id="nome"
                  className="field"
                  placeholder="Como podemos te chamar?"
                  value={form.nome}
                  onChange={update("nome")}
                  required
                />
              </div>
              <div className="sm:col-span-1">
                <label className="label" htmlFor="telefone">WhatsApp</label>
                <input
                  id="telefone"
                  className="field"
                  placeholder="(00) 00000-0000"
                  value={form.telefone}
                  onChange={update("telefone")}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="label" htmlFor="veiculo">Seu veículo</label>
                <input
                  id="veiculo"
                  className="field"
                  placeholder="Marca, modelo e ano (ex.: Gol 2019)"
                  value={form.veiculo}
                  onChange={update("veiculo")}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="label" htmlFor="necessidade">O que você precisa?</label>
                <textarea
                  id="necessidade"
                  className="field min-h-28 resize-none"
                  placeholder="Ex.: pastilha de freio dianteira, bateria 60Ah, filtro de óleo..."
                  value={form.necessidade}
                  onChange={update("necessidade")}
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn-cta mt-7 w-full">
              Enviar pedido pelo WhatsApp
            </button>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              Resposta rápida no horário comercial. Sem compromisso.
            </p>
          </form>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl uppercase">
              Steindorff <span className="text-primary">Auto Peças</span>
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Auto peças e baterias com atendimento rápido, preço justo e quem
              entende de carro do outro lado da conversa.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              Contato
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              WhatsApp: (00) 00000-0000
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Endereço da loja: atualizar com o endereço real
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              Atendimento
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Segunda a sábado, das 8h às 18h — confirmar horários reais
            </p>
          </div>
        </div>
        <div className="border-t border-border py-5 text-center text-xs uppercase tracking-widest text-muted-foreground">
          © {new Date().getFullYear()} Steindorff Auto Peças e Baterias
        </div>
      </footer>
    </div>
  );
}
