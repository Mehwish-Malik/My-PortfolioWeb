// components/Navbar.jsx
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "@/app/Assets/Logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/About", label: "About" },
    { href: "/Skills", label: "Skills" },
    { href: "/Projects", label: "Projects" },
    { href: "/Resume", label: "Resume" },
    { href: "/GitHub", label: "GitHub" },
    { href: "/Contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full py-4 px-6 md:px-12 flex justify-between items-center
        bg-background/95 backdrop-blur-md shadow-lg
        border-b border-gold/20 fixed top-0 z-50"
    >
      {/* Logo and Brand */}
      <Link href="/" className="flex items-center space-x-3 group">
        <div className="relative">
          <Image
            src={Logo}
            alt="Mehwish Malik Logo"
            width={50}
            height={50}
            className="rounded-full ring-2 ring-gold group-hover:ring-gold-light transition-all"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl font-bold text-gold-light tracking-wide">
            Mehwish Malik
          </h1>
          <p className="text-xs text-gold tracking-wider hidden sm:block">
            AI Engineer
          </p>
        </div>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 text-gold-light text-base font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="relative group py-2"
          >
            <span className="group-hover:text-gold transition-colors duration-300">
              {link.label}
            </span>
            {/* Underline animation */}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
          </Link>
        ))}
      </div>

      {/* Hamburger Icon - Mobile */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-gold text-2xl z-50 hover:text-gold-light transition-colors"
        aria-label="Toggle menu"
      >
        {menuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={toggleMenu}
            />

            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-64 bg-surface
                border-l border-gold/30 shadow-2xl md:hidden z-50"
            >
              {/* Close button */}
              <div className="flex justify-end p-6">
                <button
                  onClick={toggleMenu}
                  className="text-gold text-2xl hover:text-gold-light transition-colors"
                  aria-label="Close menu"
                >
                  <AiOutlineClose />
                </button>
              </div>

              {/* Menu Links */}
              <div className="flex flex-col items-start px-8 space-y-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gold-light hover:text-gold text-lg font-medium
                        transition-colors duration-300 block py-2"
                      onClick={toggleMenu}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Menu Footer */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="border-t border-gold/30 pt-6">
                  <p className="text-gold-dark text-sm">
                    Building AI-Powered Systems
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
