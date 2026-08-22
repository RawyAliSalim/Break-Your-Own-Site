"use client";

import { useState } from "react";

interface Project {
  title: string;
  role: string;
  description: string;
  tags: string[];
  demoUrl: string;
  repoUrl: string;
}

export default function Home() {
  // Contact Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formStatus, setFormStatus] = useState<{
    type: "idle" | "error" | "success";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  const [fieldErrors, setFieldErrors] = useState<{
    name?: boolean;
    email?: boolean;
    message?: boolean;
  }>({});

  const projects: Project[] = [
    {
      title: "Cloudjet Innovations — Full-Stack Internship System",
      role: "Full-Stack Intern",
      description:
        "Engineered scalable RESTful API endpoints and a high-performance administrative dashboard with real-time analytics, automated job processing, and robust role-based access control.",
      tags: ["Node.js", "Express", "React", "PostgreSQL", "Tailwind CSS"],
      demoUrl: "https://example.com/demo-cloudjet",
      repoUrl: "https://github.com/RawyAliSalim/cloudjet-internship",
    },
    {
      title: "BYTE Club Community Tool & Management Portal",
      role: "Head of Software Community",
      description:
        "Architected an internal portal for student developers to collaborate on open-source initiatives, schedule hackathons, and track project milestones across the university community.",
      tags: ["Next.js", "TypeScript", "MERN Stack", "MongoDB", "REST APIs"],
      demoUrl: "https://example.com/demo-byte-club",
      repoUrl: "https://github.com/RawyAliSalim/byte-club-portal",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear errors upon typing
    if (fieldErrors[name as keyof typeof fieldErrors]) {
      setFieldErrors((prev) => ({ ...prev, [name]: false }));
    }
    if (formStatus.type === "error") {
      setFormStatus({ type: "idle", message: "" });
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const errors: { name?: boolean; email?: boolean; message?: boolean } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation checks
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = true;
    }
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = true;
    }
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      errors.message = true;
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setFormStatus({
        type: "error",
        message:
          "Please fill out all fields correctly. Ensure a valid email address and a message with at least 5 characters.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate network request / API submission
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Success State
      setFieldErrors({});
      setFormStatus({
        type: "success",
        message:
          "Thank you! Your message has been sent successfully. I will get back to you shortly.",
      });

      // Reset Form fields
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setFormStatus({
        type: "error",
        message: "An error occurred while sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex-1 flex flex-col items-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full py-12 md:py-20 space-y-24">
      {/* 1. HERO SECTION */}
      <section
        id="hero"
        className="w-full flex flex-col items-start space-y-6 pt-4"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-950/40 text-blue-400 text-xs md:text-sm font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Head of Software Community @ BYTE Club
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400">
            Rawy Ali Salim
          </span>
        </h1>

        <h2 className="text-xl sm:text-2xl font-semibold text-slate-300">
          Full-Stack &amp; Backend Developer
        </h2>

        <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
          I build high-performance, scalable backend systems and dynamic full-stack web applications using Node.js, Express, Next.js, and SQL. Passionate about AI-integrated solutions, clean API design, and fostering developer talent.
        </p>

        {/* Action Links & Socials */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-500/20 transition duration-200"
          >
            Get in Touch
          </a>
          <a
            href="https://github.com/RawyAliSalim"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-slate-700 hover:border-slate-500 bg-slate-900/60 hover:bg-slate-800 text-slate-200 font-medium transition duration-200 flex items-center gap-2"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rawy-salim-2bb2b629b"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-slate-700 hover:border-slate-500 bg-slate-900/60 hover:bg-slate-800 text-slate-200 font-medium transition duration-200 flex items-center gap-2"
          >
            <svg
              className="w-5 h-5 fill-current text-[#0a66c2]"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
            </svg>
            LinkedIn
          </a>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 pt-4">
          {[
            "Node.js",
            "Express",
            "Next.js",
            "React",
            "PostgreSQL / SQL",
            "MongoDB",
            "TypeScript",
            "REST APIs",
            "AI Integration",
          ].map((skill) => (
            <span
              key={skill}
              className="text-xs px-3 py-1 bg-slate-900 border border-slate-800 rounded-md text-slate-300 font-mono"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* 2. PROJECTS SECTION */}
      <section id="projects" className="w-full space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-400">
            Selected full-stack and backend systems engineered for reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <article
              key={idx}
              className="flex flex-col justify-between p-6 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/70 hover:border-slate-700 transition duration-300 space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-950/60 px-2.5 py-1 rounded border border-blue-800/40">
                    {project.role}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-100">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 px-4 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-200 text-sm font-medium transition"
                >
                  Source Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. CONTACT SECTION WITH FIX-NOW CLIENT-SIDE VALIDATION */}
      <section id="contact" className="w-full space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="text-slate-400">
            Have a project in mind or want to discuss backend architecture? Leave a message below.
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur">
          {/* Status Message Banner */}
          {formStatus.type === "error" && (
            <div
              id="form-error-banner"
              className="mb-6 p-4 rounded-lg bg-red-950/80 border border-red-500/60 text-red-200 text-sm flex items-start gap-3 animate-shake"
              role="alert"
            >
              <svg
                className="w-5 h-5 text-red-400 shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <strong className="font-semibold">Validation Error:</strong>{" "}
                {formStatus.message}
              </div>
            </div>
          )}

          {formStatus.type === "success" && (
            <div
              id="form-success-banner"
              className="mb-6 p-4 rounded-lg bg-emerald-950/80 border border-emerald-500/60 text-emerald-200 text-sm flex items-start gap-3"
              role="status"
            >
              <svg
                className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div>
                <strong className="font-semibold">Success!</strong>{" "}
                {formStatus.message}
              </div>
            </div>
          )}

          <form onSubmit={handleFormSubmit} className="space-y-5" noValidate>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-300 mb-1.5"
              >
                Your Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="e.g. Alex Johnson"
                className={`w-full px-4 py-3 rounded-lg bg-slate-950 border text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 transition ${
                  fieldErrors.name
                    ? "border-red-500 focus:ring-red-500/40"
                    : "border-slate-800 focus:border-blue-500 focus:ring-blue-500/20"
                }`}
              />
              {fieldErrors.name && (
                <p className="mt-1 text-xs text-red-400">
                  Please enter your full name.
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-300 mb-1.5"
              >
                Your Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="alex@company.com"
                className={`w-full px-4 py-3 rounded-lg bg-slate-950 border text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 transition ${
                  fieldErrors.email
                    ? "border-red-500 focus:ring-red-500/40"
                    : "border-slate-800 focus:border-blue-500 focus:ring-blue-500/20"
                }`}
              />
              {fieldErrors.email && (
                <p className="mt-1 text-xs text-red-400">
                  Please enter a valid email address.
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-300 mb-1.5"
              >
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your backend or full-stack needs..."
                className={`w-full px-4 py-3 rounded-lg bg-slate-950 border text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 transition ${
                  fieldErrors.message
                    ? "border-red-500 focus:ring-red-500/40"
                    : "border-slate-800 focus:border-blue-500 focus:ring-blue-500/20"
                }`}
              />
              {fieldErrors.message && (
                <p className="mt-1 text-xs text-red-400">
                  Please enter a message (minimum 5 characters).
                </p>
              )}
            </div>

            <button
              type="submit"
              id="submit-contact"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800/60 disabled:cursor-not-allowed text-white font-semibold shadow-lg shadow-blue-600/25 transition duration-200 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </section>

      {/* 4. FOOTER & FLYRANK GRADUATE BADGE */}
      <footer className="w-full pt-10 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>
          &copy; {new Date().getFullYear()} Rawy Ali Salim. All rights reserved.
        </p>

        {/* FlyRank Graduate Badge */}
        <div className="flex items-center gap-2">
          <a
            href="https://aifluency.flyrank.ai/verify/rawysalim"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-amber-500/30 bg-amber-950/20 hover:bg-amber-950/40 text-amber-300 text-xs font-semibold transition"
            title="Verify FlyRank Completion Badge"
          >
            <svg
              className="w-4 h-4 text-amber-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>FlyRank Graduate Verified</span>
          </a>
        </div>
      </footer>
    </main>
  );
}
