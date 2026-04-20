export default function Hero() {
  const techStack = ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker'];

  const handleClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center grid-lines">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.02] blur-[100px] animate-glow-pulse" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Status badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 opacity-0"
          style={{ animation: 'fade-in 1s ease-out 0.1s forwards' }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-white/70">Sẵn sàng cho cơ hội mới</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6">
          <span
            className="block opacity-0"
            style={{ animation: 'slide-up 0.8s ease-out 0.1s forwards' }}
          >
            Xin chào, tôi là
          </span>
          <span
            className="block gradient-text opacity-0"
            style={{ animation: 'slide-up 0.8s ease-out 0.3s forwards' }}
          >
            Nguyễn Văn A
          </span>
        </h1>

        {/* Subtitle */}
        <div className="opacity-0" style={{ animation: 'slide-up 0.8s ease-out 0.5s forwards' }}>
          <p className="text-xl sm:text-2xl text-white/50 font-light max-w-2xl mx-auto mb-4">
            Full-Stack Developer
          </p>
          <p className="text-base sm:text-lg text-white/40 font-light max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crafting digital experiences with clean code &amp; modern design.
          </p>
        </div>

        {/* Tech stack pills */}
        <div
          className="flex flex-wrap justify-center gap-3 mt-10 opacity-0"
          style={{ animation: 'slide-up 0.8s ease-out 0.7s forwards' }}
        >
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/60 hover:border-white/30 hover:text-white/90 transition-all duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 opacity-0"
          style={{ animation: 'slide-up 0.8s ease-out 0.9s forwards' }}
        >
          <a
            href="#projects"
            onClick={(e) => handleClick(e, '#projects')}
            className="group relative px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            <span className="relative z-10">Xem dự án</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#about"
            onClick={(e) => handleClick(e, '#about')}
            className="group px-8 py-3.5 rounded-full border border-white/20 text-sm font-medium hover:border-white/50 transition-all duration-300 flex items-center gap-2"
          >
            <span>Tìm hiểu thêm</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-y-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <div className="w-1 h-3 rounded-full bg-white/50 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
