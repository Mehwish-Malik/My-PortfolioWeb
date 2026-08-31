"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HiExternalLink, HiCode, HiArrowRight } from "react-icons/hi";
import { getFeaturedProjects, getSecondaryProjects, Project } from "../data/projects";

// Visual workflow component for AI systems
function AIWorkflowPreview({ stages }: { stages: string[] }) {
  return (
    <div className="flex items-center justify-between gap-3 py-8">
      {stages.map((stage, index) => (
        <div key={stage} className="flex items-center gap-3 flex-1">
          <div className="flex-1 flex flex-col items-center">
            <div className="w-full aspect-square max-w-[80px] rounded-xl bg-primary/10 border-2 border-primary/30 flex items-center justify-center mb-2">
              <span className="text-xs font-bold text-primary">{index + 1}</span>
            </div>
            <p className="text-xs text-center text-accent-muted font-medium">{stage}</p>
          </div>
          {index < stages.length - 1 && (
            <HiArrowRight className="text-primary/50 flex-shrink-0" size={20} />
          )}
        </div>
      ))}
    </div>
  );
}

// Featured project card with large editorial layout
function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group mb-32"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-start ${!isEven ? 'lg:flex-row-reverse' : ''}`}>

        {/* Visual Preview */}
        <div className={`lg:col-span-7 ${!isEven ? 'lg:order-2' : ''}`}>
          <div className="relative">
            {/* Main image */}
            <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-border bg-surface-card relative group-hover:border-primary/50 transition-all duration-500">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"
                className={project.id === 'ai-resume-assistant' ? "object-contain object-center p-4" : "object-cover object-center"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            </div>

            {/* Visual workflow overlay */}
            {project.visualPreview && project.visualPreview.stages && (
              <div className="mt-6 p-6 rounded-xl bg-surface-card border border-border">
                <AIWorkflowPreview stages={project.visualPreview.stages} />
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className={`lg:col-span-5 space-y-6 ${!isEven ? 'lg:order-1' : ''}`}>

          {/* Project number and category */}
          <div className="flex items-center gap-4">
            <span className="text-4xl font-bold text-primary/20">0{index + 1}</span>
            <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            {project.title}
          </h3>

          {/* Tagline */}
          <p className="text-lg text-accent leading-relaxed">
            {project.tagline}
          </p>

          {/* AI Capabilities - if present */}
          {project.aiCapabilities && project.aiCapabilities.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-primary uppercase tracking-wider">
                AI Capabilities
              </h4>
              <div className="space-y-2">
                {project.aiCapabilities.slice(0, 3).map((capability, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    <span className="text-sm text-accent-muted">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Outcome */}
          <div className="p-4 rounded-lg bg-surface-soft border border-border">
            <p className="text-sm text-accent-muted leading-relaxed">
              <span className="font-semibold text-primary">Outcome: </span>
              {project.outcome}
            </p>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-surface-soft text-accent-muted rounded-full border border-border"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-2">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-background rounded-lg font-medium transition-all duration-300"
              >
                View Live
                <HiExternalLink />
              </Link>
            )}
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-border hover:border-primary text-foreground rounded-lg font-medium transition-all duration-300"
              >
                <HiCode />
                Source
              </Link>
            )}
          </div>
        </div>

      </div>
    </motion.article>
  );
}

// Secondary project card - smaller but still premium
function SecondaryProject({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group bg-surface-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-surface">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={project.id === 'ai-robotics-book' ? "object-contain object-center p-4 group-hover:scale-105 transition-transform duration-500" : "object-cover group-hover:scale-105 transition-transform duration-500"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 text-xs font-medium bg-surface-soft text-accent-muted rounded-full border border-border">
            {project.category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-foreground">
          {project.title}
        </h3>

        <p className="text-sm text-accent-muted leading-relaxed line-clamp-2">
          {project.tagline}
        </p>

        {/* Tech stack - compact */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium bg-surface-soft text-accent-subtle rounded border border-border"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex gap-3 pt-2">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline font-medium"
            >
              View Live →
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent-muted hover:text-foreground font-medium"
            >
              GitHub
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  const featuredProjects = getFeaturedProjects();
  const secondaryProjects = getSecondaryProjects();

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-background text-foreground py-32 px-6 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Selected Work
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
        >
          AI Systems in Production
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-accent-muted mb-20 max-w-2xl"
        >
          Building intelligent applications that solve real problems with agentic AI, RAG, and modern engineering.
        </motion.p>

        {/* Featured Projects */}
        <div className="mb-24">
          {featuredProjects.map((project, index) => (
            <FeaturedProject key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Secondary Projects */}
        {secondaryProjects.length > 0 && (
          <div className="pt-16 border-t border-border">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-12 text-foreground"
            >
              Additional Work
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {secondaryProjects.map((project) => (
                <SecondaryProject key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
