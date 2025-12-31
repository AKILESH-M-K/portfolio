// src/Portfolio.jsx
import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";

const THEMES = {
  dark: {
    name: "Dark",
    bg: "from-slate-950 via-slate-900 to-slate-950",
    accent: "text-sky-400",
    button: "from-sky-400 to-cyan-300",
  },
  cyber: {
    name: "Cyber",
    bg: "from-black via-green-950 to-black",
    accent: "text-green-400",
    button: "from-green-400 to-lime-300",
  },
  purple: {
    name: "Purple",
    bg: "from-purple-950 via-violet-900 to-purple-950",
    accent: "text-pink-400",
    button: "from-pink-400 to-purple-400",
  },
  light: {
    name: "Light",
    bg: "from-white via-slate-100 to-white",
    accent: "text-blue-600",
    button: "from-blue-500 to-sky-400",
  },
};

export default function Portfolio() {
  const [pos, setPos] = useState({ x: 0, y: 0 });      // custom cursor position
  const [active, setActive] = useState(false);         // cursor grows when hovering links/buttons
  const [theme, setTheme] = useState("dark");          // current theme
  const [showTop, setShowTop] = useState(false);       // scroll-to-top button

  useEffect(() => {
    // track mouse position
    const move = (e) =>  setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);

    // highlight cursor when hovering interactive elements
    const add = () => setActive(true);
    const remove = () => setActive(false);
    const focusableEls = document.querySelectorAll("a, button, input, textarea");
    focusableEls.forEach((el) => {
      el.addEventListener("mouseenter", add);
      el.addEventListener("mouseleave", remove);
    });

    // show scroll-to-top button after some scrolling
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);

    // cleanup
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("scroll", onScroll);
      focusableEls.forEach((el) => {
        el.removeEventListener("mouseenter", add);
        el.removeEventListener("mouseleave", remove);
      });
    };
  }, []);

  const current = THEMES[theme];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${current.bg} ${
        theme === "light" ? "text-slate-900" : "text-slate-200"
      } font-sans cursor-none transition-colors duration-500`}
    >
      {/* Custom Cursor */}
      <div
        className={`fixed top-0 left-0 z-50 pointer-events-none transform-gpu transition-transform duration-100 ${
          active ? "scale-150" : "scale-100"
        }`}
        style={{ transform: `translate(${pos.x - 10}px, ${pos.y - 10}px)` }}
      >
        <div
          className={`w-5 h-5 border-2 rounded-full mix-blend-screen ${
            theme === "light" ? "border-blue-500" : "border-sky-400"
          }`}
        ></div>
      </div>

      {/* Theme Switcher */}
      <div className="fixed top-4 right-4 z-40 flex gap-2 bg-black/40 backdrop-blur rounded-full px-4 py-2 text-xs">
        {Object.entries(THEMES).map(([key, value]) => (
          <button
            key={key}
            onClick={() => setTheme(key)}
            className={`px-3 py-1 rounded-full border transition text-xs ${
              theme === key
                ? "border-sky-400 text-sky-300"
                : "border-slate-600 text-slate-300 hover:border-sky-400"
            }`}
          >
            {value.name}
          </button>
        ))}
      </div>

      {/* Scroll to top button */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 bg-slate-900/80 border border-sky-400 text-sky-200 rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:translate-y-[-2px] transition"
        >
          ↑
        </button>
      )}

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <p className="uppercase tracking-[0.25em] text-xs text-slate-400">
          Cybersecurity • Web Development • Learning
        </p>
        <div className="inline-block">
        <h1
          className="mt-4 text-4xl md:text-6xl font-bold bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent animate-typewriter
                     transform-gpu transition-transform duration-500
                     hover:[transform:perspective(900px)_rotateX(8deg)_rotateY(-8deg)]">
          Akilesh M K <span className="ml-2 animate-pulse"></span>
        </h1></div>
        <p className="mt-4 max-w-xl text-sm md:text-base text-slate-400">
          B.E. CSE (Cybersecurity) student who loves building secure, aesthetic web experiences,
          experimenting with new tech, and breaking things ethically.
        </p>

        {/* Tech badges */}
        <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs">
          {["React", "Tailwind", "Firebase", "Linux", "OWASP Top 10"].map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full bg-slate-900/60 border border-slate-700 text-slate-200"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex gap-4 mt-10 text-sm">
          {["about", "skills", "experience", "projects", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="px-4 py-1 rounded-full border border-transparent hover:border-sky-400 hover:bg-slate-900/60 transition"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>
      </header>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-slate-900/70 backdrop-blur rounded-2xl p-8 shadow-xl border border-slate-800">
          <h2 className={`text-2xl font-semibold mb-4 ${current.accent}`}>About Me</h2>
          <p className="text-sm md:text-base leading-relaxed text-slate-300">
            I am a Computer Science Engineering student specializing in Cybersecurity at
            <span className="font-semibold"> Sri Shakthi College</span>. I focus on secure coding,
            understanding attacker mindset, and building modern web interfaces that are both
            functional and safe.
          </p>
          <p className="mt-4 text-sm md:text-base text-slate-300">
            Outside coursework I practice CTF-style challenges, experiment with frontend frameworks,
            and study real-world breaches to understand exactly what went wrong technically.
          </p>
        </div>
      </section>

      {/* Skills with 3D cards */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className={`text-2xl font-semibold mb-8 ${current.accent}`}>Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Tilt
            glareEnable={true}
            glareColor="#38bdf8"
            glareBorderRadius="1rem"
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            className="bg-slate-900/70 rounded-2xl"
          >
            <div className="p-6 hover:shadow-xl transition-shadow transform-gpu border border-slate-800 h-full">
              <h3 className="font-semibold mb-3">Programming</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>Python (scripts, automation)</li>
                <li>JavaScript / DOM manipulation</li>
                <li>C / C++ (foundations, DS & Algo basics)</li>
              </ul>
            </div>
          </Tilt>

          <Tilt
            glareEnable={true}
            glareColor="#22c55e"
            glareBorderRadius="1rem"
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            className="bg-slate-900/70 rounded-2xl"
          >
            <div className="p-6 hover:shadow-xl transition-shadow transform-gpu border border-slate-800 h-full">
              <h3 className="font-semibold mb-3">Web Development</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>React & component-based architecture</li>
                <li>Tailwind, animations, responsive layouts</li>
                <li>Git / GitHub, deployment with Vercel & Pages</li>
              </ul>
            </div>
          </Tilt>

          <Tilt
            glareEnable={true}
            glareColor="#a855f7"
            glareBorderRadius="1rem"
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            className="bg-slate-900/70 rounded-2xl"
          >
            <div className="p-6 hover:shadow-xl transition-shadow transform-gpu border border-slate-800 h-full">
              <h3 className="font-semibold mb-3">Cybersecurity</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>OWASP Top 10 concepts & basic mitigations</li>
                <li>Network fundamentals & Linux basics</li>
                <li>Ethical hacking mindset and reconnaissance</li>
              </ul>
            </div>
          </Tilt>
        </div>
      </section>

      {/* Experience / Timeline */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className={`text-2xl font-semibold mb-8 ${current.accent}`}>Learning Journey</h2>
        <div className="relative border-l border-slate-700 pl-6 space-y-8">
          <div>
            <div className="w-3 h-3 bg-sky-400 rounded-full absolute -left-[7px] mt-1"></div>
            <h3 className="font-semibold text-slate-200 text-sm">2024 – Present · B.E. CSE (Cyber)</h3>
            <p className="text-slate-400 text-sm">
              Building foundations in programming, networks, and security while exploring frontend
              frameworks through personal projects.
            </p>
          </div>
          <div>
            <div className="w-3 h-3 bg-sky-400 rounded-full absolute -left-[7px] mt-1"></div>
            <h3 className="font-semibold text-slate-200 text-sm">Mini Projects & Labs</h3>
            <p className="text-slate-400 text-sm">
              Created static and responsive websites, experimented with animations, and implemented
              small security demos like input validation and simple login flows.
            </p>
          </div>
          <div>
            <div className="w-3 h-3 bg-sky-400 rounded-full absolute -left-[7px] mt-1"></div>
            <h3 className="font-semibold text-slate-200 text-sm">Future Goals</h3>
            <p className="text-slate-400 text-sm">
              Contribute to open-source security tools, build full-stack secure apps, and prepare
              for bug bounty and specialized security roles.
            </p>
          </div>
        </div>
      </section>

      {/* Projects with 3D cards */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className={`text-2xl font-semibold mb-8 ${current.accent}`}>Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.03}
            transitionSpeed={400}
            className="bg-slate-900/70 rounded-2xl"
          >
            <article className="p-6 shadow-lg border border-slate-800 h-full flex flex-col justify-between transform-gpu">
              <div>
                <h3 className="font-semibold mb-2">Static Portfolio & Deployment</h3>
                <p className="text-slate-300 text-sm">
                  Responsive personal portfolio deployed on GitHub Pages and Vercel, with custom
                  cursor, theme switching, and Tailwind utility-first styling.
                </p>
              </div>
              <p className="mt-4 text-xs text-slate-400">
                Tech: React, Tailwind, GitHub Pages, Vercel
              </p>
            </article>
          </Tilt>

          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.03}
            transitionSpeed={400}
            className="bg-slate-900/70 rounded-2xl"
          >
            <article className="p-6 shadow-lg border border-slate-800 h-full flex flex-col justify-between transform-gpu">
              <div>
                <h3 className="font-semibold mb-2">CSS & Security Experiments</h3>
                <p className="text-slate-300 text-sm">
                  Sandbox of small experiments combining animations, forms, and basic security ideas
                  like input sanitization demos and cookie flag explanations.
                </p>
              </div>
              <p className="mt-4 text-xs text-slate-400">
                Tech: HTML, CSS, JavaScript, Tailwind, LESS
              </p>
            </article>
          </Tilt>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-slate-900/70 rounded-2xl p-8 shadow-xl border border-slate-800">
          <h2 className={`text-2xl font-semibold mb-4 ${current.accent}`}>Contact</h2>
          <p className="text-slate-300 text-sm">
            Open to internships, collaborations, or just discussions about security and frontend
            experiments.
          </p>
          <p className="text-slate-300 text-sm mt-2">
            Email: <span className="font-mono">akileshmk54@email.com</span>
          </p>
          <p className="text-slate-300 text-sm mb-6">
            GitHub:{" "}
            <a
              href="https://github.com/AKILESH-M-K"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-sky-400 decoration-dotted underline-offset-4"
            >
              github.com/AKILESH-M-K
            </a>
          </p>
          <form className="grid gap-4 mt-4">
            <input
              className="bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-sm"
              placeholder="Your Name"
            />
            <input
              className="bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-sm"
              placeholder="Your Email"
            />
            <textarea
              className="bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-sm"
              rows="4"
              placeholder="Message"
            />
            <button
              className={`bg-gradient-to-r ${current.button} text-slate-900 font-semibold py-2 rounded-lg hover:opacity-90 transition`}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="text-center py-8 text-slate-500 text-xs">
        © {new Date().getFullYear()} Akilesh · 
      </footer>
    </div>
  );
}