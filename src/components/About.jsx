import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './SectionHeader';
import { ABOUT_DATA } from '../data/portfolio';

export default function About() {
  const { badge, title, highlight, descriptionLine1, bio, stats, skills } = ABOUT_DATA;

  const headerRef = useScrollReveal();
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-white/[0.015] blur-[100px] pointer-events-none" />

      <div className="section-container">
        <div ref={headerRef} className="reveal">
          <SectionHeader badge={badge} title={title} highlight={highlight} />
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left: Image + Stats — 2 columns */}
          <div ref={leftRef} className="reveal-left lg:col-span-2">
            {/* Profile image */}
            <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[3/4] relative">
              <div className="img-placeholder w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-full border-2 border-white/15 flex items-center justify-center mb-3">
                    <svg className="w-10 h-10 text-white/20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <p className="text-white/25 text-xs font-mono">your-photo.jpg</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
            </div>

            {/* Stats */}
            <div className="mt-4 p-4 rounded-xl bg-[#141414] border border-white/[0.08]">
              <div className="flex items-center justify-around text-center">
                {stats.map((stat, idx) => (
                  <React.Fragment key={stat.label}>
                    <div>
                      <div className="text-xl font-bold">{stat.value}</div>
                      <div className="text-[11px] text-white/40">{stat.label}</div>
                    </div>
                    {idx < stats.length - 1 && <div className="w-px h-8 bg-white/10" />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Content — 3 columns */}
          <div ref={rightRef} className="reveal-right lg:col-span-3">
            <h3 className="text-xl font-semibold mb-4 leading-snug">
              {descriptionLine1.split(' ').map((word, i) => 
                i === descriptionLine1.split(' ').length - 1 ? <span key={i} className="text-white/50">{word}</span> : word + ' '
              )}
            </h3>
            {bio.map((paragraph, i) => (
              <p key={i} className={`text-[14px] text-white/45 leading-relaxed ${i === bio.length - 1 ? 'mb-6' : 'mb-3'}`}>
                {paragraph}
              </p>
            ))}

            {/* Skills */}
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill) => (
                <div key={skill.title} className="card-base p-4">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="w-7 h-7 rounded-lg bg-white/[0.08] flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">{skill.icon}</svg>
                    </div>
                    <span className="font-medium text-[13px]">{skill.title}</span>
                  </div>
                  <p className="text-[12px] text-white/35 leading-relaxed">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


