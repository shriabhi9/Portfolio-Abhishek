import { FaLinkedin, FaTwitterSquare,FaGithub } from "react-icons/fa";
export const Footer = () =>{
    return (
        <footer className=" py-8 md:px-20 px-10">
            <div className="mx-8">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className=" md:text-left text-center">
                        <p className="md:text-xs text-[10px]">Copyright © 2024 My Portfolio. All rights reserved.</p>
                    </div>
                    <ul className="flex justify-center mt-4 md:mt-0">
                        <li className="mr-6">
                            <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer" className=" hover:underline">
                            <FaLinkedin className=""/>
                            </a>
                        </li>
                        <li className="mr-6">
                            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className=" hover:underline">
                               <FaGithub className=""/>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className=" hover:underline">
                            <FaTwitterSquare className=""/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}