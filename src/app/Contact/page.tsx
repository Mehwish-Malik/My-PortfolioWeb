"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaBriefcase, FaCheckCircle } from "react-icons/fa";
import Navbar from "@/app/Components/Navbar";
import Link from "next/link";

// Animated constellation background
function ConstellationBg() {
  const stars = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-gold rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function ContactSection(): JSX.Element {
  const opportunities = [
    { icon: <FaBriefcase />, title: "AI Engineering", description: "Building intelligent systems and LLM applications" },
    { icon: <FaCheckCircle />, title: "Agentic AI", description: "Multi-agent systems and autonomous workflows" },
    { icon: <FaBriefcase />, title: "Software Engineering", description: "Full-stack development with modern frameworks" },
  ];

  const contactMethods = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "malik.mehwish0078@gmail.com",
      href: "mailto:malik.mehwish0078@gmail.com",
      description: "Best for detailed inquiries",
      primary: true,
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "Connect & Message",
      href: "https://www.linkedin.com/in/mehwish-malik-b548412ba",
      description: "Professional networking",
      primary: false,
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "View My Code",
      href: "https://github.com/Mehwish-Malik",
      description: "Open source contributions",
      primary: false,
    },
  ];

  return (
    <main className="bg-background">
      <Navbar />
      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-screen text-white py-32 px-6 flex flex-col items-center justify-center relative overflow-hidden"
      >
        {/* Constellation background */}
        <ConstellationBg />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-surface/30 to-background pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6
              bg-gradient-to-r from-gold-light via-gold to-gold-dark
              bg-clip-text text-transparent tracking-wide">
              Let&apos;s Work Together
            </h2>

            <p className="text-xl md:text-2xl text-gold-light font-semibold mb-4">
              AI Engineer • Open to New Opportunities
            </p>

            <div className="inline-flex items-center gap-2 bg-gold/10 border-2 border-gold
              px-6 py-2 rounded-full">
              <div className="w-2.5 h-2.5 bg-gold rounded-full animate-pulse" />
              <span className="text-gold font-semibold text-sm tracking-wide">
                Available for Projects
              </span>
            </div>
          </motion.div>

          {/* Open To Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gold">
              Open To Opportunities
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {opportunities.map((opp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-surface border-2 border-gold-dark rounded-2xl p-6 text-center
                    hover:border-gold transition-all duration-300"
                >
                  <div className="text-4xl text-gold mb-3 flex justify-center">
                    {opp.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gold-light mb-2">
                    {opp.title}
                  </h4>
                  <p className="text-sm text-gold-light/70">
                    {opp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gold">
              Get In Touch
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(201, 169, 97, 0.3)" }}
                >
                  <Link
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`block rounded-2xl p-8 transition-all duration-300 h-full flex flex-col items-center text-center
                      ${
                        method.primary
                          ? "bg-gold border-2 border-gold hover:bg-gold-dark hover:border-gold-dark shadow-lg shadow-gold/20"
                          : "bg-surface border-2 border-gold-dark hover:border-gold"
                      }`}
                  >
                    <div
                      className={`text-5xl mb-4 ${
                        method.primary ? "text-background" : "text-gold"
                      }`}
                    >
                      {method.icon}
                    </div>

                    <h4
                      className={`text-xl font-bold mb-2 ${
                        method.primary ? "text-background" : "text-gold-light"
                      }`}
                    >
                      {method.label}
                    </h4>

                    <p
                      className={`text-sm mb-3 ${
                        method.primary ? "text-background/80" : "text-gold-light/70"
                      }`}
                    >
                      {method.description}
                    </p>

                    <p
                      className={`text-sm font-semibold ${
                        method.primary ? "text-background" : "text-gold"
                      }`}
                    >
                      {method.value}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-surface/50 border border-gold-dark/50 rounded-2xl p-8 max-w-3xl mx-auto">
              <h4 className="text-xl font-bold text-gold mb-4">
                What I Bring
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gold-light/80">
                <div className="flex items-center justify-center gap-2">
                  <FaCheckCircle className="text-gold" />
                  <span>Full-time & Contract</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <FaCheckCircle className="text-gold" />
                  <span>Remote & Hybrid</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <FaCheckCircle className="text-gold" />
                  <span>Fast Response Time</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Footer Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            viewport={{ once: true }}
            className="text-center text-gold-light/60 text-sm mt-12"
          >
            Based in Pakistan • Open to global opportunities • Typically respond within 24 hours
          </motion.p>
        </div>
      </motion.section>
    </main>
  );
}
