// components/ProjectsSection.jsx
"use client";
import { motion } from "framer-motion";
import Navbar from "@/app/Components/Navbar";
import Link from "next/link";
import Image from "next/image";
import formpic from "@/app/Assets/resform.png";
import nike from "@/app/Assets/nike.png";
import blog from "@/app/Assets/blog.png";
import portfolio from "@/app/Assets/mypic.png";
import Task from "@/app/Assets/task.png";
import datasec from "@/app/Assets/secdata.png";
import passwordmeter from "@/app/Assets/passwors.png";
import roboticsbook from "@/app/Assets/ai-robotics.webp";
import { FaExternalLinkAlt, FaRocket, FaCheckCircle } from "react-icons/fa";
import { TbBulb, TbTarget } from "react-icons/tb";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

export default function ProjectsSection() {
  const headingWords = ["Featured", "Work"];

  // Featured project - Most relevant AI work
  const featuredProject = {
    title: "AI Humanoid Robotics Book",
    tagline: "Comprehensive digital book on humanoid robotics built with spec-driven development and AI-powered tooling",
    image: roboticsbook,
    link: "https://ai-robotics-book-three.vercel.app",
    problem: "Creating comprehensive technical documentation and educational content on complex robotics topics requires extensive research, structured thinking, and iterative refinement.",
    solution: "Developed a complete digital book on humanoid robotics using spec-driven development methodology and Claude Code. Leveraged AI-assisted prompting to research, structure, and generate high-quality technical content covering robotics fundamentals, AI integration, and practical applications.",
    tech: ["Claude Code", "Spec-Driven Development", "Next.js", "AI Prompting", "Technical Writing"],
    impact: "Demonstrated the power of AI-assisted development for creating educational content, showcasing advanced prompting techniques and systematic spec-driven workflows.",
  };

  const projects = [
    {
      title: "Secure Data Encryption System",
      image: datasec,
      link: "https://secure-data-encryption-cxryxnx3qeizxpn9efuqed.streamlit.app/",
      problem: "Organizations need secure, easy-to-use encryption tools for protecting sensitive data without complex setup or security expertise.",
      solution: "Built a Python encryption system with Streamlit interface, implementing industry-standard cryptographic algorithms for secure data protection and key management.",
      tech: ["Python", "Streamlit", "Cryptography", "Security"],
      impact: "Simplified data encryption process with intuitive interface while maintaining cryptographic security standards.",
    },
    {
      title: "Password Strength Analyzer",
      image: passwordmeter,
      link: "https://password-strength-meter-9u3jlfzrpytduj4u2ec6ak.streamlit.app/",
      problem: "Users create weak passwords that compromise security, lacking real-time feedback on password strength.",
      solution: "Developed a Python-based password analyzer that evaluates strength using entropy calculation and pattern detection, providing instant feedback.",
      tech: ["Python", "Streamlit", "Security Analysis", "Pattern Recognition"],
      impact: "Helped users create stronger passwords through real-time strength analysis and recommendations.",
    },
    {
      title: "Task Management Application",
      image: Task,
      link: "https://task-manager-git-main-mehwish-maliks-projects.vercel.app/login",
      problem: "Users need a simple, clean interface for organizing tasks with authentication and persistent storage.",
      solution: "Created a full-stack task manager with Next.js and TypeScript, featuring user authentication and organized task workflows.",
      tech: ["Next.js", "TypeScript", "Authentication", "Database"],
      impact: "Streamlined personal task organization with secure user accounts and persistent data storage.",
    },
    {
      title: "E-Commerce Platform",
      image: nike,
      link: "https://marketplace2-nike-1t3e.vercel.app",
      problem: "Modern e-commerce needs responsive design with dynamic product catalogs and seamless checkout flows.",
      solution: "Built an e-commerce platform with Next.js and Sanity CMS, featuring dynamic product management and responsive design.",
      tech: ["Next.js", "Sanity CMS", "API Integration", "Tailwind CSS"],
      impact: "Created a scalable e-commerce foundation with headless CMS for easy content management.",
    },
    {
      title: "Blog Platform",
      image: blog,
      link: "https://blog-website-eight-red.vercel.app",
      problem: "Content creators need fast, SEO-optimized platforms for publishing articles with modern frameworks.",
      solution: "Developed a headless CMS blog with Next.js, featuring markdown support, dynamic routing, and automatic SEO optimization.",
      tech: ["Next.js", "Sanity CMS", "Markdown", "SEO"],
      impact: "Enabled rapid content publishing with built-in SEO and modern developer experience.",
    },
  ];

  // Foundation projects - Early learning work
  const foundationProjects = [
    {
      title: "Interactive Resume Builder",
      image: formpic,
      link: "https://hackathone-milestones-5-swart.vercel.app",
      problem: "Learning project to understand form handling and dynamic content generation.",
      solution: "Built a resume builder as part of learning JavaScript, HTML, and CSS fundamentals.",
      tech: ["HTML", "CSS", "JavaScript"],
      impact: "Foundation project demonstrating core web development skills.",
    },
    {
      title: "Portfolio Website V1",
      image: portfolio,
      link: "https://my-portfolioweb-ochre.vercel.app",
      problem: "First portfolio website to practice HTML/CSS layout and design principles.",
      solution: "Created a personal portfolio website while learning frontend development fundamentals.",
      tech: ["HTML", "CSS", "Responsive Design"],
      impact: "Early project showcasing initial web development capabilities.",
    },
  ];

  return (
    <main className="bg-background">
      <Navbar />
      <motion.section
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-screen text-white py-32 px-6 relative overflow-hidden"
      >
        {/* Background grid */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#c9a961 1px, transparent 1px), linear-gradient(90deg, #c9a961 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Animated Heading */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 text-center">
            {headingWords.map((word, i) => (
              <motion.h2
                key={word}
                custom={i}
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-5xl sm:text-6xl md:text-7xl font-extrabold
                  bg-gradient-to-r from-gold-light via-gold to-gold-dark
                  text-transparent bg-clip-text tracking-wide"
              >
                {word}
              </motion.h2>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center text-gold-light/80 text-base md:text-lg mb-20 max-w-2xl mx-auto"
          >
            Python, Next.js, and full-stack applications solving real problems
          </motion.p>

          {/* Featured Project - Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <FeaturedProjectCard {...featuredProject} />
          </motion.div>

          {/* Main Projects Grid */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-gold">
              Recent Projects
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Foundation Projects - De-emphasized */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-gold-dark">
              Foundation Projects
            </h3>
            <p className="text-center text-gold-light/60 text-sm mb-8">
              Early learning projects demonstrating web development fundamentals
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {foundationProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProjectCard {...project} isFoundation />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

function FeaturedProjectCard({ title, tagline, image, link, problem, solution, tech, impact }) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(201, 169, 97, 0.25)" }}
      className="bg-surface border-2 border-gold rounded-2xl overflow-hidden
        shadow-2xl transition-all duration-500 group"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Image Side */}
        <div className="relative h-64 lg:h-full overflow-hidden">
          <div className="absolute top-4 left-4 z-10 bg-gold text-background px-4 py-1.5 rounded-full text-xs font-bold tracking-wide">
            FEATURED
          </div>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
        </div>

        {/* Content Side */}
        <div className="p-8 lg:p-10 flex flex-col justify-between">
          <div>
            {/* Title & Tagline */}
            <h3 className="text-3xl md:text-4xl font-bold text-gold mb-2 group-hover:text-gold-dark transition-colors">
              {title}
            </h3>
            <p className="text-gold-light/70 text-sm md:text-base mb-6 italic">
              {tagline}
            </p>

            {/* Problem */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <TbTarget className="text-gold text-xl" />
                <h4 className="text-gold-light font-semibold text-sm uppercase tracking-wider">
                  Problem
                </h4>
              </div>
              <p className="text-gold-light/80 text-sm leading-relaxed">
                {problem}
              </p>
            </div>

            {/* Solution */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <TbBulb className="text-gold text-xl" />
                <h4 className="text-gold-light font-semibold text-sm uppercase tracking-wider">
                  Solution
                </h4>
              </div>
              <p className="text-gold-light/80 text-sm leading-relaxed">
                {solution}
              </p>
            </div>

            {/* Impact */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <FaRocket className="text-gold text-lg" />
                <h4 className="text-gold-light font-semibold text-sm uppercase tracking-wider">
                  Impact
                </h4>
              </div>
              <p className="text-gold-light/80 text-sm leading-relaxed">
                {impact}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tech.map((item, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 text-xs font-semibold bg-gold/10
                    text-gold border border-gold/30 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Link */}
          <Link
            href={link}
            target="_blank"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-dark
              font-semibold transition-colors text-sm group/link"
          >
            View Live Project
            <FaExternalLinkAlt className="text-sm group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ title, image, link, problem, solution, tech, impact, isFoundation }) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: isFoundation ? "0 15px 30px rgba(139, 115, 85, 0.15)" : "0 20px 40px rgba(201, 169, 97, 0.2)" }}
      className={`bg-surface border-2 transition-all duration-500 group h-full flex flex-col rounded-2xl overflow-hidden shadow-xl ${
        isFoundation
          ? "border-gold-dark/30 hover:border-gold-dark/50"
          : "border-gold/20 hover:border-gold"
      }`}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-70" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3 className={`text-2xl font-bold mb-4 transition-colors ${
          isFoundation
            ? "text-gold-light/80 group-hover:text-gold-light"
            : "text-gold group-hover:text-gold-light"
        }`}>
          {title}
        </h3>

        {/* Problem */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <TbTarget className="text-gold text-lg" />
            <h4 className="text-gold-light font-semibold text-xs uppercase tracking-wider">
              Problem
            </h4>
          </div>
          <p className="text-gold-light/80 text-sm leading-relaxed">
            {problem}
          </p>
        </div>

        {/* Solution */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <FaCheckCircle className="text-gold text-lg" />
            <h4 className="text-gold-light font-semibold text-xs uppercase tracking-wider">
              Solution
            </h4>
          </div>
          <p className="text-gold-light/80 text-sm leading-relaxed">
            {solution}
          </p>
        </div>

        {/* Impact */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <FaRocket className="text-gold text-base" />
            <h4 className="text-gold-light font-semibold text-xs uppercase tracking-wider">
              Impact
            </h4>
          </div>
          <p className="text-gold-light/80 text-sm leading-relaxed">
            {impact}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-semibold bg-gold/10
                text-gold border border-gold/30 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Link */}
        <div className="mt-auto pt-4">
          <Link
            href={link}
            target="_blank"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-dark
              font-semibold transition-colors text-sm group/link"
          >
            View Project
            <FaExternalLinkAlt className="text-xs group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
