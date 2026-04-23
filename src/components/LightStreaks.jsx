import { useEffect, useRef } from 'react';

/**
 * Background light streaks and floating particles component.
 * Creates an ambient animated background with white light trails.
 */
export default function LightStreaks() {
  const particlesRef = useRef(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    // Generate floating particles — fewer on mobile for performance
    const isMobile = window.innerWidth <= 768;
    const particleCount = isMobile ? 10 : 30;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      const size = 1 + Math.random() * 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${80 + Math.random() * 20}vh`;
      particle.style.opacity = Math.random() * 0.5 + 0.1;
      particle.style.animation = `particle-float ${10 + Math.random() * 20}s linear infinite`;
      particle.style.animationDelay = `${Math.random() * 10}s`;
      container.appendChild(particle);
    }

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return (
    <>
      {/* Light Streaks */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Horizontal streaks */}
        <div className="light-streak light-streak-h animate-streak-h" style={{ top: '15%' }} />
        <div className="light-streak light-streak-h animate-streak-h" style={{ top: '35%', animationDelay: '3s', width: '300px' }} />
        <div className="light-streak light-streak-h animate-streak-h-reverse" style={{ top: '55%', animationDelay: '1s', width: '150px' }} />
        <div className="light-streak light-streak-h animate-streak-h" style={{ top: '75%', animationDelay: '5s', width: '250px' }} />
        <div className="light-streak light-streak-h animate-streak-h-reverse" style={{ top: '90%', animationDelay: '2s' }} />

        {/* Vertical streaks */}
        <div className="light-streak light-streak-v animate-streak-v" style={{ left: '10%', animationDelay: '1s' }} />
        <div className="light-streak light-streak-v animate-streak-v" style={{ left: '30%', animationDelay: '4s', height: '300px' }} />
        <div className="light-streak light-streak-v animate-streak-v" style={{ left: '60%', animationDelay: '2s', height: '150px' }} />
        <div className="light-streak light-streak-v animate-streak-v" style={{ left: '85%', animationDelay: '6s' }} />

        {/* Diagonal streaks */}
        <div
          className="light-streak light-streak-diag animate-streak-diag"
          style={{ top: '20%', left: 0, transform: 'rotate(35deg)' }}
        />
        <div
          className="light-streak light-streak-diag animate-streak-diag"
          style={{ top: '60%', left: 0, transform: 'rotate(25deg)', animationDelay: '4s', width: '200px' }}
        />
      </div>

      {/* Floating particles container */}
      <div ref={particlesRef} className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true" />
    </>
  );
}
