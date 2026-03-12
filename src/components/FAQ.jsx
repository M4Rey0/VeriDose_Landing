import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { faqData } from "../data/faqData";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <SectionWrapper id="faq">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
          Preguntas frecuentes
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-primary">
          Lo que probablemente quieras saber
        </h2>
      </div>

      <div className="max-w-2xl mx-auto space-y-3">
        {faqData.map((item, i) => (
          <div key={i} className="bg-white rounded-xl border border-border overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
            >
              <span className="text-sm font-medium text-text pr-4">{item.question}</span>
              <svg
                className={`w-5 h-5 text-muted shrink-0 transition-transform duration-200 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === i && (
              <div className="px-6 pb-5">
                <p className="text-sm text-muted leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
