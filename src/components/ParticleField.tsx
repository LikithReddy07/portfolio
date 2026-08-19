import { useEffect, useRef } from "react";

/**
 * Interactive particle constellation background.
 * - Particles drift slowly and connect when near each other
 * - Responds to mouse proximity (particles gently repel)
 * - Scroll position shifts the field vertically for parallax
 * - Warm gold tone, very subtle — atmosphere, not distraction
 */
export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctxRaw = canvas.getContext("2d");
    if (!ctxRaw) return;
    const ctx = ctxRaw;
    const cvs = canvas; // Non-null reference for closures

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let animationId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let mouse = { x: -1000, y: -1000 };
    let scrollY = 0;

    // Particle count scales with screen size — tuned for visibility on all devices
    const isMobile = width < 768;
    const particleCount = isMobile
      ? Math.max(60, Math.floor((width * height) / 8000))
      : Math.min(Math.floor((width * height) / 8000), 180);
    const connectionDistance = isMobile ? 120 : 150;
    const mouseRadius = isMobile ? 80 : 120;

    // Particle class
    interface Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }

    const particles: Particle[] = [];

    function createParticles() {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        particles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: isMobile ? Math.random() * 2 + 0.8 : Math.random() * 1.5 + 0.5,
          opacity: isMobile ? Math.random() * 0.5 + 0.15 : Math.random() * 0.4 + 0.1,
        });
      }
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      cvs.width = width;
      cvs.height = height;
      createParticles();
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      const scrollOffset = scrollY * 0.15;

      // Update & draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Drift movement
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Mouse repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouseRadius && dist > 0) {
          const force = (mouseRadius - dist) / mouseRadius;
          p.x += (dx / dist) * force * 2;
          p.y += (dy / dist) * force * 2;
        }

        // Draw particle with scroll-adjusted Y
        const drawY = ((p.y - scrollOffset) % (height + 20) + height + 20) % (height + 20);
        ctx.beginPath();
        ctx.arc(p.x, drawY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232, 197, 116, ${p.opacity})`;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const drawY2 = ((p2.y - scrollOffset) % (height + 20) + height + 20) % (height + 20);
          const cdx = p.x - p2.x;
          const cdy = drawY - drawY2;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

          if (cdist < connectionDistance) {
            const lineOpacity = (1 - cdist / connectionDistance) * (isMobile ? 0.18 : 0.12);
            ctx.beginPath();
            ctx.moveTo(p.x, drawY);
            ctx.lineTo(p2.x, drawY2);
            ctx.strokeStyle = `rgba(232, 197, 116, ${lineOpacity})`;
            ctx.lineWidth = isMobile ? 0.7 : 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    }

    // Event handlers
    function handleMouse(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function handleMouseLeave() {
      mouse.x = -1000;
      mouse.y = -1000;
    }

    function handleScroll() {
      scrollY = window.scrollY;
    }

    // Touch — disable mouse interaction on mobile
    function handleTouch(e: TouchEvent) {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    }

    function handleTouchEnd() {
      mouse.x = -1000;
      mouse.y = -1000;
    }

    // Init
    resize();
    animate();

    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("mousemove", handleMouse, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("touchmove", handleTouch, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleTouch);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-20 pointer-events-none"
      aria-hidden="true"
    />
  );
}
