"use client";

import { motion } from "framer-motion";

export default function AIEngineeringShowcase() {
  const systemFlow = [
    {
      stage: "Input",
      title: "User Query",
      description: "Natural language request",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      stage: "Orchestration",
      title: "AI Agent",
      description: "Plans and coordinates",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
    {
      stage: "Tools",
      title: "Tool Execution",
      description: "APIs, search, databases",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      stage: "Knowledge",
      title: "RAG Retrieval",
      description: "Context from vector DB",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      stage: "Intelligence",
      title: "LLM Processing",
      description: "Reasoning and generation",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      stage: "Output",
      title: "Response",
      description: "Grounded answer with citations",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="ai-architecture"
      className="relative min-h-screen bg-background text-foreground py-32 px-6 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

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
            System Architecture
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
          How AI Systems Work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-accent-muted mb-20 max-w-2xl"
        >
          A sophisticated pipeline that transforms user queries into intelligent, grounded responses through agentic orchestration.
        </motion.p>

        {/* Architecture Flow - Vertical on mobile, horizontal on desktop */}
        <div className="relative">

          {/* Connection line - desktop only */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />

          {/* Stages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
            {systemFlow.map((stage, index) => (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Stage card */}
                <div className="relative bg-surface-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                    {stage.icon}
                  </div>

                  {/* Stage number */}
                  <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-surface-soft border border-border flex items-center justify-center">
                    <span className="text-xs font-bold text-accent-subtle">{index + 1}</span>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-primary uppercase tracking-wider">
                      {stage.stage}
                    </p>
                    <h3 className="text-base font-semibold text-foreground">
                      {stage.title}
                    </h3>
                    <p className="text-sm text-accent-muted leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>

                {/* Arrow connector - mobile only */}
                {index < systemFlow.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <svg className="w-6 h-6 text-border" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-24 pt-16 border-t border-border"
        >
          <h3 className="text-2xl font-bold mb-8">Why This Architecture Matters</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="p-6 rounded-xl bg-surface-soft border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Autonomous Decision Making</h4>
              <p className="text-sm text-accent-muted leading-relaxed">
                Agents plan their own execution path, choose appropriate tools, and adapt to changing context without hardcoded logic.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface-soft border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Grounded Responses</h4>
              <p className="text-sm text-accent-muted leading-relaxed">
                RAG retrieval ensures answers are based on actual data, not hallucinations, with traceable sources and citations.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface-soft border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Continuous Learning</h4>
              <p className="text-sm text-accent-muted leading-relaxed">
                Systems improve over time through feedback loops, memory persistence, and iterative refinement of workflows.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
