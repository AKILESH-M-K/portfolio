// src/portfolio.jsx
import React, { useEffect, useState, useRef, useCallback } from "react";
import Tilt from "react-parallax-tilt";

const THEMES = {
  dark: {
    name: "Dark",
    bg: "bg-slate-950",
    pageText: "text-slate-100",
    textMuted: "text-slate-400",
    accent: "text-sky-400",
    accentBorder: "border-sky-400",
    buttonPrimary: "bg-gradient-to-r from-sky-400 to-cyan-300 text-slate-950 hover:from-sky-300 hover:to-cyan-200 shadow-sky-500/20",
    buttonSecondary: "border border-slate-700 bg-slate-900/70 text-slate-200 hover:border-sky-400 hover:text-sky-300",
    cardBg: "bg-slate-900/80 backdrop-blur-md",
    cardBorder: "border-slate-800 hover:border-slate-700",
    inputBg: "bg-slate-950/90 border-slate-700 text-slate-100 placeholder-slate-500 focus:border-sky-400 focus:ring-1 focus:ring-sky-400",
    badge: "bg-slate-800/80 border-slate-700 text-slate-200",
    navBg: "bg-slate-950/85 border-slate-800",
    cursorBorder: "border-sky-400",
  },
  cyber: {
    name: "Cyber",
    bg: "bg-black",
    pageText: "text-emerald-100",
    textMuted: "text-emerald-400/80",
    accent: "text-emerald-400",
    accentBorder: "border-emerald-400",
    buttonPrimary: "bg-gradient-to-r from-emerald-400 to-lime-300 text-slate-950 hover:from-emerald-300 hover:to-lime-200 shadow-emerald-500/20",
    buttonSecondary: "border border-emerald-900/80 bg-emerald-950/50 text-emerald-300 hover:border-emerald-400",
    cardBg: "bg-zinc-950/90 backdrop-blur-md",
    cardBorder: "border-emerald-900/60 hover:border-emerald-700/80",
    inputBg: "bg-black border-emerald-900 text-emerald-100 placeholder-emerald-700 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400",
    badge: "bg-emerald-950/70 border-emerald-800 text-emerald-300",
    navBg: "bg-black/90 border-emerald-950",
    cursorBorder: "border-emerald-400",
  },
  purple: {
    name: "Purple",
    bg: "bg-slate-950",
    pageText: "text-purple-100",
    textMuted: "text-purple-300/80",
    accent: "text-purple-400",
    accentBorder: "border-purple-400",
    buttonPrimary: "bg-gradient-to-r from-purple-400 to-pink-400 text-slate-950 hover:from-purple-300 hover:to-pink-300 shadow-purple-500/20",
    buttonSecondary: "border border-purple-900/80 bg-purple-950/40 text-purple-200 hover:border-purple-400",
    cardBg: "bg-purple-950/25 backdrop-blur-md",
    cardBorder: "border-purple-900/50 hover:border-purple-700/60",
    inputBg: "bg-slate-950/90 border-purple-900 text-purple-100 placeholder-purple-500 focus:border-purple-400 focus:ring-1 focus:ring-purple-400",
    badge: "bg-purple-900/40 border-purple-800 text-purple-200",
    navBg: "bg-slate-950/85 border-purple-900/60",
    cursorBorder: "border-purple-400",
  },
  light: {
    name: "Light",
    bg: "bg-slate-100",
    pageText: "text-slate-900",
    textMuted: "text-slate-600",
    accent: "text-blue-600",
    accentBorder: "border-blue-600",
    buttonPrimary: "bg-gradient-to-r from-blue-600 to-sky-500 text-white hover:from-blue-700 hover:to-sky-600 shadow-blue-500/20",
    buttonSecondary: "border border-slate-300 bg-white text-slate-800 hover:border-blue-500 hover:text-blue-600",
    cardBg: "bg-white/95 backdrop-blur-md shadow-md",
    cardBorder: "border-slate-200 hover:border-slate-300",
    inputBg: "bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600",
    badge: "bg-slate-200/80 border-slate-300 text-slate-800",
    navBg: "bg-white/90 border-slate-200 shadow-sm",
    cursorBorder: "border-blue-600",
  },
};

