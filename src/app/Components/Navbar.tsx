// components/Navbar.jsx
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "@/app/Assets/Logo.jpeg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full py-4 px-8 flex justify-between items-center 
        bg-gradient-to-r from-purple-800 to-indigo-900/80 
        backdrop-blur-lg shadow-md fixed top-0 z-50"
    >
      <div className="flex items-center space-x-2">
        <Image 
          src={Logo}
          alt="Logo" 
          width={40} 
          height={40} 
          className="rounded-full"
        />
        <h1 className="text-xl font-bold text-white">MY WEBSITE</h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-4 text-white text-lg">
        <Link href="/" className="hover:text-purple-300">Home</Link>
        <Link href="/About" className="hover:text-purple-300">About</Link>
        <Link href="/Skills" className="hover:text-purple-300">Skills</Link>
        <a href="/Projects" className="hover:text-purple-300">Projects</a>
        <Link href="/Contact" className="hover:text-purple-300">Contact</Link>
      </div>

      {/* Hamburger Icon - Mobile */}
      <div className="md:hidden text-white text-2xl z-50" onClick={toggleMenu}>
        {menuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-indigo-900 text-white flex flex-col items-center py-4 space-y-4 md:hidden">
          <Link href="/" className="hover:text-purple-300" onClick={toggleMenu}>Home</Link>
          <Link href="/About" className="hover:text-purple-300" onClick={toggleMenu}>About</Link>
          <Link href="/Skills" className="hover:text-purple-300" onClick={toggleMenu}>Skills</Link>
          <a href="/Projects" className="hover:text-purple-300" onClick={toggleMenu}>Projects</a>
          <Link href="/Contact" className="hover:text-purple-300" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </motion.nav>
  );
}
