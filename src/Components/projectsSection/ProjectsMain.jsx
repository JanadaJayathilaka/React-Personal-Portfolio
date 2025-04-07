import React from "react";
import ProjectText from "./ProjectText";
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
    <div id="projects">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectText />
      </motion.div>

      <div>
        {projects.map((item, index) => {
          return (
            <SingleProject
              key={index}
              name={item.name}
              year={item.year}
              align={item.align}
              image={item.image}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
