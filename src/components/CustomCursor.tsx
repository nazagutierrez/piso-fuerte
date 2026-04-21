import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";

// Check once at module level — avoids re-evaluation on every render
const isTouchDevice =
  typeof window !== "undefined" &&
  window.matchMedia("(hover: none)").matches;

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  const tick = useCallback(() => {
    pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
    pos.current.y += (mouse.current.y - pos.current.y) * 0.15;

    // Direct style.transform avoids GSAP's internal layout reads (offsetWidth etc.)
    // which were causing the 540ms forced reflow reported by Lighthouse
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
    }

    rafId.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    // On touch devices the cursor is invisible via CSS, so skip all JS work entirely
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const hoverables = document.querySelectorAll("a, button");

    const enterHandlers: Array<() => void> = [];
    const leaveHandlers: Array<() => void> = [];

    hoverables.forEach((el, i) => {
      const onEnter = () => {
        gsap.to(cursor, {
          scale: 1.5,
          backgroundColor: "rgba(255, 215, 0, 0.15)",
          borderColor: "#FFD700",
          duration: 0.25,
          ease: "power3.out",
        });
      };
      const onLeave = () => {
        gsap.to(cursor, {
          scale: 1,
          backgroundColor: "transparent",
          borderColor: "#FFD700",
          duration: 0.25,
          ease: "power3.out",
        });
      };

      enterHandlers[i] = onEnter;
      leaveHandlers[i] = onLeave;
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    // Use native rAF instead of gsap.ticker to avoid GSAP overhead on every frame
    rafId.current = requestAnimationFrame(tick);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener("mousemove", handleMouseMove);
      hoverables.forEach((el, i) => {
        el.removeEventListener("mouseenter", enterHandlers[i]);
        el.removeEventListener("mouseleave", leaveHandlers[i]);
      });
    };
  }, [tick]);

  // Don't even render the DOM element on touch devices
  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999]
                 h-5 w-5 rounded-full border border-brand-yellow
                 pointer-events-none custom-cursor
                 -translate-x-1/2 -translate-y-1/2"
      style={{ willChange: "transform" }}
    />
  );
}
