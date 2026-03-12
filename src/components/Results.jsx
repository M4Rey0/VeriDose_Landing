import SectionWrapper from "./SectionWrapper";

const metrics = [
  {
    value: "< 3 seg",
    label: "por validación",
    description: "Resultado visual inmediato tras ingresar los datos del paciente",
  },
  {
    value: "3 niveles",
    label: "de alerta claros",
    description: "Seguro, Revisar y Peligro — para actuar con la señal correcta",
  },
  {
    value: "0 pasos",
    label: "interrumpidos",
    description: "Se integra en el flujo de prescripción sin detener el trabajo clínico",
  },
];

export default function Results() {
  return (
    <SectionWrapper id="resultados">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
          Resultados esperados
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-primary">
          Diseñado para aportar valor sin añadir fricción
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {metrics.map((m, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border border-border p-8 text-center hover:shadow-md transition-shadow"
          >
            <p className="text-3xl font-bold text-primary">{m.value}</p>
            <p className="text-sm font-semibold text-text mt-1">{m.label}</p>
            <p className="text-sm text-muted mt-3 leading-relaxed">{m.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
