import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-4xl text-cyan mb-10">About Me</h2>
      <p className="text-white">
        Hi, I'm Janada, an enthusiastic Electronics and Computer Science
        undergraduate with a passion for coding, research, and innovation. I
        enjoy solving complex problems, developing smart solutions, and
        exploring the latest technologies. Whether it's software development,
        competitive programming, or AI-driven research, I love bringing ideas to
        life. Let's create something amazing together
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transistion-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan">
        My Projects
      </button>
    </div>
  );
};

export default AboutMeText;
