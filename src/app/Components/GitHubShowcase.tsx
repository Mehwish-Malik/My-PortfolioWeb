"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const GITHUB_USERNAME = "Mehwish-Malik";

export default function GitHubShowcase() {
  const statsCardUrl = `https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=transparent&title_color=c9a961&text_color=d4c5b9&icon_color=c9a961&bg_color=0a0a0a&border_color=8b7355&hide_border=false&include_all_commits=true&count_private=true`;

  const topLanguagesUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=transparent&title_color=c9a961&text_color=d4c5b9&bg_color=0a0a0a&border_color=8b7355&hide_border=false`;

  const streakStatsUrl = `https://streak-stats.demolab.com/?user=${GITHUB_USERNAME}&theme=transparent&background=0a0a0a&border=8b7355&stroke=8b7355&ring=c9a961&fire=c9a961&currStreakNum=d4c5b9&sideNums=d4c5b9&currStreakLabel=c9a961&sideLabels=c9a961&dates=d4c5b9`;

  const pinnedRepos = [
    {
      name: "ai-resume-assistant",
      description: "Intelligent resume generation with AI optimization",
      language: "TypeScript",
      stars: 0,
      url: "https://github.com/Mehwish-Malik/ai-resume-assistant",
    },
    {
      name: "Task-Manager",
      description: "Agentic task management with AI-driven prioritization",
      language: "TypeScript",
      stars: 0,
      url: "https://github.com/Mehwish-Malik/Task-Manager",
    },
  ];

  return (
    <section className="min-h-screen bg-background text-white py-32 px-6 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#c9a961 1px, transparent 1px), linear-gradient(90deg, #c9a961 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent tracking-wide">
            GitHub Activity
          </h2>
          <p className="text-gold-light/80 text-base md:text-lg mb-6">
            Open source contributions and coding activity
          </p>
          <Link
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-semibold transition-colors"
          >
            <FaGithub className="text-2xl" />
            @{GITHUB_USERNAME}
            <FaExternalLinkAlt className="text-sm" />
          </Link>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* GitHub Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-surface border-2 border-gold-dark hover:border-gold rounded-2xl p-6 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-gold mb-4 flex items-center gap-2">
              <FaGithub /> GitHub Stats
            </h3>
            <div className="relative w-full h-[200px] flex items-center justify-center">
              <Image
                src={statsCardUrl}
                alt="GitHub Stats"
                width={495}
                height={195}
                className="w-full h-auto"
                unoptimized
              />
            </div>
          </motion.div>

          {/* Top Languages Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-surface border-2 border-gold-dark hover:border-gold rounded-2xl p-6 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-gold mb-4">Top Languages</h3>
            <div className="relative w-full h-[200px] flex items-center justify-center">
              <Image
                src={topLanguagesUrl}
                alt="Top Languages"
                width={350}
                height={195}
                className="w-full h-auto"
                unoptimized
              />
            </div>
          </motion.div>
        </div>

        {/* Streak Stats - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-surface border-2 border-gold-dark hover:border-gold rounded-2xl p-6 mb-12 transition-all duration-300"
        >
          <h3 className="text-xl font-bold text-gold mb-4">Contribution Streak</h3>
          <div className="relative w-full flex items-center justify-center">
            <Image
              src={streakStatsUrl}
              alt="Contribution Streak"
              width={800}
              height={200}
              className="w-full max-w-4xl h-auto"
              unoptimized
            />
          </div>
        </motion.div>

        {/* Pinned Repositories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gold mb-8 text-center">
            Featured Repositories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pinnedRepos.map((repo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(201, 169, 97, 0.2)" }}
              >
                <Link
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-surface border-2 border-gold-dark hover:border-gold rounded-2xl p-6 transition-all duration-300 h-full"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-xl font-bold text-gold-light group-hover:text-gold">
                      {repo.name}
                    </h4>
                    <FaExternalLinkAlt className="text-gold-dark group-hover:text-gold transition-colors" />
                  </div>
                  <p className="text-gold-light/70 text-sm mb-4 leading-relaxed">
                    {repo.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-gold" />
                      <span className="text-gold-light/70">{repo.language}</span>
                    </div>
                    {repo.stars > 0 && (
                      <div className="flex items-center gap-1 text-gold-light/70">
                        <span>⭐</span>
                        <span>{repo.stars}</span>
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-surface border-2 border-gold hover:bg-gold hover:text-background text-gold font-semibold rounded-lg transition-all duration-300"
          >
            View All Repositories
            <FaExternalLinkAlt />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
