// Project data structure - Easy to edit
export interface Project {
  id: string;
  featured: boolean;
  category: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  technologies: string[];
  problem: string;
  solution: string;
  architecture?: string;
  aiCapabilities?: string[];
  outcome: string;
  visualPreview?: {
    type: 'workflow' | 'transformation' | 'architecture';
    stages?: string[];
  };
}

export const projects: Project[] = [
  {
    id: 'ubl-nexus-ai',
    featured: true,
    category: 'AI Banking Platform',
    title: 'UBL Nexus AI',
    tagline: 'AI-powered financial intelligence platform with specialized banking agents',
    description: 'A unified AI banking experience combining conversational AI, agentic workflows, fraud awareness, loan assessment, and financial health insights.',
    image: '/ubl-img.png',
    liveUrl: 'https://ubl-project-one.vercel.app',
    githubUrl: 'https://github.com/Mehwish-Malik/UBL-Project.git',
    technologies: ['Next.js', 'TypeScript', 'AI Agents', 'PostgreSQL', 'Recharts', 'RAG'],
    problem: 'Traditional banking interfaces require users to navigate multiple workflows manually, leading to friction and inefficiency in accessing financial services.',
    solution: 'A unified AI-powered banking platform that uses specialized agents to handle voice banking, loan eligibility assessment, fraud detection, and financial health analysis.',
    architecture: 'Multi-agent system with specialized AI capabilities for different banking workflows',
    aiCapabilities: [
      'Voice Banking Assistant for natural language transactions',
      'Loan Eligibility Agent for automated assessment',
      'Fraud Detection Agent for real-time threat awareness',
      'Financial Health Scorer for personalized insights'
    ],
    outcome: 'An intelligent banking interface that reduces friction, improves security, and provides personalized financial guidance through specialized AI agents.',
    visualPreview: {
      type: 'architecture',
      stages: ['User', 'AI Banking Interface', 'Specialized Agents', 'Financial Insights']
    }
  },
  {
    id: 'ai-resume-assistant',
    featured: true,
    category: 'AI Career Tools',
    title: 'AI Resume Assistant',
    tagline: 'AI-powered resume optimization system that analyzes and improves resumes for target roles',
    description: 'An intelligent resume optimization assistant that analyzes existing resumes against job descriptions and generates improved, role-focused versions.',
    image: '/ResumeAI.png',
    liveUrl: 'https://ai-resume-assistant-7cqh.vercel.app',
    githubUrl: 'https://github.com/Mehwish-Malik/ai-resume-assistant.git',
    technologies: ['Next.js', 'TypeScript', 'FastAPI', 'Python', 'LLM APIs'],
    problem: 'Job seekers struggle to tailor resumes for specific roles, often missing key requirements and failing to highlight relevant experience effectively.',
    solution: 'An AI system that analyzes both the existing resume and target job description, then generates an optimized version that aligns experience with role requirements.',
    architecture: 'Full-stack application with Next.js frontend and FastAPI backend for AI processing',
    aiCapabilities: [
      'Resume content analysis and extraction',
      'Job description requirement parsing',
      'Intelligent content optimization',
      'Role-focused resume generation'
    ],
    outcome: 'A practical tool that helps professionals create targeted resumes that better match job requirements and increase interview opportunities.',
    visualPreview: {
      type: 'transformation',
      stages: ['Old Resume', 'Job Description', 'AI Analysis', 'Optimized Resume']
    }
  },
  {
    id: 'ai-robotics-book',
    featured: false,
    category: 'Technical Research',
    title: 'AI Humanoid Robotics Book',
    tagline: 'Comprehensive technical documentation on AI robotics and humanoid systems',
    description: 'A structured technical resource covering AI robotics principles, humanoid systems, and intelligent automation.',
    image: '/ai-robotics.jpeg',
    liveUrl: 'https://ai-robotics-book-three.vercel.app',
    githubUrl: 'https://github.com/Mehwish-Malik/AI-Robotics-Book.git',
    technologies: ['Next.js', 'Claude Code', 'Spec-Driven Development', 'Technical Writing'],
    problem: 'Fragmented information about AI robotics and humanoid systems makes it difficult for engineers to find comprehensive technical resources.',
    solution: 'A well-structured, searchable technical book created using AI-assisted development and spec-driven methodology.',
    outcome: 'A comprehensive technical resource demonstrating research capability and modern AI-assisted development workflows.',
  }
];

// Helper functions
export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getSecondaryProjects = () => projects.filter(p => !p.featured);
export const getProjectById = (id: string) => projects.find(p => p.id === id);
