/**
 * Reusable section header with badge, title, optional highlight and description.
 */
export default function SectionHeader({ badge, title, highlight, description }) {
  return (
    <div className="text-center mb-16">
      {badge && (
        <span className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] mb-5">
          {badge}
        </span>
      )}

      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
      {description && (
        <p className="text-white/35 text-sm mt-3 max-w-md mx-auto leading-relaxed">{description}</p>
      )}
    </div>
  );
}
