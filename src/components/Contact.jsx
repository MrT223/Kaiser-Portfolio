import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './SectionHeader';
import { CONTACT_DATA } from '../data/portfolio';

function ChannelCard({ channel, index, featured = false }) {
  const ref = useScrollReveal();
  const Tag = channel.href ? 'a' : 'div';
  const isLink = !!channel.href;

  return (
    <div
      ref={ref}
      className={`reveal ${featured ? 'sm:col-span-2' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Tag
        {...(isLink ? { href: channel.href, target: channel.href.startsWith('mailto') ? '_self' : '_blank', rel: 'noopener noreferrer' } : {})}
        className={`contact-card group ${featured ? 'contact-card--featured' : ''}`}
        style={{ '--accent': channel.color }}
      >
        {/* Animated gradient border on hover */}
        <div className="contact-card-border" style={{ '--accent': channel.color }} />

        {/* Accent glow */}
        <div className="contact-card-glow" style={{ background: `radial-gradient(ellipse at 50% 0%, ${channel.color}18 0%, transparent 60%)` }} />

        {/* Content */}
        <div className="contact-card-inner">
          {featured ? (
            /* Featured layout: large icon left, content right */
            <div className="flex items-center gap-5">
              <div className="contact-icon contact-icon--lg" style={{ '--accent': channel.color }}>
                <svg
                  className="w-7 h-7"
                  style={{ color: 'rgba(255,255,255,0.45)' }}
                  fill={channel.iconStroke ? 'none' : 'currentColor'}
                  stroke={channel.iconStroke ? 'currentColor' : 'none'}
                  viewBox="0 0 24 24"
                >
                  {channel.icon}
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[15px] font-semibold text-white/90 mb-1 group-hover:text-white transition-colors">
                  {channel.label}
                </div>
                <div className="text-[13px] text-white/30 truncate group-hover:text-white/50 transition-colors">
                  {channel.username}
                </div>
              </div>
              {isLink && (
                <div className="contact-arrow">
                  <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              )}
            </div>
          ) : (
            /* Standard layout: icon top, content below */
            <>
              <div className="flex items-center justify-between mb-4">
                <div className="contact-icon" style={{ '--accent': channel.color }}>
                  <svg
                    className="w-5 h-5"
                    style={{ color: 'rgba(255,255,255,0.45)' }}
                    fill={channel.iconStroke ? 'none' : 'currentColor'}
                    stroke={channel.iconStroke ? 'currentColor' : 'none'}
                    viewBox="0 0 24 24"
                  >
                    {channel.icon}
                  </svg>
                </div>
                {isLink && (
                  <div className="contact-arrow">
                    <svg className="w-3.5 h-3.5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="text-[14px] font-semibold text-white/90 mb-0.5 group-hover:text-white transition-colors">
                {channel.label}
              </div>
              <div className="text-[12px] text-white/30 truncate group-hover:text-white/45 transition-colors">
                {channel.username}
              </div>
            </>
          )}
        </div>
      </Tag>
    </div>
  );
}

export default function Contact() {
  const { title, highlight, description, channels } = CONTACT_DATA;

  const headerRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  // Split channels: first 2 as featured (GitHub, LinkedIn), rest as standard
  const featuredChannels = channels.slice(0, 2);
  const standardChannels = channels.slice(2);

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/[0.02] blur-[150px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-white/[0.01] blur-[100px] pointer-events-none" />

      <div className="section-container">
        <div ref={headerRef} className="reveal">
          <SectionHeader title={title} highlight={highlight} description={description} />
        </div>

        {/* Bento Grid — unified so all gaps are identical */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {featuredChannels.map((channel, idx) => (
            <ChannelCard key={channel.label} channel={channel} index={idx} featured />
          ))}
          {standardChannels.map((channel, idx) => (
            <ChannelCard key={channel.label} channel={channel} index={idx + 2} />
          ))}
        </div>

        {/* Availability CTA */}
        <div ref={ctaRef} className="reveal mt-16 text-center hidden sm:block">
          <div className="contact-status-badge">
            <div className="contact-status-dot" />
            <span className="text-[13px] text-white/40 font-medium">Available for internship & collaboration</span>
          </div>
        </div>
      </div>
    </section>
  );
}
