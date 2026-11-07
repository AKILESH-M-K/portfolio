// src/portfolio.jsx
import React, { useEffect, useState, useCallback } from "react";
import { THEMES } from "./constants/themes";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

export default function Portfolio() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("portfolio_theme");
      if (saved && THEMES[saved]) return saved;
      if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
        return "light";
      }
    } catch {
      // Storage access blocked or unavailable
    }
    return "dark";
  });

  const [activeSection, setActiveSection] = useState("about");

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    try {
      localStorage.setItem("portfolio_theme", newTheme);
    } catch {
      // Storage unavailable
    }
  };

  useEffect(() => {
    const sections = ["about", "skills", "projects", "experience", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25, rootMargin: "-10% 0px -40% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const currentTheme = THEMES[theme] || THEMES.dark;

  return (
    <div className={`min-h-screen ${currentTheme.bg} ${currentTheme.pageText} font-sans transition-colors duration-300 relative selection:bg-sky-500 selection:text-white`}>
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-sky-500 focus:text-slate-950 focus:font-semibold focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Hardware-Accelerated Custom Cursor (Desktop Only) */}
      <CustomCursor currentTheme={currentTheme} />

      {/* Sticky Header & Accessible Navigation */}
      <Navbar
        currentTheme={currentTheme}
        theme={theme}
        onThemeChange={changeTheme}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Content Landmark */}
      <main id="main-content">
        <Hero currentTheme={currentTheme} onNavigate={scrollToSection} />
        <About currentTheme={currentTheme} />
        <Skills currentTheme={currentTheme} />
        <Projects currentTheme={currentTheme} />
        <Journey currentTheme={currentTheme} />
        <Contact currentTheme={currentTheme} />
      </main>

      {/* Scroll-To-Top Button */}
      <ScrollToTop />

      {/* Semantic Footer */}
      <Footer currentTheme={currentTheme} />
    </div>
  );
}
