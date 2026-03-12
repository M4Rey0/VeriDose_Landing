import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Problema", href: "#problema" },
    { label: "Solución", href: "#solucion" },
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Evidencia", href: "#evidencia" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#hero" className="text-xl font-bold text-primary tracking-tight">
          VeriDose
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#demo"
            className="inline-flex items-center px-5 py-2 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-light transition-colors"
          >
            Agendar demo
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-muted hover:text-primary"
          aria-label="Menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-white px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-muted hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#demo"
            onClick={() => setOpen(false)}
            className="mt-2 block text-center px-5 py-2.5 text-sm font-semibold text-white bg-primary rounded-lg"
          >
            Agendar demo
          </a>
        </div>
      )}
    </nav>
  );
}
