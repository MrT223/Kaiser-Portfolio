import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './SectionHeader';

const PROJECTS = [
  {
    num: '01', type: 'Web Application', title: 'E-Commerce Platform',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
  },
  {
    num: '02', type: 'Mobile App', title: 'Task Management App',
    desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.',
    tags: ['React Native', 'TypeScript', 'Firebase'],
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />,
  },
  {
    num: '03', type: 'Dashboard', title: 'Analytics Dashboard',
    desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
    tags: ['Next.js', 'D3.js', 'PostgreSQL', 'Redis'],
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
  },
];

function ProjectCard({ project, reverse }) {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="reveal">
      <div className={`grid lg:grid-cols-2 gap-8 items-center`}>
        {/* Image */}
        <div className={reverse ? 'lg:order-2' : 'lg:order-1'}>
          <div className="group rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/15 transition-all duration-500 relative">
            <div className="img-placeholder aspect-video flex items-center justify-center">
              <div className="text-center p-4">
                <svg className="w-10 h-10 mx-auto text-white/15 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">{project.icon}</svg>
                <p className="text-white/20 text-xs font-mono truncate">project-screenshot-{project.num}.png</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
              <span className="px-4 py-1.5 rounded-full bg-white text-black text-xs font-medium cursor-pointer">Xem chi tiết →</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className={reverse ? 'lg:order-1' : 'lg:order-2'}>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-mono text-white/25">{project.num}</span>
            <div className="w-8 h-px bg-white/15" />
            <span className="text-[12px] text-white/40">{project.type}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-3 leading-snug">{project.title}</h3>
          <p className="text-[14px] text-white/45 leading-relaxed mb-4">{project.desc}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full border border-white/[0.08] text-[12px] text-white/40">{tag}</span>
            ))}
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="flex items-center gap-1.5 text-[13px] text-white/50 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" /></svg>
              GitHub
            </a>
            <a href="#" className="flex items-center gap-1.5 text-[13px] text-white/50 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const headerRef = useScrollReveal();

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[350px] h-[350px] rounded-full bg-white/[0.01] blur-[120px] pointer-events-none" />

      <div className="section-container">
        <div ref={headerRef} className="reveal">
          <SectionHeader badge="Dự án" title="Các dự án" highlight="nổi bật" description="Những dự án tiêu biểu tôi đã thực hiện." />
        </div>

        <div className="flex flex-col gap-14">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.num} project={project} reverse={idx % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
