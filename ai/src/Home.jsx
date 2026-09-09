import React from "react";
import group from "./assets/group_profile.png";
import heroImg from "./assets/bgImage1.png";
import heroImage from "./assets/hero_img.png";

export default function Home({ dark }) {
  return (
    <div className={dark ? "dark" : ""}>
      <section
        className=" bg-[-100%_-20%] pt-[200px] text-center dark:bg-black"
        style={!dark ? { backgroundImage: `url(${heroImg})` } : undefined}
      >
        <div className="w-[270px] h-[50px] rounded-full flex mx-auto border-1 justify-between items-center border-gray-900/70 px-3 dark:border-white">
          <img src={group} alt="" className="w-[80px]" />
          <p className="text-[14px] dark:text-white">Trusted by 10k+ people</p>
        </div>

        <h2 className="text-[80px] w-[931px] mx-auto font-[600] dark:text-white">
          Turning imagination into{" "}
          <span className="bg-gradient-to-r from-[var(--firstColor)] to-[var(--secondColor)] bg-clip-text text-transparent">
            digital
          </span>{" "}
          impact.
        </h2>
        <p className="text-[22px] font-[500] font-medium main-text w-[600px] mx-auto pt-4">Creating meaningful connections and turning big ideas into interactive digital experiences.</p>

        <img src={heroImage} alt="" className="w-[1257px] mx-auto pt-22" />

      </section>
    </div>
  );
}
