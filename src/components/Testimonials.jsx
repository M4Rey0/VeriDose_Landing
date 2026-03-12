import SectionWrapper from "./SectionWrapper";
import { testimonialsData } from "../data/testimonialsData";

export default function Testimonials() {
  return (
    <SectionWrapper id="evidencia" className="bg-white">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
          Evidencia cualitativa
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-primary">
          Lo que escuchamos en el campo
        </h2>
        <p className="mt-3 text-base text-muted max-w-xl mx-auto">
          Citas reales de profesionales clínicos durante entrevistas y observación en contexto
          hospitalario.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonialsData.map((t, i) => (
          <div
            key={i}
            className="bg-bg rounded-2xl border border-border p-8 flex flex-col justify-between"
          >
            <div>
              <svg className="w-8 h-8 text-primary/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
              </svg>
              <p className="text-base text-text leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-border">
              <p className="text-sm font-semibold text-text">{t.role}</p>
              <p className="text-xs text-muted">Entrevista anonimizada</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
