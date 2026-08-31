import Hero from "./Components/Hero"
import AboutSection from "./About/page"
import SkillsSection from "./Skills/page"
import ProjectsSection from "./Projects/page"
import AIEngineeringShowcase from "./AIEngineeringShowcase/page"
import ContactSection from "./Contact/page"
import Footer from "./Components/Footer"

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <AIEngineeringShowcase />
      <ContactSection />
      <Footer />
    </main>
  );
}
