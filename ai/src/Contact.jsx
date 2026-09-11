import React from "react";
import mail from './assets/email_icon.svg'
import person from './assets/person_icon.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";



export default function Contact() {
  return (
    <div
      id="contact"
      className="relative flex flex-col items-center gap-7 px-4 pt-30 pb-30 z-0
sm : px-12 1g : px-24 x1:px-40 text-gray-700 dark: text-white dark:bg-black"
    >
      <h2 className="font-semibold md:text-[40px] text-[30px] mx-auto text-black dark:text-white">
        Reach out to us
      </h2>
      <p className="main-text text-[20px] md:w-[600px] text-center">
        Ready to grow your brand? Let’s connect and build something exceptional together.
      </p>
      
    <form className="mt-10 grid grid-cols-2 gap-5 w-[55%]">
        <div>
            <label className="font-bold text-[18px] text-black dark:text-white ">Your Name</label>
        <div className="h-12 rounded border mt-4 border-gray-500 flex gap-3 items-center px-3">
        <img src={person} alt="" />
        <input type="text" className="text-black outline-0 dark:text-white" placeholder="Enter your name" required/>
        </div>
        </div>
       
       
       
        <div>
            <label className="font-bold text-[18px] text-black dark:text-white">Email id</label>
        <div className="h-12 rounded border mt-4 border-gray-500 flex gap-3 items-center px-3">
        <img src={mail} alt="" />
        <input type="text" className="dark:text-white text-black outline-0" placeholder="Enter your email" required />
        </div>
        </div>
     
     
     
     
        <div className=" col-span-2 mt-8">
            <label className="font-bold text-[18px] text-black dark:text-white">Message</label>
        <div className="  rounded border mt-4 border-gray-500 flex gap-3 items-center px-3">
     
        <textarea rows={8} className=" text-black outline-0 resize-none p-4 dark:text-white" placeholder="Enter your message" required/>
        </div>
        </div>

        <button type="submit" className="w-[160px] h-[46px] rounded-[33px] primaryBg !text-white hover:scale-[1.03] transition-all flex items-center justify-center"
>Submit <FontAwesomeIcon icon={faArrowRightLong} className="ms-1" /> </button>
    </form>

    </div>
  );
}
