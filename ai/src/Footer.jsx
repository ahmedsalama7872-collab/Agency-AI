import React from "react";
import logo from "./assets/logo.svg";
import logoDark from "./assets/logo_dark.svg";
import Copyright from "./Copyright";
export default function Footer({ dark }) {
  return (
    <div className="bg-[#F9FBFF] dark:bg-gray-900 w-full">
      <div className=" grid md:grid-cols-2 md:gap-30 gap-5 w-10/12 mx-auto py-12 border-b border-gray-600 mb-4">
        <div>
          <img
            src={dark ? logoDark : logo}
            alt="Logo"
            className="w-[167px] h-[30px]"
          />
          <p className="main-text mt-4 w-3/4 font-bold">
            From strategy to execution, we craft digital solutions that move
            your business forward.
          </p>

          <div className="w-[100%] lg:w-[350px] justify-between main-text flex flex-wrap md:mt-16 mt-10 md:mb-4 gap-3 font-bold">
            <a href="#home" className="hover:underline underline-offset-4">
              Home
            </a>
            <a href="#services" className="hover:underline underline-offset-4">
              Services
            </a>
            <a href="#ourWorks" className="hover:underline underline-offset-4">
              Our Work
            </a>
            <a
              href="#testimonial"
              className="hover:underline underline-offset-4"
            >
              Testimonial
            </a>
          </div>
        </div>

        <div className="flex justify-end">
          <div>
            <h2 className="text-black dark:text-white text-xl font-bold mt-8">
              Subscribe to our newsletter
            </h2>
            <p className="main-text mt-3 text-[18px]">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>

            <div className="flex gap-4 mt-8 items-center">
              <div className="h-12  border border-gray-500 flex gap-3 items-center px-3 w-[60%] bg-white">
                <input
                  type="text"
                  className=" text-black outline-0"
                  placeholder="Enter your email"
                />
              </div>

              <button className="w-[160px] h-[46px] primaryBg text-white hover:scale-[1.03] transition-all flex items-center justify-center">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <Copyright/>
    </div>
  );
}
