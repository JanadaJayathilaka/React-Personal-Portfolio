import React from "react";

import NavBarMain from "./Components/navbar/NavBarMain";
import HeroMain from "./Components/heroSection/heroMain";
import HeroGradient from "./Components/heroSection/HeroGradient";
import SubHeroSection from "./Components/heroSection/SubHeroSection";
import AboutMeMain from "./Components/aboutMeSection/AboutMeMain";
import HelperSection from "./Components/HelperSection";
import SkillsMain from "./Components/skillsSection/SkillsMain";
import ExperienceMain from "./Components/experienceSection/ExperienceMain";
import ProjectsMain from "./Components/projectsSection/ProjectsMain";
import ContactMeMain from "./Components/contactMeSection/ContactMeMain";
import FooterMain from "./Components/footer/FooterMain";

function App() {
  return (
    <main className="font-body">
      <NavBarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <SkillsMain />
      <ExperienceMain />
      <ProjectsMain />
      <ContactMeMain />
      <FooterMain />
      <HelperSection />
    </main>
  );
}

export default App;
