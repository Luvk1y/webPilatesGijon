import { BUSINESS } from "../constants";
import Button from "./Button";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

export default function Location() {
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
            <h3 className="text-sm font-semibold">Dirección</h3>
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
