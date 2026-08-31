"use client";

import { motion } from "framer-motion";

export default function SkillsSection() {
  const skills = {
    "AI Engineering": [
      { name: "Agentic AI", level: "Advanced" },
      { name: "RAG Systems", level: "Advanced" },
      { name: "LLM Applications", level: "Advanced" },
      { name: "Multi-Agent Systems", level: "Intermediate" },
      { name: "Prompt Engineering", level: "Advanced" },
      { name: "AI Automation", level: "Advanced" },
    ],
    "Development": [
      { name: "Python", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
      { name: "React", level: "Advanced" },
      { name: "Node.js", level: "Intermediate" },
      { name: "PostgreSQL", level: "Intermediate" },
    ],
    "AI Tools & Platforms": [
      { name: "OpenAI API", level: "Advanced" },
      { name: "Claude API", level: "Advanced" },
      { name: "Gemini API", level: "Advanced" },
      { name: "LangGraph", level: "Intermediate" },
      { name: "LangChain", level: "Intermediate" },
      { name: "CrewAI", level: "Intermediate" },
    ],
    "Development Workflow": [
      { name: "AI-Driven Development", level: "Advanced" },
      { name: "Spec-Driven Development", level: "Advanced" },
      { name: "Git & GitHub", level: "Advanced" },
      { name: "VS Code", level: "Advanced" },
    ],
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-background text-foreground py-32 px-6 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Skills & Technologies
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Technical Expertise
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-accent-muted mb-20 max-w-2xl"
        >
          A focused stack for building intelligent, production-ready AI systems.
        </motion.p>

        {/* Skills grid */}
        <div className="space-y-16">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Category header */}
              <h3 className="text-xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                {category}
              </h3>

              {/* Skills list */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="flex items-center justify-between p-4 rounded-lg bg-surface-soft border border-border hover:border-primary/50 transition-all duration-300">
                      <div className="flex-1">
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {skill.name}
                        </p>
                        <p className="text-xs text-accent-subtle mt-1">
                          {skill.level}
                        </p>
                      </div>

                      {/* Visual indicator */}
                      <div className="ml-4">
                        <div className="w-2 h-2 rounded-full bg-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-border"
        >
          <p className="text-accent-muted text-center max-w-2xl mx-auto">
            Continuously learning and adapting to new AI technologies and methodologies.
            My focus is on practical implementation over theoretical knowledge.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
