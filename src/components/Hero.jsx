// src/components/Hero.jsx
import React from "react";

const TECH_BADGES = [
  "React",
  "JavaScript (ES6+)",
  "Node.js",
  "Python",
  "Tailwind CSS",
  "Linux",
  "Wazuh / Sysmon",
];

export default function Hero({ currentTheme, onNavigate }) {
  return (
    <section id="top" className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center px-4 sm:px-6 py-16">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider mb-6 bg-sky-500/10 border border-sky-500/20 text-sky-400">
        <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping"></span>
        Software Development Engineer • Cybersecurity Enthusiast
      </div>

      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent animate-typewriter">
          Akilesh M K
        </span>
      </h1>

      <p className={`mt-6 max-w-2xl text-base sm:text-lg ${currentTheme.textMuted} leading-relaxed`}>
        B.E. Computer Science & Engineering (Cybersecurity) student at Sri Shakthi Institute of Engineering and Technology.
        Passionate about building scalable full-stack applications, designing robust systems, and applying ethical defensive security principles to modern software engineering.
      </p>

      {/* Action CTAs */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => onNavigate("projects")}
          className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition shadow-md hover:scale-[1.02] ${currentTheme.buttonPrimary}`}
        >
          Explore Projects
        </button>
        <button
          onClick={() => onNavigate("contact")}
          className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition ${currentTheme.buttonSecondary}`}
        >
          Get In Touch
        </button>
        <a
          href="https://github.com/AKILESH-M-K"
          target="_blank"
          rel="noopener noreferrer"
          className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition flex items-center gap-2 ${currentTheme.buttonSecondary}`}
          aria-label="GitHub Profile (opens in new tab)"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          GitHub
        </a>
      </div>

      {/* Quick Technical Badges */}
      <div className="mt-12 flex flex-wrap justify-center gap-2 max-w-xl">
        {TECH_BADGES.map((badge) => (
          <span
            key={badge}
            className={`px-3 py-1 rounded-full text-xs font-mono font-medium border ${currentTheme.badge}`}
          >
            {badge}
          </span>
        ))}
      </div>
    </section>
  );
}
