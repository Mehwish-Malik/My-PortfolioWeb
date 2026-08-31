import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "./Components/Navbar";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
  preload: true,
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mehwishmalik.vercel.app'),
  title: {
    default: 'Mehwish Malik | AI Engineer & Full Stack Developer',
    template: '%s | Mehwish Malik',
  },
  description: 'AI Engineer specializing in Agentic AI, AI-Driven Development, and Full Stack Applications. Building intelligent systems with Python, TypeScript, Next.js, and modern LLM APIs.',
  keywords: [
    'AI Engineer',
    'Agentic AI',
    'Full Stack Developer',
    'Python Developer',
    'TypeScript',
    'Next.js',
    'LLM Engineering',
    'Prompt Engineering',
    'React Developer',
    'AI Development',
    'Machine Learning',
    'Mehwish Malik',
  ],
  authors: [{ name: 'Mehwish Malik' }],
  creator: 'Mehwish Malik',
  publisher: 'Mehwish Malik',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mehwishmalik.vercel.app',
    siteName: 'Mehwish Malik Portfolio',
    title: 'Mehwish Malik | AI Engineer & Full Stack Developer',
    description: 'AI Engineer specializing in Agentic AI, AI-Driven Development, and Full Stack Applications. Building intelligent systems with Python, TypeScript, and Next.js.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Mehwish Malik - AI Engineer',
        type: 'image/svg+xml',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mehwish Malik | AI Engineer & Full Stack Developer',
    description: 'AI Engineer specializing in Agentic AI, AI-Driven Development, and Full Stack Applications.',
    images: ['/og-image.svg'],
    creator: '@mehwishmalik',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  // verification: {
  //   google: 'your-google-verification-code', // Add this when you verify with Google Search Console
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://mehwishmalik.vercel.app" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
