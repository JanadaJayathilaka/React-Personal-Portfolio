import React from "react";
import SkillsText from "./SkillsText";
import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";
import SubSkills from "./SubSkills";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
const SkillsMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[400px] relative overflow-hidden ">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <SkillsText />
        </motion.div>
      </div>
      <div className="bottom-[50px] relative left-[50%] -translate-x-[50%] sm:hidden lg:block">
        <AllSkills />
      </div>
      <div className="lg:hidden sm:block ">
        <AllSkillsSM />
      </div>
      <div>
        <SubSkills />
      </div>
    </div>
  );
};

export default SkillsMain;
