
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";
import Myimg from "@/app/Assets/best.png";

// Floating particles component
function FloatingParticles() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
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

// Neural network lines component
function NeuralNetwork() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <svg className="w-full h-full">
        <motion.line
          x1="10%" y1="20%" x2="30%" y2="60%"
          stroke="#c9a961"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        />
        <motion.line
          x1="30%" y1="60%" x2="50%" y2="40%"
          stroke="#c9a961"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatDelay: 1 }}
        />
        <motion.line
          x1="50%" y1="40%" x2="70%" y2="70%"
          stroke="#c9a961"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1, repeat: Infinity, repeatDelay: 1 }}
        />
        <motion.line
          x1="70%" y1="30%" x2="90%" y2="50%"
          stroke="#c9a961"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.5, repeat: Infinity, repeatDelay: 1 }}
        />

        {/* Nodes */}
        <motion.circle
          cx="30%" cy="60%" r="3"
          fill="#c9a961"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.5, delay: 2, repeat: Infinity, repeatDelay: 3 }}
        />
        <motion.circle
          cx="50%" cy="40%" r="3"
          fill="#c9a961"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.5, delay: 2.5, repeat: Infinity, repeatDelay: 3 }}
        />
        <motion.circle
          cx="70%" cy="70%" r="3"
          fill="#c9a961"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.5, delay: 3, repeat: Infinity, repeatDelay: 3 }}
        />
      </svg>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 pt-24 md:pt-20 text-white bg-background overflow-hidden">
      {/* Animated Background Effects */}
      <FloatingParticles />
      <NeuralNetwork />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background opacity-80" />

      {/* Content Container */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-12">

        {/* Left Column - Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">

          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl text-gold-light font-light tracking-wide"
          >
            Hi, I&apos;m
          </motion.div>

          {/* Open to Work Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-gold/10 border-2 border-gold px-4 py-2 rounded-full mb-4"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-3 h-3 bg-green-500 rounded-full"
            />
            <span className="text-gold font-semibold text-sm tracking-wide">
              Open to Work
            </span>
          </motion.div>

          {/* Animated Name */}
          <div className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent inline-flex flex-wrap">
              {"Mehwish Malik".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-2xl md:text-4xl font-bold text-white leading-snug tracking-wide"
          >
            Building AI Agents, Intelligent Systems & AI-Powered Products
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-base md:text-lg text-gold-light leading-relaxed max-w-2xl"
          >
            AI Engineer specializing in <span className="text-gold font-semibold">Agentic AI</span>, <span className="text-gold font-semibold">AI-Driven Development</span>, Python, TypeScript, Next.js and <span className="text-gold font-semibold">Intelligent Automation</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            {/* Primary Button */}
            <motion.a
              href="/Projects"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(201, 169, 97, 0.5)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center bg-gold hover:bg-gold-dark text-black px-8 py-4 rounded-lg font-semibold text-base transition-all shadow-lg"
            >
              View Projects <FaArrowRight className="ml-2" />
            </motion.a>

            {/* Secondary Button - Download Resume */}
            <motion.a
              href="/Mehwish-Malik-Resume.pdf"
              download="Mehwish-Malik-Resume.pdf"
              whileHover={{ scale: 1.05, borderColor: "#c9a961" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center bg-transparent border-2 border-gold/50 hover:border-gold text-gold-light hover:text-gold px-8 py-4 rounded-lg font-semibold text-base transition-all"
            >
              <FaDownload className="mr-2" /> Download Resume
            </motion.a>

            {/* Tertiary Button - Contact */}
            <motion.a
              href="/Contact"
              whileHover={{ scale: 1.05, borderColor: "#c9a961" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center bg-transparent border-2 border-gold-dark hover:border-gold text-gold-light hover:text-gold px-8 py-4 rounded-lg font-semibold text-base transition-all"
            >
              <FaEnvelope className="mr-2" /> Contact Me
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="flex gap-6 text-3xl justify-center md:justify-start pt-6"
          >
            <Link
              href="mailto:malik.mehwish0078@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-dark hover:text-gold hover:scale-110 transition-all duration-300"
              title="Email me"
            >
              <FaEnvelope />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mehwish-malik-b548412ba"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-dark hover:text-gold hover:scale-110 transition-all duration-300"
              title="Connect on LinkedIn"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://github.com/Mehwish-Malik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-dark hover:text-gold hover:scale-110 transition-all duration-300"
              title="View my GitHub"
            >
              <FaGithub />
            </Link>
          </motion.div>

          {/* Contact Info Text - More Prominent */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.6 }}
            className="text-center md:text-left mt-4 space-y-2"
          >
            <p className="text-gold-light text-sm">
              📧 <a href="mailto:malik.mehwish0078@gmail.com" className="hover:text-gold transition-colors">malik.mehwish0078@gmail.com</a>
            </p>
            <p className="text-gold-light text-sm">
              💼 <a href="https://www.linkedin.com/in/mehwish-malik-b548412ba" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">linkedin.com/in/mehwish-malik</a>
            </p>
          </motion.div>
        </div>

        {/* Right Column - Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
          >
            {/* Glowing ring effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(201, 169, 97, 0.3)",
                  "0 0 40px rgba(201, 169, 97, 0.5)",
                  "0 0 20px rgba(201, 169, 97, 0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Profile Image */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gold shadow-2xl">
              <Image
                src={Myimg}
                alt="Mehwish Malik - AI Engineer"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.6 }}
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-surface border-2 border-gold px-6 py-2 rounded-full"
            >
              <p className="text-gold font-semibold text-sm tracking-wide">
                Available for Projects
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
