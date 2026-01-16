import Container from "./Container";
import SectionTitle from "./SectionTitle";

export default function Services() {
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
              <h3 className="text-sm font-semibold">{s}</h3>
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
