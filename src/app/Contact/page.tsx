"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-surface text-foreground py-32 px-6 flex items-center overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center">

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-soft border border-border mb-8">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-accent">Available for opportunities</span>
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
        >
          Let's Build Something
          <span className="block text-primary">Intelligent Together</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-accent-muted mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          I'm open to full-time roles, contract work, and consulting opportunities
          in AI engineering and agentic system development.
        </motion.p>

        {/* Contact methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {/* Email */}
          <Link
            href="mailto:malik.mehwish0078@gmail.com"
            className="group relative p-8 rounded-2xl bg-surface-card border-2 border-primary hover:border-primary-light transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 mx-auto group-hover:scale-110 transition-transform">
              <FaEnvelope size={24} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
            <p className="text-sm text-accent-muted mb-3">Best for detailed inquiries</p>
            <p className="text-sm text-primary font-medium">malik.mehwish0078@gmail.com</p>
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/mehwish-malik-b548412ba"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-8 rounded-2xl bg-surface-card border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 mx-auto group-hover:scale-110 transition-transform">
              <FaLinkedin size={24} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">LinkedIn</h3>
            <p className="text-sm text-accent-muted mb-3">Professional networking</p>
            <p className="text-sm text-primary font-medium">Connect with me</p>
          </Link>

          {/* GitHub */}
          <Link
            href="https://github.com/Mehwish-Malik"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-8 rounded-2xl bg-surface-card border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 mx-auto group-hover:scale-110 transition-transform">
              <FaGithub size={24} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">GitHub</h3>
            <p className="text-sm text-accent-muted mb-3">Open source contributions</p>
            <p className="text-sm text-primary font-medium">View my code</p>
          </Link>
        </motion.div>

        {/* What I'm looking for */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto p-8 rounded-2xl bg-surface-card border border-border"
        >
          <h3 className="text-xl font-bold mb-6 text-foreground">Open to Opportunities</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mx-auto">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="font-medium text-foreground">AI Engineering Roles</p>
              <p className="text-accent-muted">Full-time or contract</p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mx-auto">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <p className="font-medium text-foreground">Consulting Projects</p>
              <p className="text-accent-muted">Agentic AI systems</p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mx-auto">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="font-medium text-foreground">Remote-First</p>
              <p className="text-accent-muted">Global collaboration</p>
            </div>
          </div>
        </motion.div>

        {/* Quick facts */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-accent-muted"
        >
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Based in Pakistan</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Responds within 24 hours</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Open to global opportunities</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
