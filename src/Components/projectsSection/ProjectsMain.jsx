import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Spotify Clone",
    year: "Mar2025",
    align: "right",
    image: "./sproject.jpeg",
    link: "https://www.linkedin.com/in/janada-jayathilaka/details/projects/",
  },
  {
    name: "Netflix Clone",
    year: "Aug2024",
    align: "left",
    image: "./netflixp.jpeg",
    link: "https://www.linkedin.com/in/janada-jayathilaka/details/projects/",
  },
  {
    name: "Flutter Shoe App",
    year: "July2023",
    align: "right",
    image: "./shoep.jpeg",
    link: "https://www.linkedin.com/in/janada-jayathilaka/details/projects/",
  },
  {
    name: "Online Food Ordering System",
    year: "Jan2023",
    align: "left",
    image: "./foodapp.jpeg",
    link: "https://www.linkedin.com/in/janada-jayathilaka/details/projects/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
