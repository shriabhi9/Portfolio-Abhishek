import React from "react";
import { GoArrowDownRight } from "react-icons/go";
export const Connects = () => {
  return (
    <div className="relative overflow-hidden w-[full] flex justify-center p-[4rem] first-color">
      <div className="w-[80%] flex items-start justify-start max-md:flex-wrap gap-1">
        {/* left section */}
        <div className="w-[70%]">
          <h1 className="text-white text-[5rem] mb-4 pr-[]">
            Let's start a project together
          </h1>
          <form className="flex flex-col gap-8 pt-[4rem] mt-4 mb-4">
            <label className="flex flex-col items-start gap-4">
              <p className="text-white text-[2rem]">What's your name?</p>
              <input
                className="text-white bg-transparent outline-none text-[2rem] mx:text-[8px]"
                type="text"
                placeholder="John Doe"
              />
            </label>
            <div className="w-full h-[2px] second-color mt-4 mb-4"></div>
            <label className="flex flex-col items-start gap-4">
              <p className="text-white text-[2rem]">What's your email?</p>
              <input
                className="text-white bg-transparent outline-none text-[2rem]"
                type="text"
                placeholder="john@gmail.com"
              />
            </label>
            <div className="w-full h-[2px] second-color mt-4 mb-4"></div>
            <label className="flex flex-col items-start gap-4">
              <p className="text-white text-[2rem]">Your message</p>
              <input
                className="text-white bg-transparent outline-none text-[2rem]"
                type="text"
                placeholder="Hi Abhishek, can we..."
              />
            </label>
          </form>
          <button
            type="submit"
            className=" rounded-md px-8 py-2 third-color text-xl duration-200 transition-all hover:text-[black] hover:bg-[#f2f2f2] text-white hover:scale-95 mt-12 mb-4"
          >
            Submit
          </button>
        </div>
        {/* right section */}
        <div className="w-[30%] flex flex-col gap-8 ">
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <GoArrowDownRight className="text-white text-[40px]" />
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-[14px] font-bold text-[#5c626d]">
              CONTACT DETAILS
            </p>
            <button className="flex flex-col items-center transition-all duration-300 hover:scale-95 group gap-1 text-white">
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBpDltpvjQdpndTLLmcrsxpsXNNdJDSfWvDXkMjcNrvlhbzwRFDLWWjPdfQjVWVpVlwHBzg">
                <p>shrivastavaabhishek929@gmail.com</p>
              </a>
              <div className="w-[calc(100%-4px)] h-[1px] bg-white scale-0 group-hover:scale-100 transition-all duration-300" />
            </button>
            <button className="flex flex-col items-center justify-start transition-all duration-300 hover:scale-95 group gap-1 text-white">
              <p>+917024744625</p>
              <div className="w-[calc(100%-4px)] h-[1px] bg-white scale-0 group-hover:scale-100 transition-all duration-300" />
            </button>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-[14px] font-bold text-[#5c626d] ">SOCIALS</p>
            <button
              className="flex flex-col items-center transition-all duration-300 hover:scale-95 group gap-1 text-white"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/abhishek-shrivastav-7362811bb/",
                  "_blank"
                );
              }}
            >
              <p>LinkedIn</p>
              <div className="w-[calc(100%-4px)] h-[1px] bg-white scale-0 group-hover:scale-100 transition-all duration-300" />
            </button>
            <button
              className="flex flex-col items-center transition-all duration-300 hover:scale-95 group gap-1 text-white"
              onClick={() => {
                window.open("https://twitter.com/___abhishekk", "_blank");
              }}
            >
              <p>Twitter</p>

              <div className="w-[calc(100%-4px)] h-[1px] bg-white scale-0 group-hover:scale-100 transition-all duration-300" />
            </button>
            <button
              className="flex flex-col items-center transition-all duration-300 hover:scale-95 group gap-1 text-white"
              onClick={() => {
                window.open("https://github.com/shriabhi9", "_blank");
              }}
            >
              <p>Github</p>
              <div className="w-[calc(100%-4px)] h-[1px] bg-white scale-0 group-hover:scale-100 transition-all duration-300" />
            </button>
          </div>
        </div>
      </div>

      <footer></footer>
    </div>
  );
};
