"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaDownload, FaEye, FaPrint } from "react-icons/fa";

// Floating particles component
function FloatingParticles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 4,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-gold rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Neural network background
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

export default function ResumePage() {
  const handlePrint = () => {
    window.open('/Resume/Mehwish-Malik-Resume.pdf', '_blank');
  };

  return (
    <main className="min-h-screen bg-background text-white relative overflow-hidden">
      {/* Background Effects */}
      <FloatingParticles />
      <NeuralNetworkBg />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background opacity-80" />

      {/* Section Divider */}
      <div className="relative w-full h-24 md:h-32 bg-gradient-to-b from-background via-gold/5 to-background">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80%" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen px-6 pt-16 md:pt-20 pb-20">
        <div className="max-w-6xl mx-auto">

          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-8"
          >
            <span className="inline-block px-6 py-2 bg-gold/10 border-2 border-gold/30 rounded-full text-gold text-sm md:text-base font-semibold tracking-wider uppercase">
              Resume
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent text-center"
          >
            My Resume
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center text-gold-light text-lg md:text-xl mb-12 max-w-2xl mx-auto"
          >
            View or download my professional resume to learn more about my experience, skills, and qualifications.
          </motion.p>

          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-surface border-2 border-gold-dark hover:border-gold rounded-2xl p-8 md:p-12 shadow-2xl transition-all duration-300"
          >

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
              {/* View Button */}
              <motion.a
                href="/Resume/Mehwish-Malik-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(201, 169, 97, 0.5)" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center bg-gold hover:bg-gold-dark text-black px-6 py-4 rounded-lg font-semibold text-base transition-all shadow-lg"
              >
                <FaEye className="mr-2" /> View Resume
              </motion.a>

              {/* Download Button */}
              <motion.a
                href="/Resume/Mehwish-Malik-Resume.pdf"
                download="Mehwish-Malik-Resume.pdf"
                whileHover={{ scale: 1.05, borderColor: "#c9a961" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center bg-transparent border-2 border-gold/50 hover:border-gold text-gold-light hover:text-gold px-6 py-4 rounded-lg font-semibold text-base transition-all"
              >
                <FaDownload className="mr-2" /> Download
              </motion.a>

              {/* Print Button */}
              <motion.button
                onClick={handlePrint}
                whileHover={{ scale: 1.05, borderColor: "#c9a961" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center bg-transparent border-2 border-gold-dark hover:border-gold text-gold-light hover:text-gold px-6 py-4 rounded-lg font-semibold text-base transition-all"
              >
                <FaPrint className="mr-2" /> Print
              </motion.button>
            </div>

            {/* Divider */}
            <div className="relative my-12">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gold-dark/30" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-surface px-4 text-gold-light/70 text-sm">Quick Summary</span>
              </div>
            </div>

            {/* Quick Summary */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="space-y-4"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gold mb-6">Professional Highlights</h2>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: "🤖", text: "AI Engineer specializing in Agentic AI" },
                  { icon: "💻", text: "Full-Stack Development with Next.js & React" },
                  { icon: "🐍", text: "Python for AI & Automation" },
                  { icon: "⚡", text: "Building Intelligent Systems & AI Products" },
                  { icon: "🎨", text: "Modern UI/UX with TypeScript" },
                  { icon: "🚀", text: "AI-Driven Development Expertise" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-gold/5 border border-gold-dark/30 rounded-lg hover:bg-gold/10 hover:border-gold-dark transition-all"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-gold-light">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2 }}
              className="mt-12 pt-8 border-t border-gold-dark/30 text-center"
            >
              <p className="text-gold-light mb-4">
                Interested in working together?
              </p>
              <Link
                href="/Contact"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold transition-colors"
              >
                Get in Touch →
              </Link>
            </motion.div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.2 }}
            className="mt-8 text-center text-gold-light/60 text-sm"
          >
            Last updated: 2026
          </motion.div>
        </div>
      </div>
    </main>
  );
}
