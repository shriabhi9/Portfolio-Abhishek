import React from 'react'
import { IoEarth } from "react-icons/io5";
export const Location = () => {
  return (
    <div className='pt-16'>
      <div className='flex items-center justify-center px-4 second-color h-[80px] w-[220px] rounded-r-full'>
        <h2 className='text-white text-[20px]'>LOCATED IN THE INDIA</h2>
        < IoEarth className='text-white text-[100px]' />
      </div>
    </div>
  )
}
