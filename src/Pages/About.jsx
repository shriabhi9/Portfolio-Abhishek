import React from "react";
import { myImage } from "../Data";
import { Navbar } from "../Components/Navbar/Navbar";
import { Footer } from "../Components/Footer";

export const About = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center py-10 px-5 md:px-10 lg:px-20">
        <div className="max-w-4xl w-full rounded-lg shadow-lg p-8 md:p-16">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            About Me
          </h1>
          <p className="text-lg mb-6">
            Hi, I'm{" "}
            <span className="font-semibold ">
              Abhishek Shrivastava
            </span>
            , a dynamic full stack web developer with extensive experience in
            the MERN stack. I specialize in creating robust, scalable, and
            high-performing web applications. My skill set includes in-depth
            knowledge of modern JavaScript frameworks and libraries like React,
            Node.js, Express, and MongoDB.
          </p>
          <p className="text-lg mb-6">
            Apart from web development, I have a strong foundation in
            programming languages such as C++ and Python, with advanced
            proficiency in Python. I'm passionate about solving complex
            problems, optimizing code, and implementing efficient algorithms. I
            thrive in collaborative environments where I can contribute to the
            success of the team and the project.
          </p>
          <p className="text-lg mb-6">
            Whether it's frontend design or backend logic, I enjoy the entire
            process of bringing ideas to life through code. I'm constantly
            exploring new technologies and methodologies to stay ahead in the
            fast-paced tech industry.
          </p>
          <div className="flex justify-center mt-10">
            <a
              href="/Work"
              className=" rounded-md md:px-8 md:py-2 px-6 py-1 third-color text-xl hover:text-[black] hover:bg-[#f2f2f2]  hover:scale-95 mt-12 mb-4 duration-200"
              >
              View My Work
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
