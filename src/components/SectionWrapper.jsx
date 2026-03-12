export default function SectionWrapper({ id, children, className = "", dark = false }) {
  return (
    <section
      id={id}
      className={`py-20 px-4 sm:px-6 lg:px-8 ${dark ? "bg-primary text-white" : ""} ${className}`}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
