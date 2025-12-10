/**
 * GSAP Animation utilities for Music Society website
 * Provides reusable animation functions with reduced motion support
 */

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/**
 * Animate text with character-by-character fade-in effect
 * Used for hero title "Resonance Music Society"
 */
export const animateHeroText = (element: HTMLElement | null) => {
  if (!element || prefersReducedMotion()) return;

  const text = element.textContent || "";
  element.textContent = "";

  const characters = text.split("");
  characters.forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.style.opacity = "0";
    span.style.display = "inline-block";
    element.appendChild(span);

    // Staggered animation
    setTimeout(() => {
      span.style.transition = "opacity 0.5s ease-out";
      span.style.opacity = "1";
    }, index * 50);
  });
};

/**
 * Animate hero subtitle with fade-up effect
 */
export const animateSlideUp = (
  element: HTMLElement | null,
  delay: number = 0
) => {
  if (!element || prefersReducedMotion()) {
    element?.style.setProperty("opacity", "1");
    return;
  }

  element!.style.opacity = "0";
  element!.style.transform = "translateY(30px)";

  setTimeout(() => {
    element!.style.transition = "all 0.6s ease-out";
    element!.style.opacity = "1";
    element!.style.transform = "translateY(0)";
  }, delay);
};

/**
 * Animate elements on scroll
 */
export const observeScrollAnimation = (element: HTMLElement | null) => {
  if (!element || prefersReducedMotion()) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-up");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(element);
  return observer;
};

/**
 * Add hover glow effect to buttons
 */
export const addHoverGlow = (element: HTMLElement | null) => {
  if (!element) return;

  element.addEventListener("mouseenter", () => {
    element.style.boxShadow = "0 0 30px rgba(255, 28, 139, 0.6)";
  });

  element.addEventListener("mouseleave", () => {
    element.style.boxShadow = "0 0 0px rgba(255, 28, 139, 0)";
  });
};

/**
 * Parallax scroll effect (subtle)
 */
export const addParallaxEffect = (
  element: HTMLElement | null,
  speed: number = 0.5
) => {
  if (!element || prefersReducedMotion()) return;

  const handleScroll = () => {
    const scrollY = window.scrollY;
    element!.style.transform = `translateY(${scrollY * speed}px)`;
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
};
