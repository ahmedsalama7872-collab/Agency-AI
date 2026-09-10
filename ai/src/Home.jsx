import React from "react";
import group from "./assets/group_profile.png";
import heroImg from "./assets/bgImage1.png";
import heroImage from "./assets/hero_img.png";

export default function Home({ dark }) {
  
  return (
    
      <section
        id='home'
        className=" bg-[-100%_-20%] bg-cover md:bg-[-500%_150%] lg:bg-[-100%_50%] md:pt-[200px] pt-[150px] text-center dark:bg-black "
        style={!dark ? { backgroundImage: `url(${heroImg})` } : undefined}
      >
        <div className="md:w-[270px] w-[250px] md:h-[50px] py-1 rounded-full flex mx-auto border-1 justify-around items-center border-gray-900/70 px-3 dark:border-white">
          <img src={group} alt="" className="w-[80px]" />
          <p className="md:text-[14px] text-[12px] dark:text-white">Trusted by 10k+ people</p>
        </div>

        <h2 className="text-[30px] md:text-[80px] lg:w-[931px] mx-auto font-[600] dark:text-white mt-6">
          Turning imagination into{" "}
          <span className="bg-gradient-to-r from-[var(--firstColor)] to-[var(--secondColor)] bg-clip-text text-transparent">
            digital
          </span>{" "}
          impact.
        </h2>
        <p className="md:text-[22px] font-[500] font-medium main-text w-[90%] md:w-[600px] mx-auto pt-4">Creating meaningful connections and turning big ideas into interactive digital experiences.</p>

        <img src={heroImage} alt="" className=" md:w-[74%] w-[90%] mx-auto pt-10 md:pt-22" />

      </section>
  
  );
}
