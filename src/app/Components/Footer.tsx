import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-background border-t border-border py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Mehwish Malik</h3>
            <p className="text-accent-muted text-sm leading-relaxed">
              AI Engineer building intelligent systems with agentic AI, RAG, and LLM applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Navigation
            </h4>
            <div className="flex flex-col space-y-2">
              <Link href="#about" className="text-accent-muted hover:text-primary text-sm transition-colors">
                About
              </Link>
              <Link href="#skills" className="text-accent-muted hover:text-primary text-sm transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="text-accent-muted hover:text-primary text-sm transition-colors">
                Work
              </Link>
              <Link href="#ai-architecture" className="text-accent-muted hover:text-primary text-sm transition-colors">
                AI Systems
              </Link>
              <Link href="#contact" className="text-accent-muted hover:text-primary text-sm transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-4">
              <Link
                href="https://github.com/Mehwish-Malik"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-surface-soft border border-border hover:border-primary flex items-center justify-center text-accent-muted hover:text-primary transition-all"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/mehwish-malik-b548412ba"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-surface-soft border border-border hover:border-primary flex items-center justify-center text-accent-muted hover:text-primary transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </Link>
            </div>
            <p className="text-accent-muted text-sm">
              malik.mehwish0078@gmail.com
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-accent-subtle">
            &copy; {new Date().getFullYear()} Mehwish Malik. All rights reserved.
          </p>
          <p className="text-sm text-accent-subtle">
            Built with Next.js, TypeScript & AI
          </p>
        </div>

      </div>
    </footer>
  );
}
