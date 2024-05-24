import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

export const DropMenu = (props) => {
  const [dMenu, setDMenu] = useState(false);
  const toggleTheme = props.toggleTheme;
  const theme = props.theme;

  return (
    <nav>
      <div className="md:hidden w-[100%] flex flex-wrap justify-between md:text-[16px] text-[14px]  pt-4 pb-3 md:px-20 px-10 md:scale-0 scale-100">
        <Link to={"/"}>
          <button>@Abhishek</button>
        </Link>
        <div className="flex flex-row gap-2">
          <button
            onClick={() => {
              setDMenu(!dMenu);
            }}
          >
            {!dMenu ? <FaBarsStaggered /> : <></> }
          </button>
          <button onClick={toggleTheme}>
            {theme === "light-mode" ? <MdDarkMode /> : <MdOutlineDarkMode />}
          </button>
        </div>
      </div>

      <div
        className={
         dMenu ? "w-[100%] h-[100%] absolute top-0 flex items-center flex-col justify-center gap-10 backdrop-blur-3xl py-8 overflow-hidden z-10":"hidden"
        }
      >
        <div className="flex flex-col items-center justify-center gap-2 py-4 px-4">
          <Link to={"/"}>
            <button>Home</button>
          </Link>
          <Link to={"/Work"}>
            <button>Work</button>
          </Link>
          <Link to={"/About"}>
            <button>About</button>
          </Link>
          <Link to={"/Connects"}>
            <button>Connect</button>
          </Link>
        </div>
        <button
          className="absolute top-[35%] left-[48%]"
          onClick={() => {
            setDMenu(!dMenu);
          }}
        >
          <RxCross1 />
        </button>
      </div>
    </nav>
  );
};
