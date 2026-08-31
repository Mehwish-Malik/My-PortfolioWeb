"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowRight, HiCode, HiLightningBolt, HiCube } from "react-icons/hi";
import Link from "next/link";

export default function HeroSection() {
  const metrics = [
    { icon: HiCode, label: "Production AI Systems", value: "10+", delay: 0.2 },
    { icon: HiLightningBolt, label: "Tech Stack Mastery", value: "8+", delay: 0.3 },
    { icon: HiCube, label: "Years Experience", value: "2+", delay: 0.4 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden bg-background">

      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#8B5CF6 1px, transparent 1px), linear-gradient(90deg, #8B5CF6 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Gradient accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Content - takes more space */}
          <div className="lg:col-span-7 space-y-8">

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-soft border border-border"
            >
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-accent">Available for new opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                <span className="text-foreground">Mehwish</span>
                <br />
                <span className="text-foreground">Malik</span>
              </h1>
            </motion.div>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2"
            >
              <p className="text-2xl md:text-3xl font-medium text-primary">
                AI Engineer
              </p>
              <p className="text-lg md:text-xl text-accent-muted max-w-2xl leading-relaxed">
                Building intelligent systems with agentic AI, RAG, and LLM applications.
                I turn complex AI concepts into production-ready products.
              </p>
            </motion.div>

            {/* Tech stack pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-2"
            >
              {["Python", "TypeScript", "Next.js", "Agentic AI", "RAG", "LLM Systems"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-medium bg-surface-soft border border-border rounded-full text-accent"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link
                href="/Projects"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-background rounded-lg font-medium transition-all duration-300"
              >
                View Projects
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/Contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-border hover:border-primary text-foreground rounded-lg font-medium transition-all duration-300"
              >
                Get in Touch
              </Link>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4 pt-2"
            >
              <Link
                href="https://github.com/Mehwish-Malik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-muted hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/mehwish-malik-b548412ba"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-muted hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </Link>
            </motion.div>
          </div>

          {/* Right: Metrics & Visual Elements */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Animated metric cards */}
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: metric.delay }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-primary/5 rounded-xl blur-xl group-hover:bg-primary/10 transition-all duration-300" />
                <div className="relative bg-surface-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm text-accent-muted mb-2">{metric.label}</p>
                      <p className="text-4xl font-bold text-primary">{metric.value}</p>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <metric.icon className="text-primary" size={24} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* AI Flow Visualization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative mt-4"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-xl blur-xl" />
              <div className="relative bg-surface-card border border-border rounded-xl p-6">
                <p className="text-xs text-accent-muted mb-4 font-medium uppercase tracking-wider">
                  Core Expertise
                </p>
                <div className="space-y-3">
                  {[
                    { label: "Agentic Systems", level: 95 },
                    { label: "RAG Pipelines", level: 90 },
                    { label: "Full-Stack AI", level: 88 },
                  ].map((skill, index) => (
                    <div key={skill.label}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-accent">{skill.label}</span>
                        <span className="text-primary font-medium">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-surface-soft rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-primary to-primary-dark rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
