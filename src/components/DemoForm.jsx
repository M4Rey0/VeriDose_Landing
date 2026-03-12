import { useState } from "react";
import SectionWrapper from "./SectionWrapper";

export default function DemoForm() {
  const [form, setForm] = useState({
    nombre: "",
    cargo: "",
    institucion: "",
    correo: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const errs = {};
    if (!form.nombre.trim()) errs.nombre = "Campo requerido";
    if (!form.cargo.trim()) errs.cargo = "Campo requerido";
    if (!form.institucion.trim()) errs.institucion = "Campo requerido";
    if (!form.correo.trim()) {
      errs.correo = "Campo requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo)) {
      errs.correo = "Correo no válido";
    }
    return errs;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  }

  function handleChange(field, value) {
    setForm({ ...form, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  }

  if (submitted) {
    return (
      <SectionWrapper id="demo" className="bg-white">
        <div className="max-w-lg mx-auto text-center py-12">
          <div className="w-16 h-16 mx-auto rounded-full bg-success-light flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-primary mb-3">¡Solicitud recibida!</h3>
          <p className="text-base text-muted">
            Gracias. Te contactaremos para agendar una demo.
          </p>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="demo" className="bg-white">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left copy */}
        <div>
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Da el siguiente paso
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary leading-tight">
            Agenda una demo personalizada
          </h2>
          <p className="mt-4 text-base text-muted leading-relaxed">
            Queremos entender tu contexto clínico y mostrarte cómo VeriDose puede integrarse a tu
            flujo de trabajo. Sin compromiso.
          </p>
          <div className="mt-8 space-y-4">
            {[
              "Demo adaptada a tu tipo de unidad",
              "Conversación de 20-30 minutos",
              "Sin costo ni compromiso",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <svg className="w-5 h-5 text-success shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-text">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-bg rounded-2xl border border-border p-6 sm:p-8 space-y-5">
          <Field
            label="Nombre"
            value={form.nombre}
            error={errors.nombre}
            onChange={(v) => handleChange("nombre", v)}
          />
          <Field
            label="Cargo"
            value={form.cargo}
            error={errors.cargo}
            onChange={(v) => handleChange("cargo", v)}
            placeholder="Ej. Director médico, Jefe de UCI"
          />
          <Field
            label="Institución"
            value={form.institucion}
            error={errors.institucion}
            onChange={(v) => handleChange("institucion", v)}
          />
          <Field
            label="Correo electrónico"
            type="email"
            value={form.correo}
            error={errors.correo}
            onChange={(v) => handleChange("correo", v)}
          />
          <div>
            <label className="block text-xs font-medium text-muted uppercase tracking-wider mb-1.5">
              Mensaje (opcional)
            </label>
            <textarea
              value={form.mensaje}
              onChange={(e) => handleChange("mensaje", e.target.value)}
              rows={3}
              className="w-full bg-white border border-border rounded-lg px-3 py-2.5 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
              placeholder="Cuéntanos brevemente sobre tu contexto..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-light transition-colors cursor-pointer"
          >
            Solicitar demo
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
}

function Field({ label, value, error, onChange, type = "text", placeholder = "" }) {
  return (
    <div>
      <label className="block text-xs font-medium text-muted uppercase tracking-wider mb-1.5">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full bg-white border rounded-lg px-3 py-2.5 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary ${
          error ? "border-danger" : "border-border"
        }`}
      />
      {error && <p className="mt-1 text-xs text-danger">{error}</p>}
    </div>
  );
}
