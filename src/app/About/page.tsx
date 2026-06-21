"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/app/Components/Navbar";
import Pic from "@/app/Assets/best.png";
import { FaRobot, FaCode, FaLaptopCode, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiOpenai } from "react-icons/si";
import { TbBrain } from "react-icons/tb";

// Neural network background component
function NeuralNetworkBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      <svg className="w-full h-full">
        <line x1="20%" y1="0%" x2="20%" y2="100%" stroke="#c9a961" strokeWidth="0.5" />
        <line x1="40%" y1="0%" x2="40%" y2="100%" stroke="#c9a961" strokeWidth="0.5" />
        <line x1="60%" y1="0%" x2="60%" y2="100%" stroke="#c9a961" strokeWidth="0.5" />
        <line x1="80%" y1="0%" x2="80%" y2="100%" stroke="#c9a961" strokeWidth="0.5" />
        <line x1="0%" y1="25%" x2="100%" y2="25%" stroke="#c9a961" strokeWidth="0.5" />
        <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="#c9a961" strokeWidth="0.5" />
        <line x1="0%" y1="75%" x2="100%" y2="75%" stroke="#c9a961" strokeWidth="0.5" />
        <circle cx="20%" cy="25%" r="2" fill="#c9a961" />
        <circle cx="40%" cy="50%" r="2" fill="#c9a961" />
        <circle cx="60%" cy="25%" r="2" fill="#c9a961" />
        <circle cx="80%" cy="75%" r="2" fill="#c9a961" />
      </svg>
    </div>
  );
}

