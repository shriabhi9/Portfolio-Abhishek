import React from "react";
import { Location } from "../Components/Location";
import { Footer } from "../Components/Footer";
import { Hero } from "../Components/Hero";
import { Navbar } from "../Components/Navbar/Navbar";
import Project from "../Components/Project";

export const Main = () => {
  return (
    <div className="h-[100%] scroll-smooth">
      <Navbar />
      <Location />
      <Hero></Hero>
      <div className="pt-8">
        <h1 className="md:text-4xl text-[20px] text-center">Projects</h1>
        <Project />
      </div>

      <Footer></Footer>
    </div>
  );
};
