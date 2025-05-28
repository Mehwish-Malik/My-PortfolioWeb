// components/ProjectsSection.jsx
"use client";
import { motion } from "framer-motion";
import Navbar from "@/app/Components/Navbar";
import Link from "next/link";
import Image from "next/image";
import portfolio from "@/app/Assets/mypic.png"
import formpic from "@/app/Assets/resform.png"
import cv from "@/app/Assets/cvv.webp"
import figcode from "@/app/Assets/figma.webp"
import nike from "@/app/Assets/nike.png"
import appi from "@/app/Assets/aap.png"
import blog from "@/app/Assets/blog.png"
import unitconv from "@/app/Assets/unitconv.jpg"
import datasec from "@/app/Assets/secdata.png"
import passwordmeter from "@/app/Assets/passwors.png"
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
    },
  }),
};

export default function ProjectsSection() {
  const headingWords = ["Explore", "My", "Creations"];

  return (
    <main>
      <Navbar />
      <motion.section
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-screen bg-gray-950 text-white py-20 px-6"
      >
        <div className="flex justify-center gap-4 mb-24">
          {headingWords.map((word, i) => (
            <motion.h2
              key={word}
              custom={i}
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 tracking-wide"
            >
              {word}
            </motion.h2>
          ))}
        </div>

        {/* HTML & CSS Projects */}
        <div className="mb-28 text-center">
          <h3 className="text-4xl font-extrabold mb-12 inline-block text-purple-300 border-b-4 border-purple-500 pb-2">HTML & CSS Projects</h3>
          <div className="grid md:grid-cols-3 gap-10 mt-10">
            <ProjectItem image={formpic} link="https://hackathone-milestones-5-swart.vercel.app" label="Resume Builder" />
            <ProjectItem image={portfolio} link="https://my-portfolioweb-ochre.vercel.app" label="Portfolio Website" />
            
            <ProjectItem image={cv} link="https://milestone1-sage.vercel.app" label="Static Interactive Resume" />
          </div>
        </div>  

        {/* Next.js Projects */}
        <div className="mb-28 text-center">
          <h3 className="text-4xl font-extrabold mb-12 inline-block text-purple-300 border-b-4 border-purple-500 pb-2">Next.js Projects</h3>
          <div className="grid md:grid-cols-3 gap-10 mt-10">
            <ProjectItem image={figcode} link="https://hackathon2-nike-tvfv.vercel.app" label="Figma to Code" />
            <ProjectItem image={nike} link="https://marketplace2-nike-1t3e.vercel.app" label="E-Commerce Clone" />
            <ProjectItem image={appi} link="https://milestone03-rho.vercel.app" label="Use API" />
            <ProjectItem image= {blog}  link="https://blog-website-eight-red.vercel.app" label="Blog Website" />
          </div>
        </div>

        {/* Python Projects */}
        <div className="text-center">
          <h3 className="text-4xl font-extrabold mb-12 inline-block text-purple-300 border-b-4 border-purple-500 pb-2">Python Projects</h3>
          <div className="grid md:grid-cols-3 gap-10 mt-10">
            <ProjectItem image={unitconv} link="https://eo7s8w8nhadrf9vbfdgqfu.streamlit.app/" label="Unit Converter" />
            <ProjectItem image={datasec} link="https://secure-data-encryption-cxryxnx3qeizxpn9efuqed.streamlit.app/" label="Secure Data Encryption" />
            <ProjectItem image={passwordmeter} link="https://password-strength-meter-9u3jlfzrpytduj4u2ec6ak.streamlit.app/" label="Password Strength Meter" />
      
          </div>
        </div>
      </motion.section>
    </main>
  );
}

function ProjectItem({ image, link, label }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-purple-700 rounded-3xl shadow-2xl p-5 w-full hover:shadow-purple-600/50 transition-all duration-300"
    >
      <div className="w-full h-52 relative rounded-xl overflow-hidden mb-4">
        <Image
          src={image}
          alt={label}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <Link
        href={link}
        target="_blank"
        className="block text-xl font-semibold text-purple-400 hover:text-purple-300 hover:underline text-center"
      >
        {label}
      </Link>
    </motion.div>
  );
}
