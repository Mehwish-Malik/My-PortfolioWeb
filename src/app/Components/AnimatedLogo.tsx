"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import LogoImage from "@/app/Assets/logo.png";

export default function AnimatedLogo() {
  const [isHovered, setIsHovered] = useState(false);

  // Floating particles configuration
  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    delay: i * 0.8,
    duration: 3 + (i % 3),
    x: 15 + (i % 3) * 10,
    y: 15 + Math.floor(i / 3) * 10,
  }));

  return (
    <motion.div
      className="relative w-12 h-12 flex items-center justify-center"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Ambient glow - breathing effect */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-40"
        animate={{
          boxShadow: isHovered
            ? [
                "0 0 20px rgba(139, 92, 246, 0.3)",
                "0 0 30px rgba(139, 92, 246, 0.5)",
                "0 0 20px rgba(139, 92, 246, 0.3)",
              ]
            : [
                "0 0 10px rgba(139, 92, 246, 0.2)",
                "0 0 15px rgba(139, 92, 246, 0.3)",
                "0 0 10px rgba(139, 92, 246, 0.2)",
              ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ filter: "blur(8px)" }}
      />

      {/* Orbital ring - slow rotation */}
      <motion.div
        className="absolute inset-0 rounded-full border border-primary/20 hidden md:block"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0%, rgba(139, 92, 246, 0.1) 50%, transparent 100%)",
        }}
      />

      {/* Floating particles - minimal and subtle */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-0.5 h-0.5 bg-primary/40 rounded-full hidden md:block"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [-2, 2, -2],
            x: [-1, 1, -1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Circuit flow particles - traveling along edges */}
      <motion.div
        className="absolute top-0 left-1/2 w-1 h-1 bg-primary/60 rounded-full blur-[1px] hidden md:block"
        animate={{
          x: [0, 20, 0],
          y: [0, -10, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0,
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/2 w-1 h-1 bg-secondary/60 rounded-full blur-[1px] hidden md:block"
        animate={{
          x: [0, -15, 0],
          y: [0, 10, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2,
        }}
      />

      {/* Neural network pulse overlay - positioned at corners */}
      <motion.div
        className="absolute top-1 left-1 w-1 h-1 bg-primary rounded-full hidden md:block"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      <motion.div
        className="absolute top-1 right-1 w-1 h-1 bg-secondary rounded-full hidden md:block"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-1 left-1 w-1 h-1 bg-primary rounded-full hidden md:block"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />

      {/* The actual logo - always sharp and stable */}
      <div className="relative w-full h-full z-10">
        <Image
          src={LogoImage}
          alt="WM Logo"
          fill
          className="object-contain"
          priority
          style={{ imageRendering: "crisp-edges" }}
        />
      </div>

      {/* Hover response glow */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          opacity: isHovered ? 0.15 : 0,
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ duration: 0.3 }}
        style={{
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)",
          filter: "blur(10px)",
        }}
      />

      {/* Reduced motion: CSS-only fallback */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </motion.div>
  );
}
