import { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './SectionHeader';
import { ACHIEVEMENTS_DATA } from '../data/portfolio';

function AchievementCard({ achievement }) {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="reveal group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-white/10 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
      <div className="relative flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-[#0a0a0a] border border-white/[0.06] group-hover:border-white/15 transition-all duration-500">
        {/* Placeholder for Image */}
        <div className="md:w-1/3 aspect-[4/3] rounded-xl overflow-hidden bg-white/[0.03] border border-white/[0.05] flex items-center justify-center group-hover:bg-white/[0.05] transition-colors">
          {achievement.image ? (
            <img src={achievement.image} alt={achievement.title} className="w-full h-full object-cover" />
          ) : (
            <div className="text-center p-4">
              <svg className="w-12 h-12 mx-auto text-white/10 mb-3 group-hover:text-white/20 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {achievement.icon}
              </svg>
              <p className="text-white/20 text-[10px] font-mono uppercase tracking-widest">Certificate Image</p>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="md:w-2/3 flex flex-col justify-center gap-5">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono text-white/30 uppercase tracking-wider bg-white/5 px-2 py-0.5 rounded border border-white/10">
              {achievement.date}
            </span>
            <div className="h-px flex-grow bg-white/10" />
          </div>
          
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300 leading-relaxed">
            {achievement.title}
          </h3>
          
          <p className="text-sm text-white/40 leading-loose">
            {achievement.desc}
          </p>
          
          <div className="flex items-center gap-2.5 text-xs text-white/30 italic pt-2">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            {achievement.issuer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Achievements() {
  const { title, highlight, description, achievements, certificates, certificatesTitle, certificatesDesc } = ACHIEVEMENTS_DATA;
  const headerRef = useScrollReveal();
  const certHeaderRef = useScrollReveal();
  
  // Detect mobile screen
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const INITIAL_DISPLAY_COUNT = 8;

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // On desktop: show all. On mobile: collapse/expand.
  const displayedCertificates = (!isMobile || isExpanded) ? certificates : certificates.slice(0, INITIAL_DISPLAY_COUNT);
  const showToggle = isMobile && certificates.length > INITIAL_DISPLAY_COUNT;
  const showOverlay = isMobile && !isExpanded && certificates.length > INITIAL_DISPLAY_COUNT;

  return (
    <section id="achievements" className="relative py-24 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.02] blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/[0.01] blur-[100px] rounded-full -z-10" />

      <div className="section-container">
        <div ref={headerRef} className="reveal">
          <SectionHeader title={title} highlight={highlight} description={description} />
        </div>

        {/* Main Achievement */}
        <div className="mt-12 max-w-4xl mx-auto">
          {achievements.map((item, idx) => (
            <AchievementCard key={idx} achievement={item} />
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="mt-32 pt-24 pb-20 border-t border-white/[0.05]">
          <div ref={certHeaderRef} className="reveal text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] mb-5">
              Verified Skills
            </span>
            <h3 className="text-2xl font-bold mb-3">{certificatesTitle}</h3>
            {certificatesDesc && (
              <p className="text-white/40 text-sm max-w-lg mx-auto">{certificatesDesc}</p>
            )}
          </div>

          <div className="relative">
            <div className="grid grid-cols-3 min-[400px]:grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3 justify-items-center">
              {displayedCertificates.map((cert, idx) => (
                <a 
                  key={idx} 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full aspect-square rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center p-2 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 group overflow-hidden relative"
                  title={cert.name}
                >
                  <img 
                    src={cert.image} 
                    alt={cert.name} 
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100 scale-90 group-hover:scale-100" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>

            {/* Gradient Overlay when collapsed (mobile only) */}
            {showOverlay && (
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
            )}
          </div>
          
          <div className="mt-12 text-center flex flex-col items-center gap-6">
            {showToggle && (
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="group relative min-w-[160px] py-3 rounded-full bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-white/[0.02] group-hover:bg-white/[0.05] transition-colors" />
                <span className="relative text-[9px] font-mono uppercase tracking-[0.2em] text-white/60 group-hover:text-white transition-colors flex items-center gap-2">
                  {isExpanded ? (
                    <>Show Less <span className="text-sm">↑</span></>
                  ) : (
                    <>Show More (+{certificates.length - INITIAL_DISPLAY_COUNT}) <span className="text-sm">↓</span></>
                  )}
                </span>
              </button>
            )}

            <p className="text-[11px] font-mono text-white/20 uppercase tracking-[0.3em]">
              Tap on badges to verify credentials
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
