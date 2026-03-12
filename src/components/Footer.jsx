export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-primary">VeriDose</p>
          <p className="text-xs text-muted mt-0.5">
            © {new Date().getFullYear()} VeriDose. Proyecto en fase de validación.
          </p>
        </div>
        <p className="text-xs text-muted text-center sm:text-right max-w-md">
          VeriDose es una herramienta conceptual de apoyo a la decisión clínica. No constituye
          consejo médico ni sustituye el criterio profesional.
        </p>
      </div>
    </footer>
  );
}
