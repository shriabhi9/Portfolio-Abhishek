import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Project = () => {
  return (
    <div className="w-[100%] h-[100%] flex items-center md:flex-row flex-col md:gap-1 gap-24 md:py-10 mb-20 md:overflow-x-auto scroll-smooth">
      {/* proj1 */}
      <div className="w-[100%]">
        <div className="w-full">
          <h2 className="md:text-xl text-xs mb-2 px-10">MOTELO</h2>
          <div className="md:w-[1080px] md:h-[530px] w-full h-[200px] md:px-10 px-2">
            <div className="Motelo h-[100%] w-[100%] rounded-md hover:scale-95 duration-200 group relative">
              <div className="absolute h-full w-full rounded-md bg-black opacity-10 hover:opacity-30 z-[1] duration-200"></div>
              <div className="">
                <h2 className="absolute z-[2] opacity-0 group-hover:opacity-100 left-10 translate-y-[440px] group-hover:translate-y-10 duration-200 md:text-xl text-xs mb-2 text-white">
                  <a href="https://motelo.vercel.app/" className="flex flex-row items-center ">
                    <p>MOTELO</p>
                    <GoArrowUpRight className="" />
                  </a>
                </h2>
                <a href="https://motelo.vercel.app/">
                  <h2 className="absolute border px-4 py-1 rounded-full z-[2] opacity-0 group-hover:opacity-100 right-10 group-hover:translate-y-[440px] duration-200 text-2xl mb-2 text-white">
                    <div className="flex items-center justify-center text-sm">
                      <p className="">VISIT</p>
                      <GoArrowUpRight className="" />
                    </div>
                  </h2>
                </a>
              </div>
            </div>
            <div>
              <p className="py-2 md:text-xs text-[9px]">
                MOTELO IS A TRAVEL WEBSITE THAT ALLOWS USERS TO SEARCH FOR
                ACCOMMODATIONS AND BOOK THEM. IT ALSO HAS A FEATURE TO ADD NEW
                ACCOMMODATIONS AND EDIT EXISTING ONES.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%]">
        <div className="w-full">
          <h2 className="md:text-xl text-xs mb-2 px-10">WEATHER APPLICATION</h2>
          <div className="md:w-[1080px] md:h-[530px] w-full h-[200px] md:px-10 px-2">
            <div className="Weather h-[100%] w-[100%] rounded-md hover:scale-95 duration-200 group relative">
              <div className="absolute h-full w-full rounded-md bg-black opacity-10 hover:opacity-30 z-[1] duration-200"></div>
              <div className="">
                <h2 className="absolute z-[2] opacity-0 group-hover:opacity-100 left-10 translate-y-[440px] group-hover:translate-y-10 duration-200 md:text-xl text-xs mb-2 text-white">
                  <a href="/" className="flex flex-row items-center ">
                    <p>Weather Application</p>
                    <GoArrowUpRight className="" />
                  </a>
                </h2>
                <a href="/">
                  <h2 className="absolute border px-4 py-1 rounded-full z-[2] opacity-0 group-hover:opacity-100 right-10 group-hover:translate-y-[440px] duration-200 text-2xl mb-2 text-white">
                    <div className="flex items-center justify-center text-sm">
                      <p className="">NA</p>
                      <GoArrowUpRight className="" />
                    </div>
                  </h2>
                </a>
              </div>
            </div>
            <div>
              <p className="py-2 md:text-xs text-[9px]">
                WEATHERAPP PROVIDES REAL-TIME WEATHER UPDATES, FORECASTS, AND
                ALERTS. USERS CAN SEARCH LOCATIONS, SAVE FAVORITES, AND SUBMIT
                OBSERVATIONS. CUSTOMIZABLE NOTIFICATIONS ENSURE A SEAMLESS
                EXPERIENCE ACROSS ALL DEVICES.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%]">
        <div className="w-full">
          <h2 className="md:text-xl text-xs mb-2 px-10">PASSWORD GEN</h2>
          <div className="md:w-[1080px] md:h-[530px] w-full h-[200px] md:px-10 px-2">
            <div className="Password h-[100%] w-[100%] rounded-md hover:scale-95 duration-200 group relative">
              <div className="absolute h-full w-full rounded-md bg-black opacity-10 hover:opacity-30 z-[1] duration-200"></div>
              <div className="">
                <h2 className="absolute z-[2] opacity-0 group-hover:opacity-100 left-10 translate-y-[440px] group-hover:translate-y-10 duration-200 md:text-xl text-xs mb-2 text-white">
                  <a href="/" className="flex flex-row items-center ">
                    <p>Password Generator</p>
                    <GoArrowUpRight className="" />
                  </a>
                </h2>
                <a href="/">
                  <h2 className="absolute border px-4 py-1 rounded-full z-[2] opacity-0 group-hover:opacity-100 right-10 group-hover:translate-y-[440px] duration-200 text-2xl mb-2 text-white">
                    <div className="flex items-center justify-center text-sm">
                      <p className="">NA</p>
                      <GoArrowUpRight className="" />
                    </div>
                  </h2>
                </a>
              </div>
            </div>
            <div>
              <p className="py-2 md:text-xs text-[9px]">
                PASSWORDGEN IS A SECURE TOOL THAT GENERATES STRONG, RANDOM
                PASSWORDS. USERS CAN CUSTOMIZE LENGTH, CHARACTERS, AND SAVE
                PASSWORDS. ENSURES ENHANCED SECURITY AND PROTECTION FOR ONLINE
                ACCOUNTS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