const FEATURED_PROJECTS = [
  {
    id: "cinebook",
    title: "CineBook — Movie Ticket Reservation Platform",
    category: "Full-Stack & Frontend Engineering (SDE)",
    summary:
      "A responsive, full-featured cinema reservation system featuring dynamic auditorium seat selection matrices, real-time ticket pricing calculation, showtime scheduling, and seamless checkout flow.",
    tech: ["React", "JavaScript (ES6+)", "Tailwind CSS", "LocalStorage", "Component State"],
    features: [
      "Interactive 2D seat grid with reserved, VIP, and available state synchronization",
      "Dynamic pricing engine calculating totals based on tier selection and showtimes",
      "Complete client-side reservation validation flow preventing duplicate bookings",
    ],
    security: "Strict input sanitization for user booking data; hardened state management preventing client-side price tampering.",
    github: "https://github.com/AKILESH-M-K",
    demo: null,
  },
  {
    id: "edr-lab",
    title: "EDR Threat Detection & Hunting Lab",
    category: "Cybersecurity & Systems Engineering",
    summary:
      "Enterprise-grade Endpoint Detection and Response telemetry analysis pipeline deploying Wazuh EDR/SIEM and Microsoft Sysmon to detect advanced adversary behaviors mapped to the MITRE ATT&CK matrix.",
    tech: ["Wazuh EDR/SIEM", "Microsoft Sysmon", "Linux / Ubuntu", "PowerShell", "MITRE ATT&CK"],
    features: [
      "Engineered custom XML rules capturing process injection, privilege escalation, and persistence",
      "Configured high-fidelity Sysmon XML schema filtering telemetry noise while retaining Event IDs 1, 3, 7, and 11",
      "Correlated multi-host security events in Wazuh to construct end-to-end incident timelines",
    ],
    security: "Encrypted agent-to-manager TLS communication; principle of least privilege enforced across log collection daemons.",
    github: "https://github.com/AKILESH-M-K",
    demo: null,
  },
  {
    id: "microservices",
    title: "Decoupled Microservices Architecture",
    category: "Backend & Systems Architecture (SDE)",
    summary:
      "A modular, distributed backend architecture decomposing monolithic application logic into independent services communicating through structured REST API contracts and an API gateway.",
    tech: ["Node.js", "Express", "Docker", "REST APIs", "JSON Web Tokens", "PostgreSQL"],
    features: [
      "Centralized API Gateway implementing rate limiting, authentication verification, and proxy routing",
      "Isolated service databases preventing tight data coupling across business domains",
      "Dockerized microservice images orchestrated for consistent multi-container local deployments",
    ],
    security: "Stateless JWT signature verification, centralized IP rate limiting to mitigate DoS, and strict CORS policies.",
    github: "https://github.com/AKILESH-M-K",
    demo: null,
  },
  {
    id: "portfolio-app",
    title: "Production Engineering Portfolio",
    category: "Frontend Architecture & DevSecOps",
    summary:
      "High-performance personal web platform built with modern React, adhering strictly to WCAG 2.2 AA accessibility standards, Content Security Policy (CSP) headers, and automated GitHub Actions CI/CD.",
    tech: ["React 19", "Tailwind CSS", "GitHub Actions CI", "GitHub Pages", "Webpack"],
    features: [
      "Hardware-accelerated 60 FPS 3D parallax tilt cards and RAF-throttled pointer cursor",
      "Comprehensive 4-palette theme tokens persisting across sessions with system theme detection",
      "Automated CI testing, security dependency auditing, and production build verification",
    ],
    security: "Content-Security-Policy (CSP) meta enforcement, strict Referrer-Policy, and anti-spam honeypot protection.",
    github: "https://github.com/AKILESH-M-K/portfolio",
    demo: "https://akilesh-m-k.github.io/portfolio/",
  },
];

