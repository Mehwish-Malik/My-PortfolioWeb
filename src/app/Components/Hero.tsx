
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Myimg from "@/app/Assets/best.jpg"
export default function HeroSection() {
  return (
    <section
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 pt-24 md:pt-20 text-white"
      style={{
        backgroundImage: `url("https://img.freepik.com/free-vector/gradient-purple-color-background-modern-wave-abstract-designs_343694-2361.jpg?uid=R177640712&ga=GA1.1.1744101868.1721416943&semt=ais_hybrid&w=740")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Left Column */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        {/* Animated Name */}
        <div className="text-4xl md:text-6xl font-bold">
           Hi, I&apos;m 
{" "}
          <span className="bg-gradient-to-r from-pink-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent font-playfair inline-flex">
            {"Mehwish Malik".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        </div>

        {/* Enhanced Animated Title */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.03,
                delayChildren: 1,
              },
            },
          }}
          className="text-xl md:text-3xl font-semibold mt-2 text-pink-300"
        >
          {"I’m a Frontend Developer".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-4 text-lg md:text-xl max-w-xl">
       
  I turn creative ideas into digital realities&#46; I&apos;m a passionate Frontend Developer skilled in Next.js&#44; TypeScript&#44; HTML&#44; CSS&#44; and Python&#46; Currently&#44; I&apos;m diving deep into the world of AI Agents and exploring how intelligent systems can enhance digital experiences&#46;


        </motion.p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <motion.a
            href="/Projects"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full shadow-lg font-semibold transition"
          >
            View Projects <FaArrowRight className="ml-2" />
          </motion.a>

          <motion.a
            href="mailto:malik.mehwish0078@gmail.com"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center bg-white text-purple-700 hover:bg-purple-100 px-6 py-3 rounded-full shadow-lg font-semibold transition"
          >
            <FaEnvelope className="mr-2" /> Hire Me
          </motion.a>
        </div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex gap-8 text-4xl text-pink-300 justify-center md:justify-start"
        >
          <Link
            href="https://github.com/Mehwish-Malik"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 hover:text-white transition-transform duration-300"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mehwish-malik-b548412ba"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 hover:text-white transition-transform duration-300"
          >
            <FaLinkedin />
          </Link>
        </motion.div>
      </div>

      {/* Right Column with Image */}
      
      <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-pink-500 shadow-2xl"
        >
          <Image
            src={Myimg}
            alt="Mehwish Malik"
            fill
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
