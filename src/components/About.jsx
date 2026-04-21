import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './SectionHeader';
import { ABOUT_DATA } from '../data/portfolio';

export default function About() {
  const { title, highlight, descriptionLine1, bio, stats, skills, profile1, profile2, ygoBack } = ABOUT_DATA;
  const [isFlipped, setIsFlipped] = useState(false);

  const headerRef = useScrollReveal();
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();

  return (
    <section id="about" className="relative pt-20 pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-white/[0.015] blur-[100px] pointer-events-none" />

      <div className="section-container">
        <div ref={headerRef} className="reveal">
          <SectionHeader title={title} highlight={highlight} />
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-center">
          {/* Left: Image + Stats */}
          <div ref={leftRef} className="reveal-left lg:col-span-2">
            <div className="rounded-2xl overflow-hidden border border-white/10 aspect-square relative group profile-perspective">
              {/* Profile 01 - Base Layer */}
              <img 
                src={profile1} 
                alt="Profile Base" 
                className="profile-base"
              />
              <div className="base-shimmer" />

              {/* YGO Slide Overlay + Flip Card */}
              <div className={`ygo-card-wrapper ${isFlipped ? 'stay-visible' : ''}`}>
                <div 
                  className={`ygo-card-inner ${isFlipped ? 'is-flipped' : ''}`}
                  onClick={() => setIsFlipped(!isFlipped)}
                >
                  {/* Front: YGO Back Card */}
                  <div className="card-face card-face-front">
                    <img src={ygoBack} alt="YGO Card Back" />
                  </div>
                  
                  {/* Back: Profile 02 */}
                  <div className="card-face card-face-back">
                    <img src={profile2} alt="Profile Hidden" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none z-[15]" />
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

          {/* Right: Content */}
          <div ref={rightRef} className="reveal-right lg:col-span-3">
            <h3 className="text-xl font-semibold mb-4 leading-snug">
              {descriptionLine1.split(' ').map((word, i) =>
                i === descriptionLine1.split(' ').length - 1 ? <span key={i} className="text-white/50">{word}</span> : word + ' '
              )}
            </h3>
            {bio.map((paragraph, i) => (
              <p key={i} className={`text-[14px] text-white/45 leading-relaxed ${i === bio.length - 1 ? 'mb-12' : 'mb-3'}`}>
                {paragraph}
              </p>
            ))}


            {/* Skills */}
            <div style={{ marginTop: '15px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <h4 className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em] mb-5 flex items-center gap-3">
                <span className="w-6 h-px bg-white/10" />
                Technical Skills
              </h4>
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
      </div>
    </section>
  );
}
