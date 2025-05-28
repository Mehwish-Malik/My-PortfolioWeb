"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiStreamlit,
} from "react-icons/si";
import Navbar from "@/app/Components/Navbar"; // Make sure the path uses lowercase "components"

type SkillIconProps = {
  icon: React.ReactNode;
  label: string;
  color: string;
};

function SkillIcon({ icon, label, color }: SkillIconProps) {
  return (
    <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center">
      <div className={`text-5xl mb-2 ${color}`}>{icon}</div>
      <span className="text-sm font-medium">{label}</span>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <main>
      <Navbar />
      <motion.section
        id="skills"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
        className="min-h-screen bg-gray-950 text-white py-20 px-6 text-center"
      >
        {/* 🔤 Animated "My Skills" Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-10 tracking-widest bg-gradient-to-r from-purple-500 to-pink-600 text-transparent bg-clip-text"
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
          {"My Skills".split("").map((char, index) => (
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

        {/* Languages */}
        <motion.h3 className="text-2xl font-semibold mb-6 text-purple-300">
          Languages
        </motion.h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center mb-10">
          <SkillIcon icon={<FaHtml5 />} label="HTML5" color="text-orange-500" />
          <SkillIcon icon={<FaCss3Alt />} label="CSS3" color="text-blue-500" />
          <SkillIcon icon={<FaJsSquare />} label="JavaScript" color="text-yellow-400" />
          <SkillIcon icon={<SiTypescript />} label="TypeScript" color="text-blue-400" />
          <SkillIcon icon={<FaPython />} label="Python" color="text-yellow-300" />
        </div>

        {/* Frameworks & Libraries */}
        <motion.h3 className="text-2xl font-semibold mb-6 text-purple-300">
          Frameworks & Libraries
        </motion.h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center mb-10">
          <SkillIcon icon={<SiTailwindcss />} label="Tailwind CSS" color="text-sky-400" />
          <SkillIcon icon={<SiNextdotjs />} label="Next.js" color="text-white" />
          <SkillIcon icon={<SiStreamlit />} label="Streamlit" color="text-red-400" />
        </div>

        {/* Tools */}
        <motion.h3 className="text-2xl font-semibold mb-6 text-purple-300">
          Tools
        </motion.h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
          <SkillIcon icon={<FaGitAlt />} label="Git" color="text-red-500" />
          <SkillIcon icon={<FaNodeJs />} label="Node.js" color="text-green-500" />
        </div>
      </motion.section>
    </main>
  );
}
