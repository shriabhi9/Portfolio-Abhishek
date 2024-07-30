import React from "react";
import { Location } from "../Components/Location";
import { Footer } from "../Components/Footer";
import { Hero } from "../Components/Hero";
import { Navbar } from "../Components/Navbar/Navbar";


export const Main = () => {
  return (
    <div>
      <Navbar/>
      <div className="h-full">
        <Location />
        <Hero></Hero>
        <Footer></Footer>
      </div>
    </div>
  );
};
