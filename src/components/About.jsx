// src/components/About.jsx
import React from "react";

export default function About({ currentTheme }) {
  return (
    <section id="about" className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
      <div className={`p-8 sm:p-10 rounded-2xl border ${currentTheme.cardBg} ${currentTheme.cardBorder} shadow-lg`}>
        <div className="flex items-center gap-3 mb-6">
          <span className="w-3 h-3 rounded-full bg-sky-400"></span>
          <h2 className={`text-2xl sm:text-3xl font-bold ${currentTheme.accent}`}>About Me</h2>
        </div>

        <div className={`space-y-4 text-sm sm:text-base ${currentTheme.textMuted} leading-relaxed`}>
          <p>
            I am a Computer Science and Engineering undergraduate specializing in Cybersecurity at{" "}
            <strong className={currentTheme.pageText}>Sri Shakthi Institute of Engineering and Technology</strong> (Coimbatore).
            My core career objective is to work as a <strong className={currentTheme.pageText}>Software Development Engineer (SDE)</strong>,
            architecting scalable, performant, and reliable software systems.
          </p>
          <p>
            Complementing my software engineering mindset is a disciplined interest in <strong className={currentTheme.pageText}>Application & Systems Security</strong>.
            I approach software architecture through both developer and adversary lenses: writing clean, modular code while actively anticipating injection vulnerabilities, privilege flaws, and state manipulation risks.
          </p>
          <p>
            When not coding or debugging, I participate in defensive Capture-The-Flag (CTF) challenges, analyze real-world telemetry using SIEM/EDR platforms, and experiment with modern frontend/backend frameworks.
          </p>
        </div>

        {/* Academic Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-700/40">
          <div className="text-left">
            <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">Degree</span>
            <p className={`font-semibold text-sm ${currentTheme.pageText} mt-1`}>B.E. CSE (Cybersecurity)</p>
            <p className={`text-xs ${currentTheme.textMuted}`}>2024 – Present</p>
          </div>
          <div className="text-left">
            <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">Institution</span>
            <p className={`font-semibold text-sm ${currentTheme.pageText} mt-1`}>Sri Shakthi Institute</p>
            <p className={`text-xs ${currentTheme.textMuted}`}>Coimbatore, India</p>
          </div>
          <div className="text-left">
            <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">Core Focus</span>
            <p className={`font-semibold text-sm ${currentTheme.pageText} mt-1`}>Software Engineering & Security</p>
            <p className={`text-xs ${currentTheme.textMuted}`}>Full-Stack, DS & Algo, Defense</p>
          </div>
        </div>
      </div>
    </section>
  );
}
