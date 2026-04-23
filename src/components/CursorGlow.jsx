import { useEffect } from 'react';

/**
 * Creates a radial glow that follows the mouse cursor.
 */
export default function CursorGlow() {
  useEffect(() => {
    // Don't create cursor glow on mobile/tablet or touch devices
    const isMobile = window.innerWidth < 1024;
    const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isMobile || isTouchDevice) return;

    // Outer glow — large and soft
    const glow = document.createElement('div');
    glow.style.cssText = `
      position: fixed;
      width: 500px;
      height: 500px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 40%, transparent 70%);
      pointer-events: none;
      z-index: 1;
      transform: translate(-50%, -50%);
      transition: opacity 0.3s ease;
    `;
    document.body.appendChild(glow);

    // Inner glow — smaller and brighter
    const innerGlow = document.createElement('div');
    innerGlow.style.cssText = `
      position: fixed;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%);
      pointer-events: none;
      z-index: 1;
      transform: translate(-50%, -50%);
      transition: opacity 0.3s ease;
    `;
    document.body.appendChild(innerGlow);

    const handleMouseMove = (e) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
      innerGlow.style.left = `${e.clientX}px`;
      innerGlow.style.top = `${e.clientY}px`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      glow.remove();
      innerGlow.remove();
    };
  }, []);

  return null;
}
