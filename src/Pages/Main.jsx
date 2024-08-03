import React from "react";
import { Location } from "../Components/Location";
import { Footer } from "../Components/Footer";
import { Hero } from "../Components/Hero";
import { Navbar } from "../Components/Navbar/Navbar";
import Project from "../Components/Project";

export const Main = () => {
  return (
    <div className="h-[100%]">
      <Navbar />
      <Location />
      <Hero></Hero>
      <Project/>
      
      <Footer></Footer>
    </div>
  );
};
