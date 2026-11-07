// src/components/CustomCursor.jsx
import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor({ currentTheme }) {
  const [activeCursor, setActiveCursor] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const moveCursor = (e) => {
      if (cursorRef.current) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(() => {
          if (cursorRef.current) {
            cursorRef.current.style.transform = `translate3d(${e.clientX - 10}px, ${e.clientY - 10}px, 0)`;
          }
        });
      }
    };

    const handleMouseOver = (e) => {
      if (e.target && e.target.closest && e.target.closest("a, button, input, textarea, select")) {
        setActiveCursor(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target && e.target.closest && e.target.closest("a, button, input, textarea, select")) {
        setActiveCursor(false);
      }
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mouseout", handleMouseOut, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className={`fixed top-0 left-0 z-50 pointer-events-none transform-gpu hidden md:block transition-all duration-100 ease-out ${
        activeCursor ? "scale-150 opacity-90" : "scale-100 opacity-75"
      }`}
      style={{ transform: "translate3d(-100px, -100px, 0)" }}
    >
      <div className={`w-5 h-5 border-2 rounded-full ${currentTheme.cursorBorder} mix-blend-screen shadow-sm`}></div>
    </div>
  );
}
