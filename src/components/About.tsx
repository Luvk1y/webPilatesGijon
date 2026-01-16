import aboutImg from "../assets/pilates-reformer-people.jpg";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

export default function About() {
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
            <h3 className="text-sm font-semibold">Experiencia</h3>
            <p className="mt-2 text-sm text-zinc-200/80">
              Gracias a nuestro personal cualificado contaras con el mejor
              servicio posible.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/60 p-6">
            <h3 className="text-sm font-semibold">Maquinaria preparada</h3>
            <p className="mt-2 text-sm text-zinc-200/80">
              Contamos con equipos modernos y bien mantenidos para garantizar la
              mejor experiencia de entrenamiento.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/60 p-6">
            <h3 className="text-sm font-semibold">Cercanía</h3>
            <p className="mt-2 text-sm text-zinc-200/80">
              Nuestros instructores están siempre disponibles para ti.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
