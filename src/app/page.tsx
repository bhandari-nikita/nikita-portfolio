import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { StatisticsSection } from "@/components/sections/StatisticsSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <StatisticsSection />
        <TimelineSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
