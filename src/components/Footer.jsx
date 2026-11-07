// src/components/Footer.jsx
import React from "react";

export default function Footer({ currentTheme }) {
  return (
    <footer className={`border-t ${currentTheme.navBg} py-8 text-center text-xs ${currentTheme.textMuted}`}>
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Akilesh M K · Built with React & Tailwind CSS.</p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/AKILESH-M-K"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition"
          >
            GitHub
          </a>
          <a
            href="mailto:akileshmk54@gmail.com"
            className="hover:text-sky-400 transition"
          >
            Email
          </a>
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="hover:text-sky-400 transition"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
