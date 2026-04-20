import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './SectionHeader';

const PROJECTS = [
  {
    num: '01',
    type: 'Web Application',
    title: 'E-Commerce Platform',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras vehicula, mi eget laoreet venenatis, lorem ipsum cursus ante.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    icon: (
      <svg className="w-16 h-16 mx-auto text-white/20 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    num: '02',
    type: 'Mobile App',
    title: 'Task Management App',
    desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    tags: ['React Native', 'TypeScript', 'Firebase'],
    icon: (
      <svg className="w-16 h-16 mx-auto text-white/20 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    num: '03',
    type: 'Dashboard',
    title: 'Analytics Dashboard',
    desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed ut perspiciatis unde omnis iste natus.',
    tags: ['Next.js', 'D3.js', 'PostgreSQL', 'Redis'],
    icon: (
      <svg className="w-16 h-16 mx-auto text-white/20 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

function GithubIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function ProjectCard({ project, reverse }) {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="reveal grid lg:grid-cols-2 gap-8 items-center">
      {/* Image */}
      <div className={`group relative rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 ${reverse ? 'order-1 lg:order-2' : ''}`}>
        <div className="img-placeholder aspect-video flex items-center justify-center">
          <div className="text-center">
            {project.icon}
            <p className="text-white/30 text-sm font-mono">project-screenshot-{project.num}.png</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <span className="px-5 py-2 rounded-full bg-white text-black text-sm font-medium hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 cursor-pointer">
            Xem chi tiết →
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={`space-y-4 ${reverse ? 'order-2 lg:order-1' : ''}`}>
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-white/30">{project.num}</span>
          <div className="w-12 h-px bg-white/20" />
          <span className="text-xs text-white/50">{project.type}</span>
        </div>
        <h3 className="text-3xl font-bold">{project.title}</h3>
        <p className="text-white/50 leading-relaxed">{project.desc}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-full border border-white/10 text-xs text-white/50">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4 pt-4">
          <a href="#" className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-300">
            <GithubIcon />
            <span>GitHub</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-300">
            <ExternalLinkIcon />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const headerRef = useScrollReveal();

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-white/[0.01] blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={headerRef} className="reveal">
          <SectionHeader
            badge="Dự án"
            title="Các dự án"
            highlight="nổi bật"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Những dự án tốt nhất tôi đã thực hiện."
          />
        </div>

        <div className="space-y-24">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.num} project={project} reverse={idx % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
