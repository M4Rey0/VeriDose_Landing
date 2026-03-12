import SectionWrapper from "./SectionWrapper";

const bullets = [
  "Verifica la dosis propuesta contra parámetros clave del paciente",
  "Devuelve una señal visual clara: seguro, revisar o alerta",
  "Funciona en segundos, sin interrumpir el flujo clínico",
  "Reduce la carga cognitiva del equipo bajo presión",
];

export default function Solution() {
  return (
    <SectionWrapper id="solucion" className="bg-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm font-semibold text-success uppercase tracking-wider mb-3">
            La solución
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary leading-tight">
            Una capa de verificación digital en el momento que más importa
          </h2>
          <p className="mt-6 text-base text-muted leading-relaxed">
            VeriDose ayuda a detectar dosis potencialmente inadecuadas antes de confirmar una
            prescripción. El sistema toma información clave del paciente y del medicamento, y
            devuelve una alerta visual clara para apoyar la validación clínica en segundos.
          </p>
          <ul className="mt-8 space-y-3">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-success mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-text">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Visual */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-xs">
            {/* Decorative badges */}
            <div className="bg-white rounded-2xl border border-border shadow-lg p-6 space-y-4">
              <div className="flex items-center gap-3 bg-success-light rounded-lg px-4 py-3">
                <div className="w-3 h-3 rounded-full bg-success" />
                <div>
                  <p className="text-xs font-semibold text-success">Dosis verificada</p>
                  <p className="text-[10px] text-success/70">Rango adecuado para el paciente</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-warning-light rounded-lg px-4 py-3">
                <div className="w-3 h-3 rounded-full bg-warning" />
                <div>
                  <p className="text-xs font-semibold text-warning">Requiere revisión</p>
                  <p className="text-[10px] text-warning/70">Comorbilidad relevante detectada</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-danger-light rounded-lg px-4 py-3">
                <div className="w-3 h-3 rounded-full bg-danger" />
                <div>
                  <p className="text-xs font-semibold text-danger">Alerta de peligro</p>
                  <p className="text-[10px] text-danger/70">Dosis fuera de rango seguro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
