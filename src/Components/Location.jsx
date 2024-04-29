import React from 'react'
import { IoEarth } from "react-icons/io5";
export const Location = () => {
  return (
    <div className='md:pt-14'>
      <div className='flex items-center justify-center px-4 second-color h-[60px] w-[180px] rounded-r-full md:opacity-100 opacity-0'>
        <h2 className='text-white text-[20px]'>LOCATED IN THE INDIA</h2>
        < IoEarth className='text-white text-[80px]' />
      </div>
    </div>
  )
}
