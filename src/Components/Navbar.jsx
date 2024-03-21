import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className='w-[100%] flex items-center justify-around first-color text-white text-bold text-xl pl-2 pr-2 pt-4 pb-3 gap-20'>
        <Link to={"/"}>
            <button className='magnetic'>
                <span>@Abhishek Shrivastav</span>
            </button>
        </Link>
        <div className='flex gap-14'>
            <Link to={"/work"}>
                <button>
                    Work
                </button>
            </Link>
            <Link to={"/About"}>
                <button>
                    About
                </button>
            </Link>
            <Link to={"/Connects"}>
                <button>
                    Connects
                </button>
            </Link>
        </div>
    </div>
  )
}
