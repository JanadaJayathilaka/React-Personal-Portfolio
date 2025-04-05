import React from "react";
import "./App.css";
import NavBarMain from "./Components/navbar/NavBarMain";
import HeroMain from "./Components/heroSection/heroMain";
import HeroGradient from "./Components/heroSection/HeroGradient";
import SubHeroSection from "./Components/heroSection/SubHeroSection";
import AboutMeMain from "./Components/aboutMeSection/AboutMeMain";
import HelperSection from "./Components/HelperSection";
import SkillsMain from "./Components/skillsSection/SkillsMain";

function App() {
  return (
    <main className="font-body">
      <NavBarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <SkillsMain />
      <HelperSection />
    </main>
  );
}

export default App;
