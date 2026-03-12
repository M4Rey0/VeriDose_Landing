import SectionWrapper from "./SectionWrapper";
import { stepsData } from "../data/stepsData";

export default function HowItWorks() {
  return (
    <SectionWrapper id="como-funciona">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
          Cómo funciona
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-primary">
          Tres pasos. Menos de un minuto.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {stepsData.map((step, i) => (
          <div key={i} className="relative bg-white rounded-2xl border border-border p-8 text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold mb-5">
              {step.number}
            </div>
            <h3 className="text-lg font-semibold text-text mb-3">{step.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{step.description}</p>

            {/* Connector arrow (desktop only, not on last) */}
            {i < stepsData.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-5 -translate-y-1/2">
                <svg className="w-4 h-4 text-border" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
