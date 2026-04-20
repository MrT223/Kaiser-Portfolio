import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './SectionHeader';

const CERTS = [
  {
    year: '2024',
    title: 'AWS Solutions Architect',
    issuer: 'Amazon Web Services',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    ),
  },
  {
    year: '2023',
    title: 'Google Professional Cloud Developer',
    issuer: 'Google Cloud',
    desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    ),
  },
  {
    year: '2023',
    title: 'Meta Front-End Developer',
    issuer: 'Meta (Coursera)',
    desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    ),
  },
  {
    year: '2022',
    title: 'Docker Certified Associate',
    issuer: 'Docker Inc.',
    desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    ),
  },
  {
    year: '2022',
    title: 'Scrum Master Certified',
    issuer: 'Scrum Alliance',
    desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
  },
  {
    year: '2021',
    title: 'CompTIA Security+',
    issuer: 'CompTIA',
    desc: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    ),
  },
];

function CertCard({ cert, delay }) {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref}
      className="reveal-scale group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500"
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-all duration-300">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {cert.icon}
          </svg>
        </div>
        <span className="text-xs text-white/30 font-mono">{cert.year}</span>
      </div>

      <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition-colors duration-300">
        {cert.title}
      </h3>
      <p className="text-sm text-white/40 mb-4">{cert.issuer}</p>
      <p className="text-xs text-white/30 leading-relaxed">{cert.desc}</p>

      <div className="mt-4 pt-4 border-t border-white/5">
        <a href="#" className="text-xs text-white/50 hover:text-white transition-colors duration-300 flex items-center gap-1">
          Xem chứng chỉ
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function Certificates() {
  const headerRef = useScrollReveal();

  return (
    <section id="certificates" className="relative py-32 overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-white/[0.015] blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={headerRef} className="reveal">
          <SectionHeader
            badge="Chứng chỉ"
            title="Chứng chỉ &"
            highlight="Thành tựu"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Những chứng chỉ và thành tựu nổi bật."
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTS.map((cert, idx) => (
            <CertCard key={cert.title} cert={cert} delay={(idx + 1) * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
