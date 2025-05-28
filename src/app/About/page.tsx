"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/app/Components/Navbar";
import Pic from "@/app/Assets/mask.png"
export default function AboutSection() {
  return (
    <main>
      <Navbar />
      <motion.section
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-screen relative bg-gray-950 text-white py-20 px-6 flex flex-col items-center justify-start text-center overflow-hidden"
      >
        {/* Subtle background graphic */}
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-cover bg-center opacity-5 pointer-events-none" />

        {/* Image at top */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg mb-8 z-10"
        >
          <Image
            src={Pic}
            alt="Mehwish Malik"
            width={256}
            height={256}
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Animated Gradient Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent tracking-widest z-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {"About Me".split("").map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: "easeInOut",
                  },
                },
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl leading-relaxed max-w-3xl z-10"
        >
          I&apos;m Mehwish Malik, a passionate Frontend Developer based in Pakistan. With a strong
          foundation in Next.js, TypeScript, HTML, CSS, and a curiosity for Python and AI,
          I love building pixel-perfect, responsive, and user-friendly websites.
          <br className="hidden md:block" />
          My journey began with a curiosity about how websites work, and that curiosity has
          now turned into a deep passion for web development. I&apos;m continuously learning and
          pushing my limits, currently diving into AI Agents to explore how intelligent systems
          can enhance user experiences.
        </motion.p>
      </motion.section>
    </main>
  );
}
