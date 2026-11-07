// src/components/Journey.jsx
import React from "react";

export default function Journey({ currentTheme }) {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
      <div className="flex flex-col items-center mb-12 text-center">
        <h2 className={`text-2xl sm:text-3xl font-bold ${currentTheme.accent}`}>Education & Academic Journey</h2>
        <p className={`mt-2 text-sm ${currentTheme.textMuted} max-w-lg`}>
          Academic milestones, hands-on software development labs, and ethical security practice.
        </p>
      </div>

      <div className="relative border-l-2 border-slate-700/60 pl-6 sm:pl-8 space-y-10 ml-4 sm:ml-8">
        {/* Timeline Item 1 */}
        <div className="relative group">
          <div className="w-4 h-4 rounded-full bg-sky-400 absolute -left-[31px] sm:-left-[39px] top-1 border-4 border-slate-950 shadow-sm"></div>
          <div>
            <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">2025 – Present · Undergraduate</span>
            <h3 className={`text-lg font-bold ${currentTheme.pageText} mt-0.5`}>
              B.E. Computer Science and Engineering (Cybersecurity)
            </h3>
            <p className="text-xs text-slate-400 font-medium">Sri Shakthi Institute of Engineering and Technology</p>
            <p className={`mt-2 text-sm ${currentTheme.textMuted} leading-relaxed`}>
              Mastering core computer science disciplines including Data Structures & Algorithms, Object-Oriented Software Design, Operating Systems, Computer Networking, and Cryptographic Protocols.
            </p>
          </div>
        </div>

        {/* Timeline Item 2 */}
        <div className="relative group">
          <div className="w-4 h-4 rounded-full bg-emerald-400 absolute -left-[31px] sm:-left-[39px] top-1 border-4 border-slate-950 shadow-sm"></div>
          <div>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Engineering Labs & Full-Stack Systems</span>
            <h3 className={`text-lg font-bold ${currentTheme.pageText} mt-0.5`}>
              Software Development & Full-Stack Projects
            </h3>
            <p className={`mt-2 text-sm ${currentTheme.textMuted} leading-relaxed`}>
              Architected and deployed responsive React applications, built RESTful backends, designed database schemas, and practiced version-controlled collaborative development with Git.
            </p>
          </div>
        </div>

        {/* Timeline Item 3 */}
        <div className="relative group">
          <div className="w-4 h-4 rounded-full bg-purple-400 absolute -left-[31px] sm:-left-[39px] top-1 border-4 border-slate-950 shadow-sm"></div>
          <div>
            <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">Defensive Security & Threat Hunting</span>
            <h3 className={`text-lg font-bold ${currentTheme.pageText} mt-0.5`}>
              Endpoint Detection & Hands-On CTF Labs
            </h3>
            <p className={`mt-2 text-sm ${currentTheme.textMuted} leading-relaxed`}>
              Deployed Wazuh SIEM and Sysmon for endpoint behavior auditing. Regularly analyzing web vulnerabilities (OWASP Top 10), writing defensive rules, and solving CTF challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
