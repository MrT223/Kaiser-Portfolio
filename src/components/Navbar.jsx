import { useState, useEffect, useRef, useCallback } from 'react';
import { NAV_LINKS } from '../data/portfolio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  // Music player state
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const prevVolumeRef = useRef(50);
  const hasInteracted = useRef(false);

  // Initialize audio element
  useEffect(() => {
    const audio = new Audio(`${import.meta.env.BASE_URL}bg-music.mp3`);
    audio.loop = true;
    audio.volume = 0.5;
    audio.preload = 'auto';
    audioRef.current = audio;

    // Try to autoplay
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          hasInteracted.current = true;
        })
        .catch(() => {
          // Autoplay blocked — wait for user interaction
          const tryPlay = () => {
            if (hasInteracted.current) return;
            hasInteracted.current = true;
            audio.play().then(() => setIsPlaying(true)).catch(() => {});
            // Clean up all listeners
            ['click', 'scroll', 'touchstart', 'keydown'].forEach(evt =>
              document.removeEventListener(evt, tryPlay)
            );
          };
          ['click', 'scroll', 'touchstart', 'keydown'].forEach(evt =>
            document.addEventListener(evt, tryPlay, { passive: true })
          );
        });
    }

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  // Sync volume
  useEffect(() => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.volume = 0;
    } else {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, isMuted]);

  const handleVolumeChange = useCallback((e) => {
    const newVolume = parseInt(e.target.value, 10);
    setVolume(newVolume);
    if (newVolume > 0 && isMuted) setIsMuted(false);
    if (newVolume === 0) setIsMuted(true);
  }, [isMuted]);

  const toggleMute = useCallback(() => {
    if (!audioRef.current) return;

    // If not playing yet, start playing
    if (!isPlaying) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      return;
    }

    if (isMuted) {
      setIsMuted(false);
      setVolume(prevVolumeRef.current || 50);
    } else {
      prevVolumeRef.current = volume;
      setIsMuted(true);
      setVolume(0);
    }
  }, [isMuted, volume, isPlaying]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const getVolumeIcon = () => {
    if (!isPlaying || isMuted || volume === 0) {
      return (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
        </>
      );
    }
    if (volume < 50) {
      return (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072" />
        </>
      );
    }
    return (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728" />
      </>
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/[0.06] shadow-[0_1px_20px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" onClick={(e) => scrollTo(e, '#hero')} className="group flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-md border border-white/15 flex items-center justify-center group-hover:border-white/40 transition-all duration-300">
              <span className="font-mono font-bold text-sm">&lt;/&gt;</span>
            </div>
            <span className="font-semibold text-sm tracking-tight hidden sm:block">DevPortfolio</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className={`nav-link text-[13px] font-medium transition-colors duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'active text-white'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Volume Control */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleMute}
              className={`transition-colors duration-300 ${
                isPlaying && !isMuted ? 'text-white/60 hover:text-white' : 'text-white/30 hover:text-white/60'
              }`}
              aria-label={isMuted ? 'Unmute' : 'Mute'}
              title={!isPlaying ? 'Click to play music' : isMuted ? 'Unmute' : 'Mute'}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {getVolumeIcon()}
              </svg>
            </button>
            <input
              type="range"
              min="0"
              max="100"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="volume-slider w-20 h-1 rounded-full appearance-none cursor-pointer"
              aria-label="Volume"
            />
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={toggleMute}
              className={`p-2 rounded-lg transition-colors ${
                isPlaying && !isMuted ? 'text-white/60' : 'text-white/30'
              }`}
              aria-label={!isPlaying ? 'Play music' : isMuted ? 'Unmute' : 'Mute'}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {getVolumeIcon()}
              </svg>
            </button>

            <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 rounded-lg hover:bg-white/10 transition-colors" aria-label="Menu">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen
            ? 'max-h-60 opacity-100 bg-[#0a0a0a]/95 backdrop-blur-md border-t border-white/[0.06]'
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="section-container py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="block py-2.5 px-3 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/5 transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
