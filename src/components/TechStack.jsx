import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './SectionHeader';
import { TECH_STACK_DATA } from '../data/portfolio';

function TechCard({ tech, index }) {
  const ref = useScrollReveal();

  return (
    <div 
      ref={ref} 
      className="reveal-scale group relative p-4 flex flex-col items-center justify-center gap-3 transition-all duration-300"
      style={{ transitionDelay: `${index * 0.05}s` }}
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 bg-white/[0.02] rounded-2xl border border-white/[0.05] group-hover:bg-white/[0.05] group-hover:border-white/10 transition-all duration-300" />
      
      {/* Icon */}
      <div className="relative w-12 h-12 flex items-center justify-center text-white/40 group-hover:text-white transition-colors duration-300">
        <svg className="w-8 h-8" viewBox="0 0 24 24">
          {tech.icon}
        </svg>
      </div>

      {/* Name */}
      <span className="relative text-[13px] font-medium text-white/30 group-hover:text-white/80 transition-colors duration-300">
        {tech.name}
      </span>

      {/* Subtle indicator dot */}
      <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}

export default function TechStack() {
  const { title, highlight, description, techs } = TECH_STACK_DATA;
  const headerRef = useScrollReveal();

  return (
    <section id="tech-stack" className="relative py-20 overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/[0.01] blur-[100px] pointer-events-none" />

      <div className="section-container">
        <div ref={headerRef} className="reveal mb-12">
          <SectionHeader title={title} highlight={highlight} description={description} />
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4">
          {techs.map((tech, idx) => (
            <TechCard key={tech.name} tech={tech} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
