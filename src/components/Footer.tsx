import { BUSINESS } from "../constants";
import Container from "./Container";

export default function Footer() {
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
