/**
 * Reusable section header with badge, title, and optional highlight/description.
 */
export default function SectionHeader({ badge, title, highlight, description }) {
  return (
    <div className="text-center mb-20">
      <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-white/50 uppercase tracking-widest mb-6">
        {badge}
      </span>
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
      {description && (
        <p className="text-white/40 mt-4 max-w-lg mx-auto">{description}</p>
      )}
    </div>
  );
}
