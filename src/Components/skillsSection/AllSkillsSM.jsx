import React from "react";
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

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <div key={index} className="flex flex-col items-center">
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4 text-white">{item.skill}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
