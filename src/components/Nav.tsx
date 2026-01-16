import { useState } from "react";
import logoImg from "../assets/PilatesGijonLOGO2.png";
import { BUSINESS } from "../constants";
import Button from "./Button";
import Container from "./Container";

export default function Nav() {
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
              className="h-36 w-auto mt-2"
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
