import React, { useState } from "react";
import { GoArrowDownRight } from "react-icons/go";
import { Navbar } from "../Components/Navbar/Navbar";


export const Connects = () => {

  const [formData,setFormData] = useState({
    name:'',
    email:'',
    message:''
  })

  const handleChange = (e)=>{
    setFormData({
      ...formData,[e.target.name]:e.target.value
    });
    console.log(formData);
  }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//         const response = await fetch('/api/contact', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(formData),
//         });
//         if (response.ok) {
//             alert('Message sent successfully!');
//         } else {
//             alert('Failed to send message.');
//         }
//     } catch (error) {
//         console.error('Error sending message:', error);
//     }
// };

  return (
    <div>
      <Navbar/>
      <div className="relative overflow-hidden w-[full] flex justify-center md:px-20 py-20 px-10">
        <div className="w-[80%] flex items-start justify-start max-md:flex-wrap md:gap-10 gap-2">
          {/* left section */}
          <div className="md:w-[70%] w-[240px]  ">
            <h1 className=" md:text-[3rem] text-[1.7rem] mb-4">
              Let's start a project together
            </h1>
            <form className="flex flex-col gap-8 pt-[4rem] mt-4 mb-4">
              <label className="flex flex-col items-start gap-4">
                <p className=" md:text-[2rem] text-[1rem]">
                  What's your name?
                </p>
                <input
                  className=" bg-transparent outline-none md:text-[2rem] text-[1rem]"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                />
              </label>
              <div className="w-full h-[2px] second-color mt-4 mb-4"></div>
              <label className="flex flex-col items-start gap-4">
                <p className=" md:text-[2rem] text-[1rem]  ">
                  What's your email?
                </p>
                <input
                  className=" bg-transparent outline-none md:text-[2rem] text-[1rem]"
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@gmail.com"
                />
              </label>
              <div className="w-full h-[2px] second-color mt-4 mb-4"></div>
              <label className="flex flex-col items-start gap-4">
                <p className=" md:text-[2rem] text-[1rem]  ">Your message</p>
                <input
                  className=" bg-transparent outline-none md:text-[2rem] text-[1rem]"
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Abhishek, can we..."
                />
              </label>
            </form >
            <button
              type="submit"
              className=" rounded-md md:px-8 md:py-2 px-6 py-1 third-color text-xl hover:text-[black] hover:bg-[#f2f2f2]  hover:scale-95 mt-12 mb-4"
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
              <GoArrowDownRight className="text-[40px]" />
            </div>
            <div className="flex flex-col items-start gap-2">
              <p className="font-bold text-[#5c626d] md:text-[1rem] text-xs">
                CONTACT DETAILS
              </p>
              <button className="flex flex-col items-center hover:scale-95 group gap-1">
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBpDltpvjQdpndTLLmcrsxpsXNNdJDSfWvDXkMjcNrvlhbzwRFDLWWjPdfQjVWVpVlwHBzg">
                  <p className="md:text-[1rem] text-[13px]">
                    shrivastavaabhishek929@gmail.com
                  </p>
                </a>
                <div className="w-[calc(100%-4px)] h-[1px] bg-white scale-0 group-hover:scale-100" />
              </button>
              <button className="flex flex-col items-center justify-start   hover:scale-95 group gap-1">
                <p className="md:text-[1rem] text-xs">+917024744625</p>
                <div className="w-[calc(100%-4px)] h-[1px] bg-white scale-0 group-hover:scale-100" />
              </button>
            </div>
            <div className="flex flex-col items-start gap-2">
              <p className=" font-bold text-[#5c626d] md:text-[1rem] text-xs">
                SOCIALS
              </p>
              <button
                className="flex flex-col items-center   hover:scale-95 group gap-1"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/abhishek-shrivastav-7362811bb/",
                    "_blank"
                  );
                }}
              >
                <p className="md:text-[1rem] text-xs">LinkedIn</p>
                <div className="w-[calc(100%-4px)] h-[1px] bg-white scale-0 group-hover:scale-100"/>
              </button>
              <button
                className="flex flex-col items-center   hover:scale-95 group gap-1"
                onClick={() => {
                  window.open("https://twitter.com/___abhishekk", "_blank");
                }}
              >
                <p className="md:text-[1rem] text-xs">Twitter</p>

                <div className="w-[calc(100%-4px)] h-[1px] bg-white scale-0 group-hover:scale-100" />
              </button>
              <button
                className="flex flex-col items-center   hover:scale-95 group gap-1 "
                onClick={() => {
                  window.open("https://github.com/shriabhi9", "_blank");
                }}
              >
                <p className="md:text-[1rem] text-xs">Github</p>
                <div className="w-[calc(100%-4px)] h-[1px] bg-white scale-0 group-hover:scale-100" />
              </button>
            </div>
          </div>
        </div>

        <footer></footer>
      </div>
    </div>
  );
};
