// src/components/Projects.jsx
import React from "react";
import Tilt from "react-parallax-tilt";
import { FEATURED_PROJECTS } from "../constants/projects";

export default function Projects({ currentTheme }) {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
      <div className="flex flex-col items-center mb-12 text-center">
        <h2 className={`text-2xl sm:text-3xl font-bold ${currentTheme.accent}`}>Featured Engineering Projects</h2>
        <p className={`mt-2 text-sm ${currentTheme.textMuted} max-w-lg`}>
          Verified projects demonstrating software architecture, system design, and security engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {FEATURED_PROJECTS.map((proj) => (
          <Tilt
            key={proj.id}
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            scale={1.01}
            className={`rounded-2xl border ${currentTheme.cardBg} ${currentTheme.cardBorder} flex flex-col justify-between overflow-hidden shadow-lg`}
          >
            <article className="p-6 sm:p-7 flex flex-col justify-between h-full">
              <div>
                <span className="text-[11px] font-mono text-sky-400 uppercase tracking-wider block mb-1">
                  {proj.category}
                </span>
                <h3 className={`text-xl font-bold mb-3 ${currentTheme.pageText}`}>{proj.title}</h3>
                <p className={`text-sm ${currentTheme.textMuted} leading-relaxed mb-4`}>{proj.summary}</p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Key Engineering Features</h4>
                  <ul className={`space-y-1 text-xs ${currentTheme.textMuted}`}>
                    {proj.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-sky-400 font-bold mt-0.5">›</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Security Considerations */}
                <div className="p-3 rounded-lg bg-sky-950/20 border border-sky-900/40 text-xs mb-5">
                  <span className="font-semibold text-sky-400 block mb-0.5">🔒 Security Consideration:</span>
                  <span className={currentTheme.textMuted}>{proj.security}</span>
                </div>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {proj.tech.map((t) => (
                    <span key={t} className={`px-2.5 py-0.5 rounded text-[11px] font-mono border ${currentTheme.badge}`}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-700/30">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-xs font-semibold inline-flex items-center gap-1.5 ${currentTheme.accent} hover:underline`}
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    Source Code
                  </a>
                  {proj.demo && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-xs font-semibold inline-flex items-center gap-1.5 ${currentTheme.accent} hover:underline`}
                    >
                      Live Deployment ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
