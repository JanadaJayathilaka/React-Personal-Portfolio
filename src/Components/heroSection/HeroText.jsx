import React from "react";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center screen-md:text-left screen-sm:text-center">
      <h2 className="lg:text-2xl sm:text-xl uppercase text-cyan">
        Full-Stack Developer
      </h2>
      <h1 className="md:text-{2.8rem} lg:text-6xl sm:text-4xl font-bold font-special text-orange">
        Janada Jayathilaka
      </h1>
      <p className="text-lg mt-4 text-white">
        Passionate Full-Stack Developer <br /> Undergraduate of University of
        Kelaniya(Bsc(Hons) Electronics and Computer Science)
      </p>
    </div>
  );
};

export default HeroText;
