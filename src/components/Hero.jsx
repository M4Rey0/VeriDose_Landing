import SectionWrapper from "./SectionWrapper";

export default function Hero() {
  return (
    <SectionWrapper id="hero" className="pt-12 md:pt-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
            Reduce el riesgo de errores de dosificación en UCI antes de que lleguen al paciente.
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl">
            VeriDose añade una capa de seguridad clínica en tiempo real para ayudar a los equipos de
            UCI a validar dosis críticas con más claridad, menos dependencia de memoria y mejor
            respaldo en momentos de alta presión.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#demo"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-light transition-colors shadow-sm"
            >
              Agendar demo
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-primary bg-white border border-border rounded-lg hover:bg-gray-50 transition-colors"
            >
              Ver cómo funciona
            </a>
          </div>
        </div>

        {/* Visual mockup — pure CSS card */}
        <div className="flex justify-center">
          <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg border border-border p-6 space-y-4">
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-text">Validación de dosis</p>
                <p className="text-xs text-muted">UCI — Cama 12</p>
              </div>
            </div>

            {/* Fake fields */}
            <div className="space-y-3">
              <div className="bg-bg rounded-lg px-3 py-2">
                <p className="text-[10px] text-muted uppercase tracking-wider">Paciente</p>
                <p className="text-sm font-medium text-text">Paciente A — 70 kg</p>
              </div>
              <div className="bg-bg rounded-lg px-3 py-2">
                <p className="text-[10px] text-muted uppercase tracking-wider">Medicamento</p>
                <p className="text-sm font-medium text-text">Norepinefrina</p>
              </div>
              <div className="bg-bg rounded-lg px-3 py-2">
                <p className="text-[10px] text-muted uppercase tracking-wider">Dosis</p>
                <p className="text-sm font-medium text-text">0.1 mcg/kg/min</p>
              </div>
            </div>

            {/* Status badge */}
            <div className="flex items-center justify-between pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-success-light text-success text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-success" />
                Seguro — Rango adecuado
              </span>
              <span className="text-[10px] text-muted">hace 2 s</span>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
