import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div 
        className='w-[100%] flex flex-wrap items-center justify-around first-color text-white text-sm pl-2 pr-2 pt-4 pb-3 gap-40 candal-regular'>
        <Link to={"/"}>
            <button className='flex flex-col items-center transition-all duration-300 hover:scale-95 group gap-1 px-4 py-2'>
                <span>@ABHISHEK</span>
                <div className='h-[4px] w-[4px] rounded-full bg-white scale-0 group-hover:scale-100 transition-all duration-100'/>
            </button>
        </Link>
        <div className='flex gap-8'>
            <Link to={"/work"}>
                <button className='flex flex-col items-center transition-all duration-300 hover:scale-95 group gap-1 px-4 py-2'>
                    <span>WORK</span>
                    <div className='h-[4px] w-[4px] rounded-full bg-white scale-0 group-hover:scale-100 transition-all duration-300'/>
                </button>
            </Link>
            <Link to={"/About"}>
                <button className='flex flex-col items-center transition-all duration-300 hover:scale-95 group gap-1 px-4 py-2'>
                   <span>ABOUT</span>
                   <div className='h-[4px] w-[4px] rounded-full bg-white scale-0 group-hover:scale-100 transition-all duration-300'/> 
                </button>
            </Link>
            <Link to={"/Connects"}>
                <button className='flex flex-col items-center transition-all duration-300 hover:scale-95 group gap-1 px-4 py-2'>
                    <span>CONNECTS</span>
                    <div className='h-[4px] w-[4px] rounded-full bg-white scale-0 group-hover:scale-100 transition-all duration-300'/> 
                </button>
            </Link>
        </div>
    </div>
  )
}
