// src/components/ScrollToTop.jsx
import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 350);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!showTop) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll back to top of page"
      className="fixed bottom-6 right-6 z-40 bg-slate-900/90 border border-sky-400 text-sky-200 rounded-full w-11 h-11 flex items-center justify-center shadow-xl hover:-translate-y-1 transition focus:outline-none focus:ring-2 focus:ring-sky-400"
    >
      ↑
    </button>
  );
}
