"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import AnimatedLogo from "./AnimatedLogo";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Work" },
    { href: "#ai-architecture", label: "AI Systems" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Brand with Animated Logo */}
          <Link href="/" className="flex items-center group">
            <AnimatedLogo />
            <div className="flex flex-col ml-3">
              <span className="text-lg font-bold text-foreground">Mehwish Malik</span>
              <span className="text-xs text-accent-muted">AI Engineer</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-accent-muted hover:text-foreground transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <a
              href="/Resume/Mehwish-Malik-Resume.pdf"
              download="Mehwish-Malik-Resume.pdf"
              className="px-6 py-2.5 bg-surface-soft hover:bg-surface-card text-foreground border border-border hover:border-primary rounded-lg font-medium text-sm transition-all duration-300"
            >
              Resume
            </a>
            <Link
              href="#contact"
              className="px-6 py-2.5 bg-primary hover:bg-primary-dark text-background rounded-lg font-medium text-sm transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-background/95 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-64 bg-surface border-l border-border md:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Close button */}
                <div className="flex justify-end mb-8">
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="text-foreground hover:text-primary transition-colors"
                    aria-label="Close menu"
                  >
                    <HiX size={24} />
                  </button>
                </div>

                {/* Menu Links */}
                <div className="space-y-6">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className="block text-lg font-medium text-accent hover:text-primary transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.1 }}
                  >
                    <a
                      href="/Resume/Mehwish-Malik-Resume.pdf"
                      download="Mehwish-Malik-Resume.pdf"
                      className="block w-full px-6 py-3 bg-surface-soft hover:bg-surface-card text-foreground border border-border rounded-lg font-medium text-center transition-all duration-300 mb-3"
                      onClick={() => setMenuOpen(false)}
                    >
                      Resume
                    </a>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (navLinks.length + 1) * 0.1 }}
                  >
                    <Link
                      href="#contact"
                      className="block w-full px-6 py-3 bg-primary hover:bg-primary-dark text-background rounded-lg font-medium text-center transition-all duration-300"
                      onClick={() => setMenuOpen(false)}
                    >
                      Get in Touch
                    </Link>
                  </motion.div>
                </div>

                {/* Footer in mobile menu */}
                <div className="mt-12 pt-6 border-t border-border">
                  <p className="text-sm text-accent-muted">
                    Building intelligent AI systems
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