export default function AboutSection() {
  const journeySteps = [
    {
      icon: <FaLaptopCode />,
      phase: "Frontend Development",
      description: "Started building user interfaces. Learned the fundamentals of web development and what makes great UX.",
    },
    {
      icon: <SiTypescript />,
      phase: "TypeScript & Next.js",
      description: "Discovered the power of type safety and server-side rendering. Built production apps with modern frameworks.",
    },
    {
      icon: <FaPython />,
      phase: "Python",
      description: "Needed more computational power. Python opened doors to data processing, automation, and scripting.",
    },
    {
      icon: <TbBrain />,
      phase: "AI Engineering",
      description: "The moment I integrated my first LLM API, everything clicked. Code could think, not just execute.",
    },
    {
      icon: <FaRobot />,
      phase: "Agentic AI",
      description: "Now building systems that don't wait for instructions—they plan, decide, and act autonomously.",
    },
  ];

  return (
    <main className="bg-background">
      <Navbar />

      {/* Section Divider - Visual Separator between Hero and About */}
      <div className="relative w-full h-24 md:h-32 bg-gradient-to-b from-background via-gold/5 to-background">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80%" }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"
          />
        </div>
      </div>

      <motion.section
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-screen relative text-white pt-16 md:pt-32 pb-32 px-6 flex flex-col items-center justify-start overflow-hidden"
      >
        <NeuralNetworkBg />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/50 to-background pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section Label - Mobile visibility improver */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <span className="inline-block px-6 py-2 bg-gold/10 border-2 border-gold/30 rounded-full text-gold text-sm md:text-base font-semibold tracking-wider uppercase">
              About Me
            </span>
          </motion.div>

          {/* Profile Image - Hidden on small mobile, visible on tablet+ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="hidden sm:flex justify-center mb-12"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-full blur-xl"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{ background: "radial-gradient(circle, #C8A97E 0%, transparent 70%)" }}
              />
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gold shadow-2xl">
                <Image
                  src={Pic}
                  alt="Mehwish Malik - AI Engineer"
                  width={256}
                  height={256}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent tracking-wide text-center"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {"My Journey".split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>

          {/* Story Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-20 space-y-6"
          >
            <p className="text-lg md:text-xl leading-relaxed text-gold-light">
              I&apos;m <span className="text-gold font-semibold">Mehwish Malik</span>, an AI Engineer who didn&apos;t start here. My path began with pixels and layouts, moved through type systems and frameworks, then found its purpose in <span className="text-gold font-semibold">intelligent systems that think</span>.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-gold-light/80">
              Each transition wasn&apos;t random—it was driven by hitting the limits of what I could build and asking, <span className="text-gold italic">&quot;What comes next?&quot;</span>
            </p>
          </motion.div>

          {/* Journey Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="relative">
              {/* Vertical connecting line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-gold-dark to-gold opacity-30" />

              {journeySteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-16 last:mb-0 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gold rounded-full border-4 border-background transform -translate-x-1/2 z-10" />

                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}>
                    <motion.div
                      whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(201, 169, 97, 0.2)" }}
                      className="bg-surface border-2 border-gold-dark hover:border-gold rounded-xl p-6 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <div className="text-3xl text-gold">{step.icon}</div>
                        <h3 className="text-xl font-bold text-gold-light">{step.phase}</h3>
                      </div>
                      <p className="text-gold-light/80 leading-relaxed">{step.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Current Focus */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gold">Where I Am Now</h3>
            <p className="text-lg md:text-xl leading-relaxed text-gold-light mb-6">
              I build <span className="text-gold font-semibold">agentic AI systems</span> that combine everything I&apos;ve learned: the UX intuition from frontend work, the architecture skills from TypeScript, the computational power of Python, and the intelligence of modern LLMs.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-gold-light/80">
              These systems don&apos;t just respond—they <span className="text-gold">plan</span>, <span className="text-gold">reason</span>, and <span className="text-gold">execute</span> complex tasks autonomously. That&apos;s the kind of engineering that keeps me up at night, in the best way.
            </p>
          </motion.div>

          {/* Professional Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            viewport={{ once: true }}
            className="mt-32 mb-20"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">
              Timeline
            </h3>
            <p className="text-center text-gold-light/70 mb-16 text-base md:text-lg">
              My evolution as an engineer
            </p>

            <div className="relative max-w-4xl mx-auto">
              {/* Vertical line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-gold-dark to-gold opacity-30" />

              {/* Timeline Items */}
              <TimelineItem
                year="2024"
                title="Frontend Development"
                description="Building responsive user interfaces with modern frameworks"
                index={0}
                delay={1.8}
              />

              <TimelineItem
                year="2025"
                title="Python and AI Foundations"
                description="Expanding into backend development and AI fundamentals"
                index={1}
                delay={1.95}
              />

              <TimelineItem
                year="2026"
                title="AI Engineering"
                items={["Agentic AI", "AI Driven Development"]}
                description="Designing autonomous intelligent systems"
                index={2}
                delay={2.1}
                highlight
              />

              <TimelineItem
                year="Future"
                title="Building the Future"
                items={["Digital Workers", "AI Products", "AI Startups"]}
                description="Creating the next generation of intelligent systems"
                index={3}
                delay={2.25}
                future
              />
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.4 }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-8 flex-wrap"
          >
            <div className="text-gold text-5xl hover:text-gold-dark transition-colors" title="Python">
              <FaPython />
            </div>
            <div className="text-gold text-5xl hover:text-gold-dark transition-colors" title="TypeScript">
              <SiTypescript />
            </div>
            <div className="text-gold text-5xl hover:text-gold-dark transition-colors" title="Next.js">
              <SiNextdotjs />
            </div>
            <div className="text-gold text-5xl hover:text-gold-dark transition-colors" title="AI">
              <SiOpenai />
            </div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}

type TimelineItemProps = {
  year: string;
  title: string;
  items?: string[];
  description: string;
  index: number;
  delay: number;
  highlight?: boolean;
  future?: boolean;
};

function TimelineItem({ year, title, items, description, index, delay, highlight, future }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`relative flex items-center mb-16 last:mb-0 ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Timeline dot with glow effect */}
      <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          className={`w-5 h-5 rounded-full border-4 border-background ${
            highlight ? "bg-gold" : future ? "bg-gold-dark" : "bg-gold-dark"
          }`}
          animate={
            highlight || future
              ? {
                  boxShadow: [
                    "0 0 0 0 rgba(201, 169, 97, 0.7)",
                    "0 0 0 10px rgba(201, 169, 97, 0)",
                    "0 0 0 0 rgba(201, 169, 97, 0)",
                  ],
                }
              : {}
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content card */}
      <div
        className={`w-full md:w-5/12 ml-20 md:ml-0 ${
          index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
        }`}
      >
        <motion.div
          whileHover={{
            y: -8,
            boxShadow: highlight || future ? "0 20px 40px rgba(201, 169, 97, 0.3)" : "0 15px 30px rgba(139, 115, 85, 0.2)",
          }}
          className={`p-6 md:p-8 rounded-2xl transition-all duration-300 ${
            highlight
              ? "bg-surface border-2 border-gold"
              : future
              ? "bg-gradient-to-br from-surface to-surface/80 border-2 border-gold-dark"
              : "bg-surface border-2 border-gold-dark hover:border-gold"
          }`}
        >
          {/* Year badge */}
          <div
            className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider mb-4 ${
              highlight
                ? "bg-gold text-background"
                : future
                ? "bg-gradient-to-r from-gold to-gold-dark text-background"
                : "bg-gold-dark/20 text-gold border border-gold-dark"
            }`}
          >
            {year}
          </div>

          {/* Title */}
          <h4
            className={`text-2xl md:text-3xl font-bold mb-3 ${
              highlight || future ? "text-gold" : "text-gold-light"
            }`}
          >
            {title}
          </h4>

          {/* Items (if any) */}
          {items && items.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {items.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-semibold bg-gold/10 text-gold border border-gold/30 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          )}

          {/* Description */}
          <p className="text-gold-light/80 leading-relaxed text-sm md:text-base">
            {description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
