import React from "react";
import { GoArrowDownRight } from "react-icons/go";
export const Connects = () => {
  return (
    <div className="relative overflow-hidden w-[full] flex justify-center md:px-20 py-20 px-10 first-color">
      <div className="w-[80%] flex items-start justify-start max-md:flex-wrap md:gap-10 gap-2">
        {/* left section */}
        <div className="md:w-[70%] w-[240px] duration-500 transition-all">
          <h1 className="text-white md:text-[7rem] text-[2rem] mb-4 duration-500 transition-all">
            Let's start a project together
          </h1>
          <form className="flex flex-col gap-8 pt-[4rem] mt-4 mb-4">
            <label className="flex flex-col items-start gap-4">
              <p className="text-white md:text-[3rem] text-[1.5rem] duration-500 transition-all">What's your name?</p>
              <input
                className="text-white bg-transparent outline-none md:text-[3rem] text-[1.5rem] mx:text-[8px] duration-500 transition-all"
                type="text"
                placeholder="John Doe"
              />
            </label>
            <div className="w-full h-[2px] second-color mt-4 mb-4"></div>
            <label className="flex flex-col items-start gap-4">
              <p className="text-white md:text-[3rem] text-[1.5rem] duration-500 transition-all">What's your email?</p>
              <input
                className="text-white bg-transparent outline-none md:text-[3rem] text-[1.5rem] duration-500 transition-all"
                type="text"
                placeholder="john@gmail.com"
              />
            </label>
            <div className="w-full h-[2px] second-color mt-4 mb-4"></div>
            <label className="flex flex-col items-start gap-4">
              <p className="text-white md:text-[3rem] text-[1.5rem] duration-500 transition-all">Your message</p>
              <input
                className="text-white bg-transparent outline-none md:text-[3rem] text-[1.5rem] duration-500 transition-all"
                type="text"
                placeholder="Hi Abhishek, can we..."
              />
            </label>
          </form>
          <button
            type="submit"
            className=" rounded-md md:px-8 md:py-2 px-6 py-1 third-color text-xl duration-200 transition-all hover:text-[black] hover:bg-[#f2f2f2] text-white hover:scale-95 mt-12 mb-4"
          >
            Submit
          </button>
        </div>
        {/* right section */}
        <div className="w-[30%] item-start pl-0 flex flex-col gap-3">
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <GoArrowDownRight className="text-white text-[40px]" />
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="font-bold text-[#5c626d]">CONTACT DETAILS</p>
            <button className="flex flex-col items-center transition-all duration-200 hover:scale-95 group gap-1 text-white">
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBpDltpvjQdpndTLLmcrsxpsXNNdJDSfWvDXkMjcNrvlhbzwRFDLWWjPdfQjVWVpVlwHBzg">
                <p className="md:text-xl text-md">shrivastavaabhishek929@gmail.com</p>
              </a>
              <div className="w-[calc(100%-4px)] h-[1px] bg-white scale-0 group-hover:scale-100 transition-all duration-200" />
            </button>
            <button className="flex flex-col items-center justify-start transition-all duration-200 hover:scale-95 group gap-1 text-white">
              <p className="md:text-xl text-md">+917024744625</p>
              <div className="w-[calc(100%-4px)] h-[1px] bg-white scale-0 group-hover:scale-100 transition-all duration-200" />
            </button>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className=" font-bold text-[#5c626d] ">SOCIALS</p>
            <button
              className="flex flex-col items-center transition-all duration-200 hover:scale-95 group gap-1 text-white"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/abhishek-shrivastav-7362811bb/",
                  "_blank"
                );
              }}
            >
              <p className="md:text-xl text-md">LinkedIn</p>
              <div className="w-[calc(100%-4px)] h-[1px] bg-white scale-0 group-hover:scale-100 transition-all duration-200" />
            </button>
            <button
              className="flex flex-col items-center transition-all duration-200 hover:scale-95 group gap-1 text-white"
              onClick={() => {
                window.open("https://twitter.com/___abhishekk", "_blank");
              }}
            >
              <p className="md:text-xl text-md">Twitter</p>

              <div className="w-[calc(100%-4px)] h-[1px] bg-white scale-0 group-hover:scale-100 transition-all duration-200" />
            </button>
            <button
              className="flex flex-col items-center transition-all duration-200 hover:scale-95 group gap-1 text-white"
              onClick={() => {
                window.open("https://github.com/shriabhi9", "_blank");
              }}
            >
              <p className="md:text-xl text-md">Github</p>
              <div className="w-[calc(100%-4px)] h-[1px] bg-white scale-0 group-hover:scale-100 transition-all duration-200" />
            </button>
          </div>
        </div>
      </div>

      <footer></footer>
    </div>
  );
};