export default function Portfolio() {
  const [activeCursor, setActiveCursor] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("portfolio_theme");
      if (saved && THEMES[saved]) return saved;
      if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
        return "light";
      }
    } catch {
      // Fallback to default
    }
    return "dark";
  });

  const [showTop, setShowTop] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Form states
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "", _gotcha: "" });
  const [formStatus, setFormStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const [formError, setFormError] = useState("");

  const cursorRef = useRef(null);

  // Theme persistence
  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    try {
      localStorage.setItem("portfolio_theme", newTheme);
    } catch {
      // Storage unavailable
    }
  };

  // Cursor and Scroll setup
  useEffect(() => {
    let animationFrameId;

    const moveCursor = (e) => {
      if (cursorRef.current) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(() => {
          if (cursorRef.current) {
            cursorRef.current.style.transform = `translate3d(${e.clientX - 10}px, ${e.clientY - 10}px, 0)`;
          }
        });
      }
    };

    const handleMouseOver = (e) => {
      if (e.target && e.target.closest && e.target.closest("a, button, input, textarea, select")) {
        setActiveCursor(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target && e.target.closest && e.target.closest("a, button, input, textarea, select")) {
        setActiveCursor(false);
      }
    };

    const onScroll = () => {
      setShowTop(window.scrollY > 350);
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mouseout", handleMouseOut, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // IntersectionObserver for active section tracking
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

  // Close mobile menu on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const scrollToSection = useCallback((id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  // Contact Form Submission Handler
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    // Anti-spam honeypot detection
    if (formData._gotcha) {
      setFormStatus("success");
      return;
    }

    // Input Validation
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedSubject = formData.subject.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedSubject || !trimmedMessage) {
      setFormError("All required fields must be completed.");
      setFormStatus("error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setFormError("Please enter a valid email address.");
      setFormStatus("error");
      return;
    }

    if (trimmedMessage.length < 10) {
      setFormError("Message must be at least 10 characters long.");
      setFormStatus("error");
      return;
    }

    setFormStatus("loading");

    try {
      // Submission attempt via Formspree or endpoint
      const response = await fetch("https://formspree.io/f/xbldwzqv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          subject: trimmedSubject,
          message: trimmedMessage,
        }),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "", _gotcha: "" });
      } else {
        throw new Error("Service unavailable");
      }
    } catch {
      // Graceful fallback to client mailto
      setFormStatus("error");
      setFormError(
        "Direct API delivery was unreachable. Click below to launch your email client with your drafted message preserved."
      );
    }
  };

  const current = THEMES[theme] || THEMES.dark;

  return (
    <div className={`min-h-screen ${current.bg} ${current.pageText} font-sans transition-colors duration-300 relative selection:bg-sky-500 selection:text-white`}>
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-sky-500 focus:text-slate-950 focus:font-semibold focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Hardware-Accelerated Custom Cursor (Desktop Only) */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 z-50 pointer-events-none transform-gpu hidden md:block transition-all duration-100 ease-out ${
          activeCursor ? "scale-150 opacity-90" : "scale-100 opacity-75"
        }`}
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      >
        <div className={`w-5 h-5 border-2 rounded-full ${current.cursorBorder} mix-blend-screen shadow-sm`}></div>
      </div>

      {/* Sticky Header & Accessible Navigation */}
      <header className={`sticky top-0 z-40 w-full backdrop-blur-md border-b ${current.navBg} transition-colors duration-300`}>
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
              <span className={`text-[10px] ${current.textMuted} tracking-wider uppercase font-mono`}>SDE • Cyber</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1 bg-black/10 rounded-full p-1 border border-white/5">
            {[
              { id: "about", label: "About" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
              { id: "experience", label: "Journey" },
              { id: "contact", label: "Contact" },
            ].map(({ id, label }) => {
              const isActive = activeSection === id;
              return (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition ${
                    isActive
                      ? `${current.accent} bg-white/10 shadow-sm font-semibold`
                      : `${current.textMuted} hover:text-white hover:bg-white/5`
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
                  onClick={() => changeTheme(key)}
                  aria-pressed={theme === key}
                  aria-label={`${val.name} theme`}
                  title={`${val.name} theme`}
                  className={`px-2 py-0.5 rounded-full text-[11px] font-medium transition ${
                    theme === key
                      ? "bg-sky-500 text-slate-950 font-bold shadow-sm"
                      : `${current.textMuted} hover:text-white`
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
          <nav aria-label="Mobile Navigation" className={`md:hidden px-4 py-4 border-b ${current.navBg} space-y-1`}>
            {[
              { id: "about", label: "About" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
              { id: "experience", label: "Journey" },
              { id: "contact", label: "Contact" },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition ${
                  activeSection === id ? `${current.accent} bg-white/10 font-bold` : `${current.textMuted} hover:bg-white/5`
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        )}
      </header>

      {/* Main Content Landmark */}
      <main id="main-content">
        {/* Hero Section */}
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

          <p className={`mt-6 max-w-2xl text-base sm:text-lg ${current.textMuted} leading-relaxed`}>
            B.E. Computer Science & Engineering (Cybersecurity) student at Sri Shakthi Institute of Engineering and Technology.
            Passionate about building scalable full-stack applications, designing robust systems, and applying ethical defensive security principles to modern software engineering.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => scrollToSection("projects")}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition shadow-md hover:scale-[1.02] ${current.buttonPrimary}`}
            >
              Explore Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition ${current.buttonSecondary}`}
            >
              Get In Touch
            </button>
            <a
              href="https://github.com/AKILESH-M-K"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition flex items-center gap-2 ${current.buttonSecondary}`}
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
            {["React", "JavaScript (ES6+)", "Node.js", "Python", "Tailwind CSS", "Linux", "Wazuh / Sysmon", "OWASP Top 10"].map((badge) => (
              <span
                key={badge}
                className={`px-3 py-1 rounded-full text-xs font-mono font-medium border ${current.badge}`}
              >
                {badge}
              </span>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
          <div className={`p-8 sm:p-10 rounded-2xl border ${current.cardBg} ${current.cardBorder} shadow-lg`}>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-3 h-3 rounded-full bg-sky-400"></span>
              <h2 className={`text-2xl sm:text-3xl font-bold ${current.accent}`}>About Me</h2>
            </div>

            <div className={`space-y-4 text-sm sm:text-base ${current.textMuted} leading-relaxed`}>
              <p>
                I am a Computer Science and Engineering undergraduate specializing in Cybersecurity at{" "}
                <strong className={current.pageText}>Sri Shakthi Institute of Engineering and Technology</strong> (Coimbatore).
                My core career objective is to work as a <strong className={current.pageText}>Software Development Engineer (SDE)</strong>,
                architecting scalable, performant, and reliable software systems.
              </p>
              <p>
                Complementing my software engineering mindset is a disciplined interest in <strong className={current.pageText}>Application & Systems Security</strong>.
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
                <p className={`font-semibold text-sm ${current.pageText} mt-1`}>B.E. CSE (Cybersecurity)</p>
                <p className={`text-xs ${current.textMuted}`}>2024 – Present</p>
              </div>
              <div className="text-left">
                <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">Institution</span>
                <p className={`font-semibold text-sm ${current.pageText} mt-1`}>Sri Shakthi Institute</p>
                <p className={`text-xs ${current.textMuted}`}>Coimbatore, India</p>
              </div>
              <div className="text-left">
                <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">Core Focus</span>
                <p className={`font-semibold text-sm ${current.pageText} mt-1`}>Software Engineering & Security</p>
                <p className={`text-xs ${current.textMuted}`}>Full-Stack, DS & Algo, Defense</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section id="skills" className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className={`text-2xl sm:text-3xl font-bold ${current.accent}`}>Technical Proficiencies</h2>
            <p className={`mt-2 text-sm ${current.textMuted} max-w-md`}>
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
              className={`rounded-2xl border ${current.cardBg} ${current.cardBorder}`}
            >
              <div className="p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-4 font-bold">
                    &lt;/&gt;
                  </div>
                  <h3 className={`text-lg font-bold mb-3 ${current.pageText}`}>Frontend & Web Engineering</h3>
                  <ul className={`space-y-2 text-xs sm:text-sm ${current.textMuted}`}>
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
              className={`rounded-2xl border ${current.cardBg} ${current.cardBorder}`}
            >
              <div className="p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 font-bold">
                    ⚙
                  </div>
                  <h3 className={`text-lg font-bold mb-3 ${current.pageText}`}>Backend & Core Programming</h3>
                  <ul className={`space-y-2 text-xs sm:text-sm ${current.textMuted}`}>
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
              className={`rounded-2xl border ${current.cardBg} ${current.cardBorder}`}
            >
              <div className="p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4 font-bold">
                    🛡
                  </div>
                  <h3 className={`text-lg font-bold mb-3 ${current.pageText}`}>Cybersecurity & Defense</h3>
                  <ul className={`space-y-2 text-xs sm:text-sm ${current.textMuted}`}>
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

        {/* Featured Projects Section */}
        <section id="projects" className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className={`text-2xl sm:text-3xl font-bold ${current.accent}`}>Featured Engineering Projects</h2>
            <p className={`mt-2 text-sm ${current.textMuted} max-w-lg`}>
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
                className={`rounded-2xl border ${current.cardBg} ${current.cardBorder} flex flex-col justify-between overflow-hidden shadow-lg`}
              >
                <article className="p-6 sm:p-7 flex flex-col justify-between h-full">
                  <div>
                    <span className="text-[11px] font-mono text-sky-400 uppercase tracking-wider block mb-1">
                      {proj.category}
                    </span>
                    <h3 className={`text-xl font-bold mb-3 ${current.pageText}`}>{proj.title}</h3>
                    <p className={`text-sm ${current.textMuted} leading-relaxed mb-4`}>{proj.summary}</p>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Key Engineering Features</h4>
                      <ul className={`space-y-1 text-xs ${current.textMuted}`}>
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
                      <span className={current.textMuted}>{proj.security}</span>
                    </div>
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {proj.tech.map((t) => (
                        <span key={t} className={`px-2.5 py-0.5 rounded text-[11px] font-mono border ${current.badge}`}>
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
                        className={`text-xs font-semibold inline-flex items-center gap-1.5 ${current.accent} hover:underline`}
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
                          className={`text-xs font-semibold inline-flex items-center gap-1.5 ${current.accent} hover:underline`}
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

        {/* Experience / Learning Journey Section */}
        <section id="experience" className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className={`text-2xl sm:text-3xl font-bold ${current.accent}`}>Education & Academic Journey</h2>
            <p className={`mt-2 text-sm ${current.textMuted} max-w-lg`}>
              Academic milestones, hands-on software development labs, and ethical security practice.
            </p>
          </div>

          <div className="relative border-l-2 border-slate-700/60 pl-6 sm:pl-8 space-y-10 ml-4 sm:ml-8">
            {/* Timeline Item 1 */}
            <div className="relative group">
              <div className="w-4 h-4 rounded-full bg-sky-400 absolute -left-[31px] sm:-left-[39px] top-1 border-4 border-slate-950 shadow-sm"></div>
              <div>
                <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">2024 – Present · Undergraduate</span>
                <h3 className={`text-lg font-bold ${current.pageText} mt-0.5`}>
                  B.E. Computer Science and Engineering (Cybersecurity)
                </h3>
                <p className="text-xs text-slate-400 font-medium">Sri Shakthi Institute of Engineering and Technology</p>
                <p className={`mt-2 text-sm ${current.textMuted} leading-relaxed`}>
                  Mastering core computer science disciplines including Data Structures & Algorithms, Object-Oriented Software Design, Operating Systems, Computer Networking, and Cryptographic Protocols.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative group">
              <div className="w-4 h-4 rounded-full bg-emerald-400 absolute -left-[31px] sm:-left-[39px] top-1 border-4 border-slate-950 shadow-sm"></div>
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Engineering Labs & Full-Stack Systems</span>
                <h3 className={`text-lg font-bold ${current.pageText} mt-0.5`}>
                  Software Development & Full-Stack Projects
                </h3>
                <p className={`mt-2 text-sm ${current.textMuted} leading-relaxed`}>
                  Architected and deployed responsive React applications, built RESTful backends, designed database schemas, and practiced version-controlled collaborative development with Git.
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative group">
              <div className="w-4 h-4 rounded-full bg-purple-400 absolute -left-[31px] sm:-left-[39px] top-1 border-4 border-slate-950 shadow-sm"></div>
              <div>
                <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">Defensive Security & Threat Hunting</span>
                <h3 className={`text-lg font-bold ${current.pageText} mt-0.5`}>
                  Endpoint Detection & Hands-On CTF Labs
                </h3>
                <p className={`mt-2 text-sm ${current.textMuted} leading-relaxed`}>
                  Deployed Wazuh SIEM and Sysmon for endpoint behavior auditing. Regularly analyzing web vulnerabilities (OWASP Top 10), writing defensive rules, and solving CTF challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
          <div className={`p-8 sm:p-10 rounded-2xl border ${current.cardBg} ${current.cardBorder} shadow-xl`}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div>
                <h2 className={`text-2xl sm:text-3xl font-bold ${current.accent}`}>Connect & Inquire</h2>
                <p className={`mt-1 text-sm ${current.textMuted}`}>
                  Open to Software Development Engineer (SDE) internships, engineering collaborations, and technical discussions.
                </p>
              </div>
              <div className="flex flex-col sm:text-right text-xs text-slate-400">
                <span>Direct Email:</span>
                <a
                  href="mailto:akileshmk54@gmail.com"
                  className={`font-mono font-medium ${current.accent} hover:underline`}
                >
                  akileshmk54@gmail.com
                </a>
              </div>
            </div>

            {/* Form Feedback Alerts */}
            {formStatus === "success" && (
              <div role="alert" className="mb-6 p-4 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-sm">
                <p className="font-semibold">Message dispatched successfully!</p>
                <p className="text-xs text-emerald-400 mt-0.5">Thank you for reaching out. I will review your message and reply promptly.</p>
              </div>
            )}

            {formStatus === "error" && (
              <div role="alert" className="mb-6 p-4 rounded-lg bg-rose-500/15 border border-rose-500/30 text-rose-300 text-sm">
                <p className="font-semibold">Submission Note</p>
                <p className="text-xs text-rose-400 mt-0.5">{formError}</p>
                <a
                  href={`mailto:akileshmk54@gmail.com?subject=${encodeURIComponent(
                    formData.subject || "Portfolio Inquiry"
                  )}&body=${encodeURIComponent(
                    `From: ${formData.name} (${formData.email})\n\n${formData.message}`
                  )}`}
                  className="mt-2 inline-block font-semibold underline text-sky-400 hover:text-sky-300 text-xs"
                >
                  Open in Default Email Client ↗
                </a>
              </div>
            )}

            {/* Accessible Contact Form */}
            <form onSubmit={handleFormSubmit} noValidate className="space-y-4">
              {/* Anti-spam honeypot */}
              <input
                type="text"
                name="_gotcha"
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
                value={formData._gotcha}
                onChange={(e) => setFormData({ ...formData, _gotcha: e.target.value })}
                className="hidden"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name-input" className={`block text-xs font-semibold mb-1 ${current.pageText}`}>
                    Full Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    required
                    maxLength={80}
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-lg text-sm border ${current.inputBg} transition focus:outline-none`}
                  />
                </div>

                <div>
                  <label htmlFor="email-input" className={`block text-xs font-semibold mb-1 ${current.pageText}`}>
                    Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    required
                    maxLength={100}
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-lg text-sm border ${current.inputBg} transition focus:outline-none`}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject-input" className={`block text-xs font-semibold mb-1 ${current.pageText}`}>
                  Subject / Topic <span className="text-rose-400">*</span>
                </label>
                <input
                  id="subject-input"
                  type="text"
                  required
                  maxLength={120}
                  placeholder="SDE Internship / Project Collaboration"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-lg text-sm border ${current.inputBg} transition focus:outline-none`}
                />
              </div>

              <div>
                <label htmlFor="message-input" className={`block text-xs font-semibold mb-1 ${current.pageText}`}>
                  Message <span className="text-rose-400">*</span>
                </label>
                <textarea
                  id="message-input"
                  rows={4}
                  required
                  maxLength={2000}
                  placeholder="Share details regarding the opportunity, project, or question..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-lg text-sm border ${current.inputBg} transition focus:outline-none`}
                ></textarea>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className={`text-[11px] ${current.textMuted}`}>
                  Protected by anti-spam verification & CSP.
                </span>
                <button
                  type="submit"
                  disabled={formStatus === "loading"}
                  className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition flex items-center gap-2 ${current.buttonPrimary} disabled:opacity-60 disabled:cursor-not-allowed`}
                >
                  {formStatus === "loading" ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-current" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Scroll-To-Top Button */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll back to top of page"
          className="fixed bottom-6 right-6 z-40 bg-slate-900/90 border border-sky-400 text-sky-200 rounded-full w-11 h-11 flex items-center justify-center shadow-xl hover:-translate-y-1 transition focus:outline-none focus:ring-2 focus:ring-sky-400"
        >
          ↑
        </button>
      )}

      {/* Semantic Footer */}
      <footer className={`border-t ${current.navBg} py-8 text-center text-xs ${current.textMuted}`}>
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
    </div>
  );
}
