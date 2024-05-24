import { Link } from "react-router-dom";
import { DropMenu } from "./DropMenu";
import { useEffect,useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

export const Navbar = () => {
  const [theme, setTheme] = useState("light-mode");

  const toggleTheme = () => {
    if (theme === "light-mode") {
      setTheme("dark-mode");
    } else {
      setTheme("light-mode");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <DropMenu toggleTheme={toggleTheme} />
      <nav className="w-[100%] flex flex-wrap justify-around items-center md:text-[16px] text-[14px]  pt-4 pb-3 md:px-20 px-10 md:scale-100 scale-0">
        <Link to={"/"}>
          <button className="flex flex-col items-center transition-all duration-300 hover:scale-95 group gap-1 px-4 py-2">
            <span>@Abhishek</span>
          </button>
        </Link>
        <div className="flex gap-8">
          <Link to={"/work"}>
            <button className="flex flex-col items-center transition-all duration-300 hover:scale-95 group gap-1 px-4 py-2">
              <span>Work</span>
            </button>
          </Link>
          <Link to={"/About"}>
            <button className="flex flex-col items-center transition-all duration-300 hover:scale-95 group gap-1 px-4 py-2">
              <span>About</span>
            </button>
          </Link>
          <Link to={"/Connects"}>
            <button className="flex flex-col items-center transition-all duration-300 hover:scale-95 group gap-1 px-4 py-2">
              <span>Connects</span>
            </button>
          </Link>
        </div>
        <button onClick={toggleTheme}>

          {theme === "light-mode" ? <MdDarkMode /> : <MdOutlineDarkMode />}
        </button>
      </nav>
    </div>
  );
};
