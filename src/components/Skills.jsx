// src/components/Skills.jsx
import React from "react";
import Tilt from "react-parallax-tilt";

export default function Skills({ currentTheme }) {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
      <div className="flex flex-col items-center mb-12 text-center">
        <h2 className={`text-2xl sm:text-3xl font-bold ${currentTheme.accent}`}>Technical Proficiencies</h2>
        <p className={`mt-2 text-sm ${currentTheme.textMuted} max-w-md`}>
          Solid computer science foundations combined with practical full-stack and security tooling.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* SDE & Web Development Card */}
        <Tilt
          glareEnable={true}
          glareColor="#38bdf8"
          glareBorderRadius="1rem"
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          className={`rounded-2xl border ${currentTheme.cardBg} ${currentTheme.cardBorder}`}
        >
          <div className="p-6 h-full flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-4 font-bold">
                &lt;/&gt;
              </div>
              <h3 className={`text-lg font-bold mb-3 ${currentTheme.pageText}`}>Frontend & Web Engineering</h3>
              <ul className={`space-y-2 text-xs sm:text-sm ${currentTheme.textMuted}`}>
                <li>• React & Component Architecture</li>
                <li>• JavaScript (ES6+) & DOM APIs</li>
                <li>• Tailwind CSS & Responsive Layouts</li>
                <li>• State Management & React Hooks</li>
                <li>• WCAG 2.2 AA Accessibility & SEO</li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700/30">
              <span className="text-[11px] font-mono text-sky-400">Primary SDE Competency</span>
            </div>
          </div>
        </Tilt>

        {/* Backend & Systems Card */}
        <Tilt
          glareEnable={true}
          glareColor="#22c55e"
          glareBorderRadius="1rem"
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          className={`rounded-2xl border ${currentTheme.cardBg} ${currentTheme.cardBorder}`}
        >
          <div className="p-6 h-full flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 font-bold">
                ⚙
              </div>
              <h3 className={`text-lg font-bold mb-3 ${currentTheme.pageText}`}>Backend & Core Programming</h3>
              <ul className={`space-y-2 text-xs sm:text-sm ${currentTheme.textMuted}`}>
                <li>• Python (Automation, Scripting)</li>
                <li>• Node.js & RESTful API Contracts</li>
                <li>• C / C++ (Data Structures & Algorithms)</li>
                <li>• Relational & Document Data Models</li>
                <li>• Git & GitHub Version Control</li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700/30">
              <span className="text-[11px] font-mono text-emerald-400">System Engineering</span>
            </div>
          </div>
        </Tilt>

        {/* Cybersecurity & Defensive Systems */}
        <Tilt
          glareEnable={true}
          glareColor="#a855f7"
          glareBorderRadius="1rem"
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          className={`rounded-2xl border ${currentTheme.cardBg} ${currentTheme.cardBorder}`}
        >
          <div className="p-6 h-full flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4 font-bold">
                🛡
              </div>
              <h3 className={`text-lg font-bold mb-3 ${currentTheme.pageText}`}>Cybersecurity & Defense</h3>
              <ul className={`space-y-2 text-xs sm:text-sm ${currentTheme.textMuted}`}>
                <li>• OWASP Top 10 Mitigation</li>
                <li>• Wazuh SIEM/EDR & Sysmon Telemetry</li>
                <li>• Linux System Administration & Bash</li>
                <li>• MITRE ATT&CK Behavioral Mapping</li>
                <li>• Network Protocols (TCP/IP, DNS, TLS)</li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700/30">
              <span className="text-[11px] font-mono text-purple-400">Secondary Specialization</span>
            </div>
          </div>
        </Tilt>
      </div>
    </section>
  );
}
