"use client";

import { motion } from "framer-motion";
import { FaPython, FaReact, FaGithub } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiStreamlit,
} from "react-icons/si";
import { TbBrain, TbRobotFace, TbNetwork, TbSparkles, TbBrandOpenai } from "react-icons/tb";
import { HiCode } from "react-icons/hi";
import Navbar from "@/app/Components/Navbar";

type SkillItemProps = {
  name: string;
  icon?: React.ReactNode;
};

function SkillItem({ name, icon }: SkillItemProps) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        boxShadow: "0 8px 20px rgba(201, 169, 97, 0.25)",
        borderColor: "#c9a961"
      }}
      className="px-5 py-3 bg-surface/80 backdrop-blur-sm border-2 border-gold-dark/50
        rounded-lg transition-all duration-300 group cursor-default
        hover:bg-surface flex items-center gap-3 justify-center"
    >
      {icon && (
        <span className="text-xl text-gold group-hover:text-gold-dark transition-colors">
          {icon}
        </span>
      )}
      <span className="text-sm md:text-base font-medium text-gold-light group-hover:text-gold
        transition-colors tracking-wide">
        {name}
      </span>
    </motion.div>
  );
}

type SkillCategoryProps = {
  title: string;
  description: string;
  skills: { name: string; icon?: React.ReactNode }[];
  delay?: number;
};

function SkillCategory({ title, description, skills, delay = 0 }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="mb-16 last:mb-0"
    >
      {/* Category Header */}
      <div className="mb-8">
        <h3 className="text-3xl md:text-4xl font-bold text-gold mb-2">
          {title}
        </h3>
        <p className="text-gold-light/70 text-sm md:text-base">
          {description}
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay + index * 0.05, duration: 0.3 }}
            viewport={{ once: true }}
          >
            <SkillItem {...skill} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const aiEngineering = [
    { name: "Agentic AI", icon: <TbRobotFace /> },
    { name: "Prompt Engineering", icon: <TbSparkles /> },
    { name: "Multi-Agent Systems", icon: <TbNetwork /> },
    { name: "MCP", icon: <TbBrandOpenai /> },
    { name: "AI Workflow Design", icon: <TbBrain /> },
    { name: "Spec Driven Development", icon: <HiCode /> },
  ];

  const programming = [
    { name: "Python", icon: <FaPython /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "JavaScript", icon: <SiJavascript /> },
  ];

  const frontend = [
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  ];

  const tools = [
    { name: "Claude Code" },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Streamlit", icon: <SiStreamlit /> },
    { name: "Sanity CMS" },
    { name: "Docusaurus" },
  ];

  const backend = [
    { name: "FastAPI" },
    { name: "SQLite" },
    { name: "REST APIs" },
    { name: "Database Design" },
    { name: "Docker" },
    { name: "Kubernetes" },
  ];

  return (
    <main className="bg-background">
      <Navbar />
      <motion.section
        id="skills"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-screen relative text-white py-32 px-6 overflow-hidden"
      >
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#c9a961 1px, transparent 1px), linear-gradient(90deg, #c9a961 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Page Heading */}
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-4 tracking-wide
              bg-gradient-to-r from-gold-light via-gold to-gold-dark
              text-transparent bg-clip-text text-center"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {"Technical Skills".split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeInOut" },
                  },
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-center text-gold-light text-base md:text-lg mb-20"
          >
            Building intelligent systems with modern tools and frameworks
          </motion.p>

          {/* Skill Categories */}
          <SkillCategory
            title="AI Engineering"
            description="Designing and deploying intelligent autonomous systems"
            skills={aiEngineering}
            delay={0.2}
          />

          <SkillCategory
            title="Programming"
            description="Core languages for AI and full-stack development"
            skills={programming}
            delay={0.3}
          />

          <SkillCategory
            title="Frontend"
            description="Modern frameworks for building user interfaces"
            skills={frontend}
            delay={0.4}
          />

          <SkillCategory
            title="Backend"
            description="Server-side technologies and infrastructure"
            skills={backend}
            delay={0.5}
          />

          <SkillCategory
            title="Tools"
            description="Development tools and platforms"
            skills={tools}
            delay={0.6}
          />
        </div>
      </motion.section>
    </main>
  );
}
