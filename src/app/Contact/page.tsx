"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Navbar from "@/app/Components/Navbar";
import Link from "next/link";

export default function ContactSection(): JSX.Element {
  return (
    <main>
      <Navbar />
      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-screen bg-gray-950 text-white py-20 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden"
      >
        {/* Decorative background graphic */}
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-cover bg-center opacity-5 pointer-events-none" />

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
          {"Let's Collaborate!".split("").map((char, index) => (
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
          className="text-lg md:text-xl max-w-2xl mb-10 leading-relaxed z-10"
        >
          By working together and bringing in different ideas, we create an environment where everyone can grow and succeed. Just like in coding, when different skills come together, we build something amazing&mdash;whether it&apos;s a cool project, a smooth user experience, or a strong community. Let&apos;s connect and build something great!
        </motion.p>

        {/* Contact Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-10 text-5xl text-purple-400 z-10"
        >
          <Link
            href="https://github.com/Mehwish-Malik"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 hover:text-white transition-transform duration-300"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mehwish-malik-b548412ba"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 hover:text-white transition-transform duration-300"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="mailto:malik.mehwish0078@gmail.com"
            className="hover:scale-110 hover:text-white transition-transform duration-300"
          >
            <FaEnvelope />
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
}
