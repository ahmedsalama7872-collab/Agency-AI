import React from "react";
import logo from "./assets/logo.svg";
import logoDark from "./assets/logo_dark.svg";
import moon from "./assets/moon_icon.svg";
import sun from "./assets/sun_icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({dark,setDark}) {
  return (
    <div className={dark ? "dark" : ""}>
      <div className="fixed top-0 left-0 w-full h-18 bg-white dark:bg-gray-900/70">
        <div className="container mx-auto max-w-[1450px] h-full flex items-center justify-between">
          
            <img src={dark?logoDark:logo} alt="Logo" className="w-[167px] h-[30px]" />
           

          <div className="flex w-[342px] justify-between main-text">
            <a href="#home" className="hover:border-b">Home</a>
            <a href="#services" className="hover:border-b">Services</a>
            <a href="#ourWork" className="hover:border-b">Our Work</a>
            <a href="#testimonial" className="hover:border-b">Testimonial</a>
          </div>

          <div className="flex items-center gap-10">
            <div onClick={() => setDark(!dark)} className="hover:scale-105 rounded-full border-[1.5px] border-[#475569] flex justify-center items-center p-2">
            <button>
              <img src={dark ? sun : moon} alt=""/>
            </button>
            </div>
            <button className="w-[160px] h-[46px] rounded-[33px] primaryBg !text-white hover:scale-103 transition-all">
              Connect{" "}
              <FontAwesomeIcon icon={faArrowRightLong} className="ms-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
