import { useEffect, useRef } from 'react';

/**
 * Custom hook for scroll-triggered reveal animations.
 * @param {string} animationClass - CSS class to add when element is visible (default: 'revealed')
 * @param {object} options - IntersectionObserver options
 */
export function useScrollReveal(animationClass = 'revealed', options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [animationClass, options]);

  return ref;
}

/**
 * Custom hook that observes multiple children of a container for reveal.
 * @param {string} selector - CSS selector for children to observe
 * @param {string} animationClass - CSS class to add when visible
 */
export function useScrollRevealChildren(selector, animationClass = 'revealed') {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = container.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    children.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, [selector, animationClass]);

  return containerRef;
}
