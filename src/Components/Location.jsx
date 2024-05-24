import React from 'react'
import { IoEarth } from "react-icons/io5";
export const Location = () => {
  return (
    <div className='md:py-14 pt-0 pb-10'>
      <div className='flex items-center justify-center px-4 shadow-xl md:h-[60px] md:w-[180px] h-[40px] w-[120px] rounded-r-full'>
        <h2 className=' md:text-[14px] text-[9px]'>LOCATED IN THE INDIA</h2>
        < IoEarth className='md:text-[70px] text-[60px]' />
      </div>
    </div>
  )
}
