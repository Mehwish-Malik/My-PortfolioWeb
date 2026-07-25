
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";
import Myimg from "@/app/Assets/best.png";
import { fadeIn, hoverScale, shouldReduceMotion } from "@/app/utils/animations";

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
            initial={{ opacity: 0, y: shouldReduceMotion() ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion() ? 0.01 : 0.4 }}
            className="text-lg md:text-xl text-gold-light font-light tracking-wide"
          >
            Hi, I&apos;m
          </motion.div>

          {/* Open to Work Badge */}
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion() ? 1 : 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: shouldReduceMotion() ? 0.01 : 0.3, delay: shouldReduceMotion() ? 0 : 0.2 }}
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

          {/* Animated Name with Gold Glow */}
          <div className="text-5xl md:text-7xl font-bold leading-tight relative">
            {/* Subtle pulsing gold glow behind text */}
            <motion.div
              className="absolute inset-0 blur-3xl opacity-30 pointer-events-none"
              animate={shouldReduceMotion() ? {} : {
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                background: "radial-gradient(ellipse at center, #c9a961 0%, transparent 70%)",
              }}
            />
            <span className="bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent inline-flex flex-wrap relative z-10">
              {"Mehwish Malik".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: shouldReduceMotion() ? 0 : -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: shouldReduceMotion() ? 0 : 0.1 + i * 0.03, duration: shouldReduceMotion() ? 0.01 : 0.3 }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: shouldReduceMotion() ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: shouldReduceMotion() ? 0 : 0.5, duration: shouldReduceMotion() ? 0.01 : 0.4 }}
            className="text-2xl md:text-4xl font-bold text-white leading-snug tracking-wide"
          >
            Building AI Agents, Intelligent Systems & AI-Powered Products
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...fadeIn(0.7)}
            className="text-base md:text-lg text-gold-light leading-relaxed max-w-2xl"
          >
            AI Engineer specializing in <span className="text-gold font-semibold">Agentic AI</span>, <span className="text-gold font-semibold">AI-Driven Development</span>, Python, TypeScript, Next.js and <span className="text-gold font-semibold">Intelligent Automation</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...fadeIn(0.9)}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            {/* Primary Button */}
            <motion.a
              href="/Projects"
              {...hoverScale(1.05)}
              whileHover={{
                scale: shouldReduceMotion() ? 1 : 1.05,
                boxShadow: shouldReduceMotion() ? undefined : "0 0 25px rgba(201, 169, 97, 0.5)",
              }}
              className="inline-flex items-center justify-center bg-gold hover:bg-gold-dark text-black px-8 py-4 rounded-lg font-semibold text-base transition-colors duration-300 shadow-lg"
            >
              View Projects <FaArrowRight className="ml-2" />
            </motion.a>

            {/* Secondary Button - Download Resume */}
            <motion.a
              href="/Resume/Mehwish-Malik-Resume.pdf"
              download="Mehwish-Malik-Resume.pdf"
              {...hoverScale(1.05)}
              whileHover={{
                scale: shouldReduceMotion() ? 1 : 1.05,
                borderColor: shouldReduceMotion() ? undefined : "#c9a961",
              }}
              className="inline-flex items-center justify-center bg-transparent border-2 border-gold/50 hover:border-gold text-gold-light hover:text-gold px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300"
            >
              <FaDownload className="mr-2" /> Download Resume
            </motion.a>

            {/* Tertiary Button - Contact */}
            <motion.a
              href="/Contact"
              {...hoverScale(1.05)}
              whileHover={{
                scale: shouldReduceMotion() ? 1 : 1.05,
                borderColor: shouldReduceMotion() ? undefined : "#c9a961",
              }}
              className="inline-flex items-center justify-center bg-transparent border-2 border-gold-dark hover:border-gold text-gold-light hover:text-gold px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300"
            >
              <FaEnvelope className="mr-2" /> Contact Me
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            {...fadeIn(1.1)}
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
            {...fadeIn(1.2)}
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
            initial={{ opacity: 0, scale: shouldReduceMotion() ? 1 : 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: shouldReduceMotion() ? 0 : 0.3, duration: shouldReduceMotion() ? 0.01 : 0.5 }}
            className="relative"
          >
            {/* Glowing ring effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={shouldReduceMotion() ? {} : {
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
              initial={{ opacity: 0, y: shouldReduceMotion() ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: shouldReduceMotion() ? 0 : 1.1, duration: shouldReduceMotion() ? 0.01 : 0.4 }}
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
