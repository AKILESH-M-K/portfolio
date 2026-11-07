// src/constants/projects.js
export const FEATURED_PROJECTS = [
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

