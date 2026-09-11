import { Hero } from "../Hero";
import { ProjectsSection } from "../ProjectsSection";
import { PhilosophySection } from "../PhilosophySection";
import { AboutSection } from "../AboutSection";
import { ServicesSection } from "../ServicesSection";
import { ValuesSection } from "../ValuesSection";
import { ContactCta } from "../ContactCta";

export const MainContent = () => {
  return (
    <main
      id="main"
      className="relative box-border caret-transparent min-h-[750px] outline-[3px] w-full overflow-hidden"
    >
      <Hero />
      <ProjectsSection />
      <PhilosophySection />
      <AboutSection />
      <ServicesSection />
      <ValuesSection />
      <ContactCta />
    </main>
  );
};
