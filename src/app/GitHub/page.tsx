"use client";

import Navbar from "@/app/Components/Navbar";
import GitHubShowcase from "@/app/Components/GitHubShowcase";

export default function GitHubPage() {
  return (
    <main className="bg-background">
      <Navbar />
      <GitHubShowcase />
    </main>
  );
}
