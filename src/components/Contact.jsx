// src/components/Contact.jsx
import React, { useState } from "react";

export default function Contact({ currentTheme }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    _gotcha: "",
  });
  const [formStatus, setFormStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const [formError, setFormError] = useState("");

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
      setFormStatus("error");
      setFormError(
        "Direct API delivery was unreachable. Click below to launch your email client with your drafted message preserved."
      );
    }
  };

  return (
    <section id="contact" className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
      <div className={`p-8 sm:p-10 rounded-2xl border ${currentTheme.cardBg} ${currentTheme.cardBorder} shadow-xl`}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h2 className={`text-2xl sm:text-3xl font-bold ${currentTheme.accent}`}>Connect & Inquire</h2>
            <p className={`mt-1 text-sm ${currentTheme.textMuted}`}>
              Open to Software Development Engineer (SDE) internships, engineering collaborations, and technical discussions.
            </p>
          </div>
          <div className="flex flex-col sm:text-right text-xs text-slate-400">
            <span>Direct Email:</span>
            <a
              href="mailto:akileshmk54@gmail.com"
              className={`font-mono font-medium ${currentTheme.accent} hover:underline`}
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
              <label htmlFor="name-input" className={`block text-xs font-semibold mb-1 ${currentTheme.pageText}`}>
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
                className={`w-full px-4 py-2.5 rounded-lg text-sm border ${currentTheme.inputBg} transition focus:outline-none`}
              />
            </div>

            <div>
              <label htmlFor="email-input" className={`block text-xs font-semibold mb-1 ${currentTheme.pageText}`}>
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
                className={`w-full px-4 py-2.5 rounded-lg text-sm border ${currentTheme.inputBg} transition focus:outline-none`}
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject-input" className={`block text-xs font-semibold mb-1 ${currentTheme.pageText}`}>
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
              className={`w-full px-4 py-2.5 rounded-lg text-sm border ${currentTheme.inputBg} transition focus:outline-none`}
            />
          </div>

          <div>
            <label htmlFor="message-input" className={`block text-xs font-semibold mb-1 ${currentTheme.pageText}`}>
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
              className={`w-full px-4 py-2.5 rounded-lg text-sm border ${currentTheme.inputBg} transition focus:outline-none`}
            ></textarea>
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className={`text-[11px] ${currentTheme.textMuted}`}>
              Protected by anti-spam verification & CSP.
            </span>
            <button
              type="submit"
              disabled={formStatus === "loading"}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition flex items-center gap-2 ${currentTheme.buttonPrimary} disabled:opacity-60 disabled:cursor-not-allowed`}
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
  );
}

