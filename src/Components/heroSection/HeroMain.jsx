import React from "react";
import HeroText from "./heroText";
import HeroPic from "./heroPic";

const HeroMain = () => {
  return (
    <div className="pt-40 pb-16">
      <div className="flex screen-md:flex-row screen-sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative px-4">
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;
