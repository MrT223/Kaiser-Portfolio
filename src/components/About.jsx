import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './SectionHeader';

const SKILLS = [
  {
    title: 'Frontend',
    desc: 'React, Vue, Next.js, TailwindCSS',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Backend',
    desc: 'Node.js, Python, Express, FastAPI',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
      </svg>
    ),
  },
  {
    title: 'Database',
    desc: 'PostgreSQL, MongoDB, Redis',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6" />
      </svg>
    ),
  },
  {
    title: 'DevOps',
    desc: 'Docker, CI/CD, AWS, Linux',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
  },
];

function SkillCard({ title, desc, icon }) {
  return (
    <div className="group p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">{icon}</div>
        <span className="font-medium text-sm">{title}</span>
      </div>
      <p className="text-xs text-white/40">{desc}</p>
    </div>
  );
}

export default function About() {
  const headerRef = useScrollReveal();
  const imageRef = useScrollReveal();
  const contentRef = useScrollReveal();

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-white/[0.015] blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="reveal">
          <SectionHeader badge="Giới thiệu" title="Về" highlight="bản thân tôi" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div ref={imageRef} className="reveal-left">
            <div className="relative group">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-white/5 via-white/10 to-white/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/5]">
                <div className="img-placeholder w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto rounded-full border-2 border-white/20 flex items-center justify-center mb-4">
                      <svg className="w-16 h-16 text-white/30" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                    <p className="text-white/30 text-sm font-mono">your-photo.jpg</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
              </div>

              {/* Stats card */}
              <div className="absolute -bottom-6 -right-6 p-4 rounded-xl bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 shadow-2xl">
                <div className="flex items-center gap-4">
                  <StatItem value="3+" label="Năm KN" />
                  <div className="w-px h-10 bg-white/10" />
                  <StatItem value="20+" label="Dự án" />
                  <div className="w-px h-10 bg-white/10" />
                  <StatItem value="10+" label="Khách hàng" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div ref={contentRef} className="reveal-right space-y-6">
            <h3 className="text-2xl font-semibold">
              Đam mê tạo ra những sản phẩm <span className="text-white/60">xuất sắc</span>
            </h3>
            <p className="text-white/50 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-white/50 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            {/* Skills grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {SKILLS.map((skill) => (
                <SkillCard key={skill.title} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-xs text-white/50">{label}</div>
    </div>
  );
}
