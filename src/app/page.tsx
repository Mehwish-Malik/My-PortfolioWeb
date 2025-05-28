 import AboutSection from "./About/page";
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar";
import ContactSection from "./Contact/page";
import ProjectsSection from "./Projects/page";
import SkillsSection from "./Skills/page";
export default function Home() {
  return (
  <main>
    <Navbar />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
