import React, { useRef, useState } from "react";
import adsIcon from "./assets/ads_icon.svg";
import marketingIcon from "./assets/marketing_icon.svg";
import contentIcon from "./assets/content_icon.svg";
import twitter from "./assets/social_icon.svg";
export default function Services({ dark }) {


  const [visible,setVisible]= useState(false)
  const divRef = useRef(null)


  return (
    <div
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 pt-30 pb-30 z-0
 lg:px-24 px-10  x1:px-40 text-gray-700 dark: text-white"
    >
      <h2 className="font-semibold md:text-[40px] text-[30px] mx-auto text-black dark:text-white">
        How can we help?
      </h2>
      <p className="main-text text-[20px] md:w-[550px] text-center">
        From strategy to execution, we craft digital solutions that move your
        business forward.
      </p>



      <div className="grid md:grid-cols-2 grid-cols-1 gap-14 mt-16 w-[90%] md:w-[100%] lg:w-[85%]">


        <div className="w-[100%] flex h-[180px] p-8 gap-5 bg-white rounded-2xl dark:bg-gray-900 relative items-center group">
         <div className="w-1/3">
           <div className="rounded-full bg-[#F5F7FE] dark:bg-gray-500 w-24 flex justify-center items-center h-24">
            <div className="rounded-full bg-white w-20 dark:bg-gray-900 flex justify-center items-center h-20">
              <img src={adsIcon} alt="" className="w-18" />
            </div>
          </div>
         </div>
            <div className="text-black dark:text-white flex flex-col gap-3.5"><h3 className="font-bold">Advertising</h3>
            <p>We turn bold ideas into powerful digital solutions that connect, engage...</p>
            </div>
          <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-500 absolute rounded-2xl w-[100.5%] left-1/2 -translate-x-1/2 z-[-10] top-1/2 -translate-y-1/2 h-[101.9%] opacity-0 group-hover:opacity-100 transition-all  duration-300 "></div>
        </div>



        <div className="w-[100%] flex h-[180px] p-8 gap-5 bg-white rounded-2xl dark:bg-gray-900 relative items-center group">
         <div className="w-1/3">
           <div className="rounded-full bg-[#F5F7FE] dark:bg-gray-500 w-24 flex justify-center items-center h-24">
            <div className="rounded-full bg-white w-20 dark:bg-gray-900 flex justify-center items-center h-20">
              <img src={marketingIcon} alt="" className="w-18" />
            </div>
          </div>
         </div>
            <div className="text-black dark:text-white flex flex-col gap-3.5"><h3 className="font-bold">Content marketing</h3>
            <p>We turn bold ideas into powerful digital solutions that connect, engage...</p>
            </div>
          <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-500 absolute rounded-2xl w-[100.5%] left-1/2 -translate-x-1/2 z-[-10] top-1/2 -translate-y-1/2 h-[101.9%] opacity-0 group-hover:opacity-100 transition-all  duration-300 "></div>
        </div>

         <div className="w-[100%] flex h-[180px] p-8 gap-5 bg-white rounded-2xl dark:bg-gray-900 relative items-center group">
         <div className="w-1/3">
           <div className="rounded-full bg-[#F5F7FE] dark:bg-gray-500 w-24 flex justify-center items-center h-24">
            <div className="rounded-full bg-white w-20 dark:bg-gray-900 flex justify-center items-center h-20">
              <img src={contentIcon} alt="" className="w-18" />
            </div>
          </div>
         </div>
            <div className="text-black dark:text-white flex flex-col gap-3.5"><h3 className="font-bold">Content writing</h3>
            <p>We turn bold ideas into powerful digital solutions that connect, engage...</p>
            </div>
          <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-500 absolute rounded-2xl w-[100.5%] left-1/2 -translate-x-1/2 z-[-10] top-1/2 -translate-y-1/2 h-[101.9%] opacity-0 group-hover:opacity-100 transition-all  duration-300 "></div>
        </div>

       <div className="w-[100%] flex h-[180px] p-8 gap-5 bg-white rounded-2xl dark:bg-gray-900 relative items-center group">
         <div className="w-1/3">
           <div className="rounded-full bg-[#F5F7FE] dark:bg-gray-500 w-24 flex justify-center items-center h-24">
            <div className="rounded-full bg-white w-20 dark:bg-gray-900 flex justify-center items-center h-20">
              <img src={twitter} alt="" className="w-18" />
            </div>
          </div>
         </div>
            <div className="text-black dark:text-white flex flex-col gap-3.5"><h3 className="font-bold">Social media</h3>
            <p>We turn bold ideas into powerful digital solutions that connect, engage...</p>
            </div>
          <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-500 absolute rounded-2xl w-[100.5%] left-1/2 -translate-x-1/2 z-[-10] top-1/2 -translate-y-1/2 h-[101.9%] opacity-0 group-hover:opacity-100 transition-all  duration-300 "></div>
        </div>
      </div>
    </div>
  );
}
