import { HERO_DATA } from '../data/portfolio';

export default function Hero() {
  const { greeting, name, title, description, techStack } = HERO_DATA;

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center grid-lines">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/2 blur-[100px] animate-glow-pulse pointer-events-none" />

      <div className="relative z-10 section-container w-full text-center py-20 flex flex-col items-center justify-center gap-10">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
          <span className="block opacity-0" style={{ animation: 'slide-up 0.8s ease-out 0.2s forwards' }}>
            {greeting}
          </span>
          <span className="block gradient-text opacity-0 mt-1" style={{ animation: 'slide-up 0.8s ease-out 0.4s forwards' }}>
            {name}
          </span>
        </h1>

        {/* Subtitle — centered */}
        <div className="opacity-0 flex flex-col items-center max-w-md" style={{ animation: 'slide-up 0.8s ease-out 0.6s forwards' }}>
          <p className="text-lg text-white/50 font-light mb-2 text-center">{title}</p>
          <p className="text-[14px] text-white/35 leading-relaxed text-center">
            {description}
          </p>
        </div>

        {/* Tech stack — larger, better spaced */}
        <div className="flex flex-wrap justify-center gap-2.5 opacity-0" style={{ animation: 'slide-up 0.8s ease-out 0.8s forwards' }}>
          {techStack.map((tech) => (
            <span key={tech} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[13px] text-white/50 hover:border-white/25 hover:text-white/80 transition-all duration-300">
              {tech}
            </span>
          ))}
        </div>


      </div>


      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float-custom">
        {/* Desktop Mouse Scroll */}
        <div className="hidden sm:flex w-5 h-8 rounded-full border-2 border-white/20 justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-white/40 animate-bounce" />
        </div>
        
        {/* Mobile Arrow Scroll */}
        <div className="sm:hidden flex flex-col items-center gap-1 opacity-40">
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
