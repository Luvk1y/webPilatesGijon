import { useState } from "react";
import logoImg from "./assets/PilatesGijonLOGO.png";
import aboutImg from "./assets/pilates-reformer-people.jpg";
import heroBg from "./assets/pilates-reformer.jpg";
import Button from "./components/Button";
import Container from "./components/Container";
import SectionTitle from "./components/SectionTitle";

const BUSINESS = {
  name: "Pilates Gijón",
  address: "Calle Ezcurdia 139 bajo, Gijón, Asturias",
  whatsapp: "605899206",
  email: "alvaroquiroga@gmail.com",
  whatsappUrl:
    "https://wa.me/34605899206?text=Hola,%20vengo%20desde%20la%20web%20y%20quiero%20información.",
  emailUrl: "mailto:alvaroquiroga@gmail.com",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Calle%20Ezcurdia%20139%20bajo%2C%20Gij%C3%B3n%2C%20Asturias&output=embed",
};

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const linkCls =
    "text-sm font-semibold text-zinc-200/90 hover:text-zinc-50 transition";

  // Función para cerrar el menú al hacer clic en un enlace
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a
            href="#inicio"
            className="block transition hover:opacity-80"
            onClick={closeMenu}
          >
            <img
              src={logoImg}
              alt={BUSINESS.name}
              className="h-28 w-auto mt-1"
            />
          </a>

          {/* Navegación Desktop */}
          <nav className="hidden items-center gap-6 sm:flex">
            <a className={linkCls} href="#sobre">
              Sobre
            </a>
            <a className={linkCls} href="#servicios">
              Servicios
            </a>
            <a className={linkCls} href="#ubicacion">
              Ubicación
            </a>
            <a className={linkCls} href="#contacto">
              Contacto
            </a>
          </nav>

          <div className="flex items-center gap-4">
            {/* Botón WhatsApp siempre visible */}
            <div className="hidden sm:block">
              <Button
                href={BUSINESS.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
              >
                WhatsApp
              </Button>
            </div>

            {/* Botón Hamburguesa Móvil */}
            <button
              className="group flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 text-zinc-200 transition hover:bg-zinc-700 sm:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                /* Icono X */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                /* Icono Hamburguesa */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Menú Móvil Desplegable */}
      {isOpen && (
        <div className="absolute left-0 top-16 w-full border-b border-zinc-800 bg-zinc-950 px-5 py-6 shadow-xl sm:hidden">
          <nav className="flex flex-col gap-4">
            <a className={linkCls} href="#sobre" onClick={closeMenu}>
              Sobre
            </a>
            <a className={linkCls} href="#servicios" onClick={closeMenu}>
              Servicios
            </a>
            <a className={linkCls} href="#ubicacion" onClick={closeMenu}>
              Ubicación
            </a>
            <a className={linkCls} href="#contacto" onClick={closeMenu}>
              Contacto
            </a>
            <div className="pt-4 border-t border-zinc-800/60">
              <Button
                href={BUSINESS.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                variant="primary"
              >
                Contactar por WhatsApp
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Placeholder para imagen de fondo vivida */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt="Fondo corporativo"
          className="h-full w-full object-cover opacity-20"
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

function About() {
  return (
    <section
      id="sobre"
      className="bg-zinc-900/50 border-t border-zinc-800/60 py-16 sm:py-20"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center mb-12">
          <div>
            <SectionTitle
              eyebrow="SOBRE NOSOTROS"
              title="Tu bienestar es nuestra prioridad"
              subtitle="Entrenamientos personalizados de Pilates en Gijón para mejorar tu bienestar físico y mental."
            />
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-zinc-800/70 bg-zinc-950/60 shadow-lg">
            <img
              src={aboutImg}
              alt="Clase de pilates reformer"
              className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition duration-700"
            />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/60 p-6">
            <p className="text-sm font-semibold">Experiencia</p>
            <p className="mt-2 text-sm text-zinc-200/80">
              Gracias a nuestro personal cualificado contaras con el mejor
              servicio posible.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/60 p-6">
            <p className="text-sm font-semibold">Maquinaria preparada</p>
            <p className="mt-2 text-sm text-zinc-200/80">
              Contamos con equipos modernos y bien mantenidos para garantizar la
              mejor experiencia de entrenamiento.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/60 p-6">
            <p className="text-sm font-semibold">Cercanía</p>
            <p className="mt-2 text-sm text-zinc-200/80">
              Nuestros instructores están siempre disponibles para ti.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Services() {
  return (
    <section
      id="servicios"
      className="border-t border-zinc-800/60 py-16 sm:py-20"
    >
      <Container>
        <SectionTitle
          eyebrow="SERVICIOS"
          title="Qué ofrecemos"
          subtitle="Sustituye estos bloques por tus servicios reales. Mantén frases cortas y beneficios claros."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Servicio 1",
            "Servicio 2",
            "Servicio 3",
            "Servicio 4",
            "Servicio 5",
            "Servicio 6",
          ].map((s) => (
            <div
              key={s}
              className="rounded-2xl border border-zinc-800/70 bg-zinc-950/60 p-6"
            >
              <p className="text-sm font-semibold">{s}</p>
              <p className="mt-2 text-sm text-zinc-200/80">
                Descripción breve del servicio. Beneficio claro. Sin humo.
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Location() {
  return (
    <section
      id="ubicacion"
      className="bg-zinc-900/50 border-t border-zinc-800/60 py-16 sm:py-20"
    >
      <Container>
        <SectionTitle
          eyebrow="UBICACIÓN"
          title="Dónde estamos"
          // subtitle="Mapa integrado para que la gente llegue directo."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/60 p-6">
            <p className="text-sm font-semibold">Dirección</p>
            <p className="mt-2 text-sm text-zinc-200/80">{BUSINESS.address}</p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                href={BUSINESS.whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </Button>
              <Button href={BUSINESS.emailUrl} variant="secondary">
                Email
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-zinc-800/70 bg-zinc-950/60">
            <iframe
              title="Google Maps"
              src={BUSINESS.mapsEmbedUrl}
              className="h-[320px] w-full sm:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contacto"
      className="border-t border-zinc-800/60 py-16 sm:py-20"
    >
      <Container>
        <SectionTitle
          eyebrow=""
          title="CONTACTANOS"
          subtitle="Contacto directo con uno de nuestros instructores."
        />

        <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/60 p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <p className="text-xs font-semibold tracking-widest text-zinc-300/80">
                WHATSAPP
              </p>
              <p className="mt-2 text-sm text-zinc-50">{BUSINESS.whatsapp}</p>
              <p className="mt-1 text-sm text-zinc-200/70">Respuesta rápida</p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest text-zinc-300/80">
                EMAIL
              </p>
              <p className="mt-2 text-sm text-zinc-50 break-all">
                {BUSINESS.email}
              </p>
              <p className="mt-1 text-sm text-zinc-200/70">
                Presupuestos / info detallada
              </p>
            </div>
            <div className="flex items-center gap-3 md:justify-end">
              <Button
                href={BUSINESS.whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                Escribir por WhatsApp
              </Button>
              <Button href={BUSINESS.emailUrl} variant="secondary">
                Enviar email
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-800/60 py-10">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-zinc-400">
            © {year} {BUSINESS.name}. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 text-sm">
            <a className="text-zinc-300/80 hover:text-zinc-50" href="#inicio">
              Inicio
            </a>
            <a className="text-zinc-300/80 hover:text-zinc-50" href="#contacto">
              Contacto
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        {/* <Services /> */}
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
