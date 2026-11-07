# Akilesh M K — Software Engineering & Cybersecurity Portfolio

[![CI Pipeline](https://github.com/AKILESH-M-K/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/AKILESH-M-K/portfolio/actions/workflows/ci.yml)
[![Live Deployment](https://img.shields.io/badge/Live_Site-GitHub_Pages-blue?style=flat-square)](https://akilesh-m-k.github.io/portfolio/)
[![WCAG 2.2 AA](https://img.shields.io/badge/Accessibility-WCAG_2.2_AA-emerald?style=flat-square)](https://www.w3.org/WAI/standards-guidelines/wcag/)
[![Security Hardened](https://img.shields.io/badge/Security-CSP_Hardened-purple?style=flat-square)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)

A production-engineered personal portfolio website engineered by **Akilesh M K** — B.E. Computer Science and Engineering (Cybersecurity) student at Sri Shakthi Institute of Engineering and Technology.

* **Primary Career Objective:** Software Development Engineer (SDE)
* **Secondary Specialization:** Application & Systems Security
* **Live Deployment:** [https://akilesh-m-k.github.io/portfolio/](https://akilesh-m-k.github.io/portfolio/)

---

## 🚀 Key Engineering & Architectural Highlights

* **Modern React Architecture:** Component-based UI with decoupled design tokens, persistent theme state, and zero DOM manipulation leaks.
* **WCAG 2.2 AA Accessibility Compliance:** Includes keyboard navigation, visible `:focus-visible` rings, screen-reader landmarks (`<main>`, `<header>`, `<nav>`), `<label>`-bound form controls, and `@media (prefers-reduced-motion)` overrides.
* **High-Performance Hardware Acceleration:** Fluid 60 FPS 3D parallax cards via `react-parallax-tilt` and GPU-accelerated pointer tracking throttled via `requestAnimationFrame` with native touch fallbacks.
* **Application Security & Hardening:**
  * Enforced client-side **Content-Security-Policy (CSP)** limiting script, style, and API connect origins.
  * Strict `Referrer-Policy: strict-origin-when-cross-origin`.
  * Outbound links protected with `rel="noopener noreferrer"`.
  * Anti-bot honeypot and client-side regex input sanitization on contact submissions.
* **Persistent Multi-Palette Theming:** Dark, Cyber, Purple, and Light themes persisting to `localStorage` with initial system `prefers-color-scheme` detection.

---

## 🛠️ Technology Stack

| Domain | Technologies |
|---|---|
| **Frontend Framework** | React 19, React DOM 19 |
| **Styling & Design** | Tailwind CSS 3.4, PostCSS, Custom CSS Keyframes |
| **Interactivity & 3D** | `react-parallax-tilt`, Hardware-accelerated CSS transforms |
| **Testing Harness** | Jest, React Testing Library, `@testing-library/jest-dom` |
| **DevSecOps & CI/CD** | GitHub Actions (`ci.yml`), GitHub Pages (`gh-pages`) |
| **Security Principles** | OWASP Top 10 mitigations, CSP meta enforcement, honeypots |

---

## 📁 Repository Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── ci.yml               # Automated CI (lint, test, build, audit)
├── public/
│   ├── favicon.ico              # Browser favicon
│   ├── index.html               # Main HTML with CSP & Open Graph metadata
│   ├── manifest.json            # Web app manifest metadata
│   └── robots.txt               # Search engine crawler policies
├── src/
│   ├── App.js                   # Application root component
│   ├── App.test.js              # Unit and integration test suite
│   ├── index.css                # Tailwind directives, animations & a11y rules
│   ├── index.js                 # React DOM client entrypoint
│   ├── portfolio.jsx            # Main interactive portfolio component & theme system
│   ├── reportWebVitals.js       # Core Web Vitals telemetry
│   └── setupTests.js            # Jest test environment mocks
├── package.json                 # Project dependencies & GitHub Pages homepage path
└── tailwind.config.js           # Tailwind utility scanner configuration
```

---

## 🧪 Local Development & Testing

### 1. Prerequisites
* **Node.js** v18+ or v20+ LTS
* **npm** v9+

### 2. Setup
```bash
# Clone the repository
git clone https://github.com/AKILESH-M-K/portfolio.git
cd portfolio

# Install dependencies using the lockfile
npm ci
```

### 3. Development Server
```bash
npm start
# Opens at http://localhost:3000/portfolio
```

### 4. Running Automated Tests
```bash
# Run Jest and React Testing Library test suites
npm test -- --watchAll=false
```

### 5. Production Build
```bash
npm run build
# Compiles optimized production bundle in build/ directory
```

---

## 🔒 Security & Defensive Engineering

* **Content-Security-Policy (CSP):** Configured to prevent cross-site scripting (XSS) and unauthorized resource execution.
* **No Client Secrets:** No private API keys or credentials exposed in frontend builds.
* **Input Validation & Sanitization:** All contact inputs are bound to strict length limits and email regex checks.
* **Automated Auditing:** CI executes `npm audit` to detect known dependency vulnerabilities.

---

## 📜 License & Copyright

Designed and developed by **Akilesh M K**. All rights reserved.
