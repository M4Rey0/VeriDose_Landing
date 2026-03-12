import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { mockupOptions, evaluateDose } from "../data/mockupRules";

const resultConfig = {
  seguro: {
    label: "Seguro — Rango adecuado",
    bg: "bg-success-light",
    text: "text-success",
    dot: "bg-success",
    border: "border-success/30",
  },
  revisar: {
    label: "Revisar — Verificar parámetros",
    bg: "bg-warning-light",
    text: "text-warning",
    dot: "bg-warning",
    border: "border-warning/30",
  },
  peligro: {
    label: "Peligro — Fuera de rango seguro",
    bg: "bg-danger-light",
    text: "text-danger",
    dot: "bg-danger",
    border: "border-danger/30",
  },
};

export default function InteractiveMockup() {
  const [form, setForm] = useState({
    paciente: "",
    comorbilidad: "",
    medicamento: "",
    via: "",
    dosis: "",
  });
  const [result, setResult] = useState(null);

  const dosisOptions = form.medicamento ? mockupOptions.dosis[form.medicamento] || [] : [];

  function handleChange(field, value) {
    const updated = { ...form, [field]: value };
    // Reset dosis when medicamento changes
    if (field === "medicamento") updated.dosis = "";
    setForm(updated);
    setResult(null);
  }

  function handleValidate() {
    if (!form.paciente || !form.comorbilidad || !form.medicamento || !form.via || !form.dosis) return;
    const res = evaluateDose(form.medicamento, form.dosis, form.comorbilidad);
    setResult(res);
  }

  const cfg = result ? resultConfig[result] : null;
  const allFilled = form.paciente && form.comorbilidad && form.medicamento && form.via && form.dosis;

  return (
    <SectionWrapper id="mockup" className="bg-white">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
          Demo interactiva
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-primary">
          Prueba cómo funciona la validación
        </h2>
        <p className="mt-3 text-base text-muted max-w-xl mx-auto">
          Esta es una simulación conceptual. Selecciona una combinación y observa la señal de alerta.
        </p>
      </div>

      <div className="max-w-lg mx-auto bg-bg rounded-2xl border border-border p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <span className="text-sm font-semibold text-text">Verificación de dosis</span>
        </div>

        <div className="space-y-4">
          <Select
            label="Paciente"
            value={form.paciente}
            options={mockupOptions.pacientes}
            onChange={(v) => handleChange("paciente", v)}
          />
          <Select
            label="Comorbilidad principal"
            value={form.comorbilidad}
            options={mockupOptions.comorbilidades}
            onChange={(v) => handleChange("comorbilidad", v)}
          />
          <Select
            label="Medicamento"
            value={form.medicamento}
            options={mockupOptions.medicamentos}
            onChange={(v) => handleChange("medicamento", v)}
          />
          <Select
            label="Vía"
            value={form.via}
            options={mockupOptions.vias}
            onChange={(v) => handleChange("via", v)}
          />
          <Select
            label="Dosis"
            value={form.dosis}
            options={dosisOptions}
            onChange={(v) => handleChange("dosis", v)}
            disabled={!form.medicamento}
          />
        </div>

        <button
          onClick={handleValidate}
          disabled={!allFilled}
          className={`mt-6 w-full py-3 rounded-lg text-sm font-semibold transition-colors ${
            allFilled
              ? "bg-primary text-white hover:bg-primary-light cursor-pointer"
              : "bg-border text-muted cursor-not-allowed"
          }`}
        >
          Validar dosis
        </button>

        {/* Result */}
        {cfg && (
          <div className={`mt-6 ${cfg.bg} border ${cfg.border} rounded-xl p-5 flex items-center gap-3 animate-[fadeIn_0.3s_ease-out]`}>
            <span className={`w-3 h-3 rounded-full ${cfg.dot} shrink-0`} />
            <span className={`text-sm font-semibold ${cfg.text}`}>{cfg.label}</span>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}

function Select({ label, value, options, onChange, disabled = false }) {
  return (
    <div>
      <label className="block text-xs font-medium text-muted uppercase tracking-wider mb-1.5">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className="w-full bg-white border border-border rounded-lg px-3 py-2.5 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed appearance-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%236b7280'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 0.5rem center",
          backgroundSize: "1.5em 1.5em",
        }}
      >
        <option value="">Seleccionar...</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
