import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Project = () => {
  return (
    <div className="w-[100%] h-[100%] flex items-center py-10">
      {/* proj1 */}
      <div className="h-full w-full flex">
        <div className="w-[1080px] h-[530px] px-10">
          <h2 className="text-xl mb-2">MOTELO</h2>
          <div className="relative Motelo w-full h-full rounded-md hover:scale-95 translate-x-5 duration-200 group">
            <div className="absolute h-full w-full rounded-md bg-black opacity-10 hover:opacity-30 z-[1] duration-200"></div>
            <div className="">
              <h2 className="absolute z-[2] opacity-0 group-hover:opacity-100 left-10 translate-y-[440px] group-hover:translate-y-10 duration-200 text-2xl mb-2 text-white">
                MOTELO
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
            <p className="py-2 text-sm">
              MOTELO IS A TRAVEL WEBSITE THAT ALLOWS USERS TO SEARCH FOR
              ACCOMMODATIONS AND BOOK THEM. IT ALSO HAS A FEATURE TO ADD NEW
              ACCOMMODATIONS AND EDIT EXISTING ONES. 
            </p>
          </div>
        </div>
        <div></div>
      </div>
      <div></div>
      <div></div>
      
    </div>
  );
};

export default Project;
