import SectionWrapper from "./SectionWrapper";

export default function FinalCTA() {
  return (
    <SectionWrapper id="cta-final" className="bg-primary">
      <div className="text-center py-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
          ¿Listo para sumar una capa de seguridad clínica a tu UCI?
        </h2>
        <p className="mt-4 text-base text-white/70 max-w-xl mx-auto">
          Agenda una conversación de 20 minutos. Sin costo, sin compromiso, enfocada en tu contexto.
        </p>
        <a
          href="#demo"
          className="mt-8 inline-flex items-center px-8 py-3.5 text-sm font-semibold text-primary bg-white rounded-lg hover:bg-gray-100 transition-colors shadow-sm"
        >
          Agendar demo
        </a>
      </div>
    </SectionWrapper>
  );
}
