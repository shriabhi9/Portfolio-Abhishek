import React from "react";
import { myImage } from "../Data";
import { Navbar } from "../Components/Navbar/Navbar";

export const About = () => {
  return (
    <div>
      <Navbar />
      <div className="relative overflow-hidden w-[full] flex item-center justify-center p-[4rem]">
        <div></div>
        <div>
          <img src={myImage} alt="abhishek" />
        </div>
      </div>
    </div>
  );
};
