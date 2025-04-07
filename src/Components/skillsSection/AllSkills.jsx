import React from "react";
import SingleSkill from "./SingleSkill";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { SiArduino } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Flutter",
    icon: FaFlutter,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "FireBase",
    icon: IoLogoFirebase,
  },
  {
    skill: "Arduino",
    icon: SiArduino,
  },
  {
    skill: "Bootstrap",
    icon: FaBootstrap,
  },
  {
    skill: "Spring Boot",
    icon: SiSpringboot,
  },
  {
    skill: "MySQL",
    icon: SiMysql,
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
  },
  {
    skill: "GitHub",
    icon: IoLogoGithub,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `${index}` * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
