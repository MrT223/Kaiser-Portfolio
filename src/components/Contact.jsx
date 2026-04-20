import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './SectionHeader';

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    icon: <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />,
  },
  {
    label: 'LinkedIn',
    icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />,
  },
  {
    label: 'Twitter',
    icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />,
  },
  {
    label: 'Facebook',
    icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />,
  },
];

const CONTACT_INFO = [
  {
    label: 'Email',
    value: 'hello@example.com',
    href: 'mailto:hello@example.com',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
  },
  {
    label: 'Điện thoại',
    value: '+84 123 456 789',
    href: 'tel:+84123456789',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
  },
  {
    label: 'Vị trí',
    value: 'TP. Hồ Chí Minh, Việt Nam',
    href: null,
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </>
    ),
  },
];

function ContactInfoItem({ item }) {
  const Wrapper = item.href ? 'a' : 'div';
  const props = item.href ? { href: item.href } : {};

  return (
    <Wrapper
      {...props}
      className={`group flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] transition-all duration-300 ${
        item.href ? 'hover:border-white/20 hover:bg-white/[0.05]' : ''
      }`}
    >
      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300">
        <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {item.icon}
        </svg>
      </div>
      <div>
        <div className="text-sm text-white/50">{item.label}</div>
        <div className="text-sm font-medium">{item.value}</div>
      </div>
    </Wrapper>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      e.target.reset();
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm text-white/50 mb-2">Họ và tên</label>
          <input
            type="text"
            id="name"
            placeholder="Nguyễn Văn B"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 focus:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-white/50 mb-2">Email</label>
          <input
            type="email"
            id="email"
            placeholder="email@example.com"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 focus:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm text-white/50 mb-2">Chủ đề</label>
        <input
          type="text"
          id="subject"
          placeholder="Tôi muốn hợp tác..."
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 focus:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-white/50 mb-2">Nội dung</label>
        <textarea
          id="message"
          rows={5}
          placeholder="Nội dung tin nhắn..."
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 focus:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300 resize-none"
        />
      </div>

      <button
        type="submit"
        className={`group relative w-full py-3.5 rounded-xl font-semibold text-sm overflow-hidden transition-all duration-300 ${
          submitted
            ? 'bg-emerald-500 text-white'
            : 'bg-white text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]'
        }`}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {submitted ? 'Đã gửi! ✓' : (
            <>
              Gửi tin nhắn
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </>
          )}
        </span>
        {!submitted && (
          <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </button>
    </form>
  );
}

export default function Contact() {
  const headerRef = useScrollReveal();
  const infoRef = useScrollReveal();
  const formRef = useScrollReveal();

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/[0.015] blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={headerRef} className="reveal">
          <SectionHeader
            badge="Liên hệ"
            title="Hãy"
            highlight="kết nối với tôi"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luôn sẵn sàng cho những cơ hội hợp tác mới."
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div ref={infoRef} className="reveal-left space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Thông tin liên hệ</h3>
              <p className="text-white/40 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hãy liên hệ qua bất kỳ kênh nào bên dưới.
              </p>
            </div>

            <div className="space-y-6">
              {CONTACT_INFO.map((item) => (
                <ContactInfoItem key={item.label} item={item} />
              ))}
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 pt-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-white/40 hover:bg-white/5 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300"
                  aria-label={social.label}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    {social.icon}
                  </svg>
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
