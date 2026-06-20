"use client";

import { motion } from "framer-motion";
import Navbar from "@/app/Components/Navbar";
import { FaEnvelope, FaLinkedin, FaGithub, FaDownload, FaPython, FaReact } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiOpenai } from "react-icons/si";
import Link from "next/link";

export default function ResumePage() {
  const skills = {
    "AI & Machine Learning": [
      "OpenAI API (GPT-4, Claude)",
      "LangChain",
      "Agentic AI Systems",
      "Prompt Engineering",
      "AI-Driven Development",
    ],
    "Programming Languages": [
      "Python",
      "TypeScript",
      "JavaScript",
      "HTML/CSS",
    ],
    "Frameworks & Libraries": [
      "Next.js",
      "React",
      "Streamlit",
      "Tailwind CSS",
      "Framer Motion",
    ],
    "Tools & Platforms": [
      "Git/GitHub",
      "Vercel",
      "Claude Code",
      "Sanity CMS",
      "Spec-Driven Development",
    ],
  };

  const experience = [
    {
      title: "AI Humanoid Robotics Book",
      role: "Author & Developer",
      period: "2026",
      description: "Created comprehensive digital book on humanoid robotics using spec-driven development and Claude Code.",
      achievements: [
        "Researched and structured technical content on robotics fundamentals and AI integration",
        "Leveraged AI-assisted workflows for content generation and refinement",
        "Built interactive Next.js application for book presentation",
      ],
      tech: ["Claude Code", "Spec-Driven Development", "Next.js", "AI Prompting"],
    },
    {
      title: "Secure Data Encryption System",
      role: "Python Developer",
      period: "2025-2026",
      description: "Built Python-based encryption application with Streamlit interface for secure data protection.",
      achievements: [
        "Implemented industry-standard cryptographic algorithms",
        "Designed intuitive UI for non-technical users",
        "Integrated secure key management system",
      ],
      tech: ["Python", "Streamlit", "Cryptography", "Security"],
    },
    {
      title: "Task Management Application",
      role: "Full Stack Developer",
      period: "2025",
      description: "Developed full-stack task manager with authentication and persistent storage.",
      achievements: [
        "Built user authentication system from scratch",
        "Implemented CRUD operations with database integration",
        "Created responsive UI with TypeScript type safety",
      ],
      tech: ["Next.js", "TypeScript", "Authentication", "Database"],
    },
  ];

  const education = [
    {
      degree: "Self-Taught AI Engineer",
      institution: "Independent Study & Online Courses",
      period: "2024 - Present",
      focus: "Specialized in AI engineering, agentic systems, and modern web development",
    },
  ];

  return (
    <main className="bg-background">
      <Navbar />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen text-white py-32 px-6"
      >
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">
              Mehwish Malik
            </h1>
            <p className="text-2xl text-gold-light mb-6">AI Engineer</p>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 text-gold-light mb-6">
              <a href="mailto:mehwishmalik@example.com" className="flex items-center gap-2 hover:text-gold transition-colors">
                <FaEnvelope /> mehwishmalik@example.com
              </a>
              <a href="https://www.linkedin.com/in/mehwish-malik-b548412ba" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://github.com/Mehwish-Malik" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors">
                <FaGithub /> GitHub
              </a>
            </div>

            {/* Download Button */}
            <motion.a
              href="/Mehwish-Malik-Resume.pdf"
              download="Mehwish-Malik-Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-background px-6 py-3 rounded-lg font-semibold transition-all"
            >
              <FaDownload /> Download PDF
            </motion.a>
          </motion.div>

          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gold mb-4">Professional Summary</h2>
            <div className="bg-surface border-2 border-gold-dark rounded-xl p-6">
              <p className="text-gold-light leading-relaxed">
                AI Engineer specializing in <span className="text-gold font-semibold">Agentic AI</span>, <span className="text-gold font-semibold">AI-Driven Development</span>, and full-stack application development.
                Experienced in building intelligent systems with Python and TypeScript, leveraging modern LLM APIs to create autonomous agents and AI-powered products.
                Strong background in spec-driven development, prompt engineering, and creating intuitive user experiences.
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gold mb-6">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, items], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-surface border-2 border-gold-dark hover:border-gold rounded-xl p-6 transition-all"
                >
                  <h3 className="text-xl font-bold text-gold mb-3">{category}</h3>
                  <ul className="space-y-2">
                    {items.map((skill, i) => (
                      <li key={i} className="text-gold-light flex items-center gap-2">
                        <span className="w-2 h-2 bg-gold rounded-full"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience / Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gold mb-6">Key Projects & Experience</h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-surface border-2 border-gold-dark hover:border-gold rounded-xl p-6 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-gold-light">{exp.title}</h3>
                      <p className="text-gold">{exp.role}</p>
                    </div>
                    <span className="text-gold-dark font-semibold mt-2 md:mt-0">{exp.period}</span>
                  </div>

                  <p className="text-gold-light/80 mb-4">{exp.description}</p>

                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gold-light flex items-start gap-2">
                        <span className="text-gold mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-semibold bg-gold/10 text-gold border border-gold/30 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gold mb-6">Education</h2>
            {education.map((edu, index) => (
              <div key={index} className="bg-surface border-2 border-gold-dark rounded-xl p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gold-light">{edu.degree}</h3>
                    <p className="text-gold">{edu.institution}</p>
                  </div>
                  <span className="text-gold-dark font-semibold mt-2 md:mt-0">{edu.period}</span>
                </div>
                <p className="text-gold-light/80 mt-3">{edu.focus}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <div className="bg-surface border-2 border-gold rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gold mb-4">Let's Work Together</h3>
              <p className="text-gold-light mb-6">
                I'm actively seeking opportunities in AI Engineering, Full Stack Development, and LLM Engineering roles.
              </p>
              <Link
                href="/Contact"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-background px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
