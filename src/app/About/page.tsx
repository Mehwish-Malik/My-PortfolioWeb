"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-background text-foreground py-32 px-6 overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Who I Am
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 leading-tight max-w-4xl"
        >
          Building production AI systems,
          <span className="text-primary"> not proof-of-concepts</span>
        </motion.h2>

        {/* Two-column editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">

          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-accent leading-relaxed">
              I'm Mehwish, an AI Engineer who specializes in building production-ready intelligent systems.
              While others talk about AI potential, I'm building agentic workflows, RAG pipelines, and
              AI-powered applications that deliver tangible value.
            </p>

            <p className="text-lg text-accent leading-relaxed">
              My approach combines software engineering discipline with practical AI implementation.
              I don't chase every new model release—I focus on architecting reliable systems that
              businesses can depend on.
            </p>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-accent leading-relaxed">
              What sets my work apart is the intersection of strong engineering fundamentals with
              deep AI systems understanding. I build with TypeScript and Python, design agentic
              architectures with LangGraph, and implement RAG systems that actually improve with use.
            </p>

            <p className="text-lg text-accent leading-relaxed">
              From banking AI platforms to autonomous workflow agents, my projects demonstrate
              that AI engineering is about thoughtful system design, not just API integration.
            </p>

            {/* Resume CTAs */}
            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href="/Resume/Mehwish-Malik-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-background rounded-lg font-medium transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View Resume
              </a>
              <a
                href="/Resume/Mehwish-Malik-Resume.pdf"
                download="Mehwish-Malik-Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-primary hover:bg-primary/10 text-primary rounded-lg font-medium transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download
              </a>
            </div>
          </motion.div>
        </div>

        {/* What I focus on */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-border pt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-foreground">What I Focus On</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-surface-soft border border-border flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-foreground">Agentic AI</h4>
              <p className="text-accent-muted text-sm leading-relaxed">
                Multi-agent systems that coordinate, plan, and execute complex workflows autonomously.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-surface-soft border border-border flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-foreground">RAG Systems</h4>
              <p className="text-accent-muted text-sm leading-relaxed">
                Retrieval-augmented generation that grounds AI responses in your data with precision.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-surface-soft border border-border flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-foreground">AI Automation</h4>
              <p className="text-accent-muted text-sm leading-relaxed">
                Intelligent workflows that reduce manual effort while maintaining quality and control.
              </p>
            </div>

          </div>
        </motion.div>

        {/* Tech approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-border pt-16 mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-foreground">How I Build</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            <div>
              <h4 className="text-base font-semibold text-primary mb-4 uppercase tracking-wider">
                Engineering Stack
              </h4>
              <ul className="space-y-3 text-accent">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1.5">→</span>
                  <span>TypeScript-first architecture with Next.js and React</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1.5">→</span>
                  <span>Python for AI workflows and backend orchestration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1.5">→</span>
                  <span>PostgreSQL for reliable data persistence</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-base font-semibold text-primary mb-4 uppercase tracking-wider">
                AI Architecture
              </h4>
              <ul className="space-y-3 text-accent">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1.5">→</span>
                  <span>LangGraph and CrewAI for agent orchestration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1.5">→</span>
                  <span>OpenAI, Claude, and Gemini model integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1.5">→</span>
                  <span>Vector databases for semantic search and RAG</span>
                </li>
              </ul>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
