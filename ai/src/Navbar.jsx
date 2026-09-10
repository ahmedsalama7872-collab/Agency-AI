import React, { useState } from "react";
import logo from "./assets/logo.svg";
import logoDark from "./assets/logo_dark.svg";
import moon from "./assets/moon_icon.svg";
import sun from "./assets/sun_icon.svg";
import menuIcon from "./assets/menu_icon.svg";
import menuIconDark from "./assets/menu_icon_dark.svg";
import closeIcon from "./assets/close_icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({dark,setDark}) {
  const [menu,setMenu]=useState(false)
  return (<>
    
      <div className="fixed top-0 left-0 w-full h-18 bg-white dark:bg-gray-900/70">
        <div className="w-[90%] container mx-auto max-w-[1450px] h-full flex items-center justify-between">
          
            <img src={dark?logoDark:logo} alt="Logo" className="w-[167px] h-[30px]" />
           

          <div className="w-[342px] justify-between main-text hidden lg:flex">
            <a href="#home" className="hover:border-b">Home</a>
            <a href="#services" className="hover:border-b">Services</a>
            <a href="#ourWork" className="hover:border-b">Our Work</a>
            <a href="#testimonial" className="hover:border-b">Testimonial</a>
          </div>

          <div className="hidden lg:flex items-center gap-10">
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
          <button onClick={()=>setMenu(!menu)} className="lg:hidden flex justify-center items-center"> <img src={dark? menuIconDark: menuIcon} className="w-8" alt="" /></button>
        </div>
      </div>
    
    <div id="sideBar" className={menu? "right-[0%] h-screen w-[60%] transition-all duration-500 fixed bg-[#4F4EEB]":"transition-all duration-500 right-[-100%] h-screen w-[80%] fixed bg-amber-200"}>
      {menu?<button className="transition-all duration-1000" onClick={()=>{setMenu(false)}}><img src={closeIcon} className="w-6 absolute right-6 top-6 " alt="" /></button>:""}

      <div className=" text-white flex flex-col items-start mt-18 ms-8 gap-6 text-[18px] font-bold">
            <a href="#home" className="hover:border-b" onClick={()=>{setMenu(false)}}>Home</a>
            <a href="#services" className="hover:border-b" onClick={()=>{setMenu(false)}}>Services</a>
            <a href="#ourWork" className="hover:border-b" onClick={()=>{setMenu(false)}}>Our Work</a>
            <a href="#testimonial" className="hover:border-b" onClick={()=>{setMenu(false)}}>Testimonial</a>
          </div>
    </div>
    </>
  );
}
