import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resume | Mehwish Malik',
  description: 'Download Mehwish Malik\'s professional resume. Full-stack developer specializing in Next.js, React, and modern web technologies.',
  openGraph: {
    title: 'Resume | Mehwish Malik',
    description: 'Download Mehwish Malik\'s professional resume',
  },
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Resume
        </h1>

        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 shadow-2xl border border-white/20">
          <div className="space-y-6">
            <p className="text-lg text-gray-300">
              View or download my professional resume to learn more about my experience, skills, and qualifications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/Resume/Mehwish-Malik-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center shadow-lg hover:shadow-purple-500/50"
              >
                View Resume
              </a>

              <a
                href="/Resume/Mehwish-Malik-Resume.pdf"
                download="Mehwish-Malik-Resume.pdf"
                className="flex-1 bg-white/10 hover:bg-white/20 border-2 border-purple-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
              >
                Download Resume
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">Quick Summary</h2>
              <ul className="space-y-2 text-gray-300">
                <li>✨ Full-Stack Developer</li>
                <li>💻 Specialized in Next.js, React, and TypeScript</li>
                <li>🎨 Expertise in Tailwind CSS and modern UI/UX</li>
                <li>🚀 Passionate about building performant web applications</li>
              </ul>
            </div>

            <div className="mt-6">
              <Link
                href="/Contact"
                className="inline-block text-purple-400 hover:text-purple-300 underline underline-offset-4 transition-colors"
              >
                Get in touch →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
