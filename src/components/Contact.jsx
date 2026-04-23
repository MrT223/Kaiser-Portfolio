import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './SectionHeader';
import { CONTACT_DATA } from '../data/portfolio';

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); e.target.reset(); }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="card-base p-6 space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-[12px] text-white/40 mb-1.5">Full Name</label>
          <input type="text" id="name" placeholder="John Doe" className="w-full px-4 py-2.5 text-[14px]" />
        </div>
        <div>
          <label htmlFor="email" className="block text-[12px] text-white/40 mb-1.5">Email</label>
          <input type="email" id="email" placeholder="email@example.com" className="w-full px-4 py-2.5 text-[14px]" />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-[12px] text-white/40 mb-1.5">Subject</label>
        <input type="text" id="subject" placeholder="Project Inquiry / Collaboration" className="w-full px-4 py-2.5 text-[14px]" />
      </div>
      <div>
        <label htmlFor="message" className="block text-[12px] text-white/40 mb-1.5">Message</label>
        <textarea id="message" rows={4} placeholder="Your message here..." className="w-full px-4 py-2.5 text-[14px] resize-none" />
      </div>
      <button
        type="submit"
        className={`w-full py-3 rounded-xl font-semibold text-[14px] transition-all duration-300 cursor-pointer ${
          submitted ? 'bg-emerald-500 text-white' : 'bg-white text-black hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]'
        }`}
      >
        {submitted ? 'Sent Successfully! ✓' : 'Send Message'}
      </button>
    </form>
  );
}

export default function Contact() {
  const { title, highlight, description, info, socials } = CONTACT_DATA;

  const headerRef = useScrollReveal();
  const infoRef = useScrollReveal();
  const formRef = useScrollReveal();

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-white/[0.015] blur-[120px] pointer-events-none" />

      <div className="section-container">
        <div ref={headerRef} className="reveal">
          <SectionHeader title={title} highlight={highlight} description={description} />

        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Info */}
          <div ref={infoRef} className="reveal-left">
            <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
            <p className="text-[14px] text-white/35 leading-relaxed mb-6">
              Feel free to reach out through any of these channels.
            </p>

            <div className="flex flex-col gap-3 mb-6">
              {info.map((item) => {
                const Tag = item.href ? 'a' : 'div';
                return (
                  <Tag
                    key={item.label}
                    {...(item.href ? { href: item.href } : {})}
                    className="group flex items-center gap-3 p-3.5 rounded-xl card-base"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:border-white/20 transition-all">
                      <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">{item.icon}</svg>
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] text-white/40">{item.label}</div>
                      <div className="text-[14px] font-medium truncate">{item.value}</div>
                    </div>
                  </Tag>
                );
              })}
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a key={s.label} href="#" className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center hover:border-white/25 hover:bg-white/5 transition-all duration-300" aria-label={s.label}>
                  <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24">{s.icon}</svg>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div ref={formRef} className="reveal-right">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

