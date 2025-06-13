import AboutMeMain from "./Components/aboutMeSection/AboutMeMain";
import ContactMeMain from "./Components/contactMeSection/ContactMeMain";
import ExperienceMain from "./Components/experienceSection/ExperienceMain";
import FooterMain from "./Components/footer/FooterMain";
import HeroGradient from "./Components/heroSection/HeroGradient";
import HeroMain from "./Components/heroSection/HeroMain";
import NavbarMain from "./Components/navbar/NavbarMain";
import ProjectsMain from "./Components/projectsSection/ProjectsMain";
import SkillsMain from "./Components/skillsSection/SkillsMain";
import SubSkills from "./Components/skillsSection/SubSkills";
import SubHeroMain from "./Components/subHeroSection/SubHeroMain";

function App() {
  return (
    <main className="font-body text-white relative overflow-hidden">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroMain />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <ProjectsMain />
      <ContactMeMain />
      <FooterMain />
    </main>
  );
}

export default App;
