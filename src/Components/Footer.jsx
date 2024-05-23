import { FaLinkedin, FaTwitterSquare,FaGithub } from "react-icons/fa";
export const Footer = () =>{
    return (
        <footer className="text-[#f2f2f287] py-8 md:px-20 px-10 first-color">
            <div className="mx-8">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className=" md:text-left text-center">
                        <p className="md:text-xs text-[10px]">Copyright © 2024 My Portfolio. All rights reserved.</p>
                    </div>
                    <ul className="flex justify-center mt-4 md:mt-0">
                        <li className="mr-6">
                            <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                            <FaLinkedin className="text-[#f2f2f287]"/>
                            </a>
                        </li>
                        <li className="mr-6">
                            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                               <FaGithub className="text-[#f2f2f287]"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                            <FaTwitterSquare className="text-[#f2f2f287]"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}