import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './SectionHeader';
import { CERTS_DATA } from '../data/portfolio';

function CertCard({ cert, index }) {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="reveal-scale card-base group p-5 relative overflow-hidden" style={{ transitionDelay: `${index * 0.08}s` }}>
      {/* Top glow */}
      <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:border-white/20 transition-all">
          <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">{cert.icon}</svg>
        </div>
        <span className="text-[11px] text-white/25 font-mono shrink-0">{cert.year}</span>
      </div>

      <h3 className="text-[14px] font-semibold mb-1 leading-snug group-hover:text-white transition-colors line-clamp-2">{cert.title}</h3>
      <p className="text-[12px] text-white/35 mb-2">{cert.issuer}</p>
      <p className="text-[12px] text-white/25 leading-relaxed line-clamp-2">{cert.desc}</p>

      <div className="mt-3 pt-3 border-t border-white/5">
        <a href="#" className="text-[12px] text-white/50 hover:text-white transition-colors flex items-center gap-1">
          Xem chứng chỉ
          <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function Certificates() {
  const { badge, title, highlight, description, certs } = CERTS_DATA;
  const headerRef = useScrollReveal();

  return (
    <section id="certificates" className="relative py-20 overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-white/[0.015] blur-[100px] pointer-events-none" />

      <div className="section-container">
        <div ref={headerRef} className="reveal">
          <SectionHeader badge={badge} title={title} highlight={highlight} description={description} />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((cert, idx) => (
            <CertCard key={cert.title} cert={cert} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

