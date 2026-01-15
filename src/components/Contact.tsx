import { BUSINESS } from "../constants";
import Button from "./Button";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

export default function Contact() {
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
