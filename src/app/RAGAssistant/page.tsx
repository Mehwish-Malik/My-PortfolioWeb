"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const suggestedPrompts = [
  "Who is Mehwish?",
  "What AI technologies does she use?",
  "Tell me about her projects.",
  "What is her experience with AI agents?",
  "What can she build?",
  "Tell me about UBL Nexus AI.",
  "What technologies does she work with?",
];

const SuggestionPrompt = ({ text }: { text: string }) => {
  return (
    <motion.span
      key={text}
      whileHover={{ scale: 1.05, background: "primary/20" }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 text-primary text-sm hover:bg-primary/30 cursor-pointer transition-all duration-200"
    >
      {text}
    </motion.span>
  );
};

export default function RagPortfolioAssistant() {
  const [messages, setMessages] = React.useState<
    { id: number; role: "user" | "assistant"; content: string }[]
  >([]);
  const [input, setInput] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { id: messages.length, role: "user" as const, content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // In a real implementation, this would call the API with RAG
      // For now, we'll simulate a brief loading state
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulated grounded response based on portfolio knowledge
      const groundedResponses: Record<string, string> = {
        "Who is Mehwish?": "Mehwish is an AI Engineer building intelligent, agentic and AI-powered products. She specializes in agentic AI, LLM applications, RAG, and AI-driven development, combining software engineering with practical AI product building.",
        "What AI technologies does she use?": "Mehwish works with OpenAI, Claude, Gemini, and Qwen models. She also uses OpenCode and Gemini CLI / Claude CLI for AI-assisted development and workflow automation.",
        "Tell me about her projects?": "Mehwish has built UBL Nexus AI, a banking AI platform with voice banking assistant, loan eligibility checker, fraud alert agent, and financial health score. She also built a Digital Full-Time Employee AI agent automation platform.",
        "What is her experience with AI agents?": "Mehwish has worked with agentic AI systems, multi-agent workflows, and LLM application development. She combines Python and TypeScript with Next.js/React to build practical AI-powered products and intelligent automation.",
        "What can she build?": "Mehwish can build AI-powered products, agentic workflows, RAG systems, LLM applications, AI automation, and intelligent web applications. Her stack includes Python, TypeScript, Next.js, React, and various LLM APIs.",
        "Tell me about UBL Nexus AI?": "UBL Nexus AI is a banking AI platform concept featuring a voice banking assistant, loan eligibility checker, fraud alert agent, and financial health score. It's built with Next.js, TypeScript, AI agents, and Recharts for financial visualizations.",
        "What technologies does she work with?": "Mehwish works with OpenAI, Claude, Gemini, Qwen, OpenCode, Gemini CLI, Claude CLI, and Qwen. Her primary programming languages are Python and TypeScript, with frontend expertise in Next.js and React.",
      };

      const response =
        groundedResponses[input] ||
        "I'd be happy to tell you more about my work with AI engineering, agentic systems, and the projects I've built. Feel free to ask me specific questions!";

      const assistantMessage = {
        id: messages.length + 1,
        role: "assistant" as const,
        content: response,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage = {
        id: messages.length + 1,
        role: "assistant" as const,
        content: "Sorry, I encountered an error. Please try again.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section
      id="ai-assistant"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen bg-secondary py-24 px-6 relative overflow-hidden"
    >

      {/* Section Container */}
      <div className="relative z-10 max-w-4xl mx-auto w-full">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            Ask My AI Assistant
          </h2>
          <p className="text-secondary/70">
            Curious about my work? Ask my portfolio.
          </p>
        </motion.div>

        {/* Suggested Prompts */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-6 flex flex-wrap gap-3 justify-center"
        >
          {suggestedPrompts.map((prompt) => (
            <SuggestionPrompt key={prompt} text={prompt} />
          ))}
        </motion.div>

        {/* Chat History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="h-80 border border-primary/20 rounded-2xl bg-surface/50 p-6 overflow-y-auto space-y-4"
        >
          {/* Empty State */}
          {messages.length === 0 && (
            <motion.p
              className="text-primary/50 text-center py-8"
            >
              Start by selecting a prompt above or type your own question
            </motion.p>
          )}

          {/* Messages */}
          {messages.map((message) => (
            <motion.div
              key={message.id}
              className={`flex ${message.role === "user" ? "flex-row-reverse" : "flex-row"} items-start gap-3`}
            >
              <div className={`max-w-[70%] px-4 py-2 rounded-xl ${message.role === "user" ? "bg-primary/20 text-secondary" : "bg-primary/10 text-primary"}`}>
                <p className="text-sm leading-relaxed">{message.content}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Input Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          viewport={{ once: true }}
          className="pt-4 flex gap-2"
        >
          <form onSubmit={sendMessage} className="relative flex-1">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 pl-3">
              {/* Loading state */}
              {isLoading && (
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary animate-spin" viewBox="0 0 24 24">
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
              )}

              <svg className="w-5 h-5 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14l6-6-6-6" />
              </svg>
            </div>

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me about my work..."
              disabled={isLoading}
              className={`w-full pl-14 p-4 py-3 rounded-lg bg-surface border border-border focus:outline-none transition-colors duration-200 ${
                isLoading ? "opacity-50 cursor-not-allowed" : "placeholder-secondary text-primary"
              }`}
              aria-label="Ask a question"
            />
          </form>

          {/* Send button */}
          <button
            type="submit"
            className={`flex-1 items-center gap-2 bg-primary hover:bg-secondary text-background px-5 py-3 rounded-lg font-medium transition-colors ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoading || !input.trim()}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Send
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}