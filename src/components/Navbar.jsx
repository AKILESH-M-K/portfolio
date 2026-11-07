// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { THEMES } from "../constants/themes";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Journey" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ currentTheme, theme, onThemeChange, activeSection, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className={`sticky top-0 z-40 w-full backdrop-blur-md border-b ${currentTheme.navBg} transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 group focus:outline-none"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-500 to-cyan-300 flex items-center justify-center font-bold text-slate-950 text-sm shadow-md">
            A
          </span>
          <div className="flex flex-col text-left">
            <span className="font-bold text-sm tracking-wide group-hover:text-sky-400 transition">Akilesh M K</span>
            <span className={`text-[10px] ${currentTheme.textMuted} tracking-wider uppercase font-mono`}>SDE • Cyber</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1 bg-black/10 rounded-full p-1 border border-white/5">
          {NAV_ITEMS.map(({ id, label }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                aria-current={isActive ? "page" : undefined}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition ${
                  isActive
                    ? `${currentTheme.accent} bg-white/10 shadow-sm font-semibold`
                    : `${currentTheme.textMuted} hover:text-white hover:bg-white/5`
                }`}
              >
                {label}
              </button>
            );
          })}
        </nav>

        {/* Controls: Theme Switcher & Mobile Menu Toggle */}
        <div className="flex items-center gap-2">
          {/* Theme Selector */}
          <div className="flex items-center gap-1 bg-black/20 p-1 rounded-full border border-white/10" role="group" aria-label="Theme selection">
            {Object.entries(THEMES).map(([key, val]) => (
              <button
                key={key}
                onClick={() => onThemeChange(key)}
                aria-pressed={theme === key}
                aria-label={`${val.name} theme`}
                title={`${val.name} theme`}
                className={`px-2 py-0.5 rounded-full text-[11px] font-medium transition ${
                  theme === key
                    ? "bg-sky-500 text-slate-950 font-bold shadow-sm"
                    : `${currentTheme.textMuted} hover:text-white`
                }`}
              >
                {val.name}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <nav aria-label="Mobile Navigation" className={`md:hidden px-4 py-4 border-b ${currentTheme.navBg} space-y-1`}>
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition ${
                activeSection === id ? `${currentTheme.accent} bg-white/10 font-bold` : `${currentTheme.textMuted} hover:bg-white/5`
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}

