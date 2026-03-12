import SectionWrapper from "./SectionWrapper";

export default function Problem() {
  return (
    <SectionWrapper id="problema">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold text-danger uppercase tracking-wider mb-3">
          El problema
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-primary leading-tight">
          En UCI, la precisión no debería depender solo del factor humano
        </h2>
        <div className="mt-6 border-l-4 border-danger/30 pl-6">
          <p className="text-base text-muted leading-relaxed">
            En UCI, los equipos clínicos toman decisiones de alto impacto bajo presión constante,
            con múltiples pacientes críticos y medicamentos simultáneos. Cuando la revisión de dosis
            depende de experiencia, memoria y sistemas fragmentados, incluso un profesional altamente
            capacitado queda expuesto a errores que no deberían depender solo del factor humano.
          </p>
        </div>

        {/* Stats row */}
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {[
            { stat: "34%", desc: "de errores de medicación ocurren en la etapa de prescripción" },
            { stat: "1 de 5", desc: "dosis en UCI presenta algún tipo de discrepancia" },
            { stat: "< 3s", desc: "es el tiempo disponible para decidir bajo presión" },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl border border-border p-5">
              <p className="text-2xl font-bold text-danger">{item.stat}</p>
              <p className="mt-1 text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
