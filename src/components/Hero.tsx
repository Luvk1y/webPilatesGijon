import heroBg from "../assets/pilates-reformer.jpg";
import { BUSINESS } from "../constants";
import Button from "./Button";
import Container from "./Container";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Placeholder para imagen de fondo vivida */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt="Fondo corporativo"
          className="h-full w-full object-cover opacity-95"
        />
        {/* Gradiente para suavizar la transición al negro */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-zinc-950/80 to-zinc-950" />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-30 -z-10">
        <div className="absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-blue-900/30 blur-3xl" />
      </div>
      <Container>
        <div className="relative py-16 sm:py-20 lg:py-24">
          <p className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-xs font-semibold text-zinc-200/90">
            Nos preocupamos por tu bienestar
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            {BUSINESS.name}
          </h1>
          {/* <p className="mt-4 max-w-2xl text-base text-zinc-200/80 sm:text-lg">
            Web estática lista para presentar tu negocio: quién eres, qué
            ofreces, cómo contactarte y dónde estás. Sin complicaciones.
          </p> */}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              href={BUSINESS.whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              Contactar por WhatsApp
            </Button>
            <Button href="#ubicacion" variant="secondary">
              Ver ubicación
            </Button>
            <Button href={BUSINESS.emailUrl} variant="secondary">
              Enviar email
            </Button>
          </div>

          {/* <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/60 p-5">
              <p className="text-sm font-semibold">Respuesta rápida</p>
              <p className="mt-2 text-sm text-zinc-200/80">
                WhatsApp para resolver dudas y coordinar.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/60 p-5">
              <p className="text-sm font-semibold">Presentación clara</p>
              <p className="mt-2 text-sm text-zinc-200/80">
                Información esencial, optimizada para móvil.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/60 p-5">
              <p className="text-sm font-semibold">Ubicación integrada</p>
              <p className="mt-2 text-sm text-zinc-200/80">
                Google Maps embebido para llegar sin perderte.
              </p>
            </div>
          </div> */}
        </div>
      </Container>
    </section>
  );
}
