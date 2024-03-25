import React from 'react'
import "./Connects.css"
export const Connects = () => {
  return (
    <div className='relative overflow-hidden w-[full] flex item-center justify-center p-[4rem]'>
      <div className='h-[500px] w-[600px] flex flex-col items-end rounded-xl second-color shadow-2xl px-14 gap-2'>
        <h2 className='text-[40px] font-bold pt-8 pb-2 text-white'>GET IN TOUCH</h2>
        <div className='w-full flex flex-col gap-8 py-3'>
          <input 
            className='fourth-color rounded-md px-2 py-1 outline-none'
            type="text"
            name=''
            placeholder='Enter your name'
            />
          <input 
            className='fourth-color rounded-md px-2 py-1 outline-none'
            type="email"
            name=''
            placeholder='Enter your email'
            />
          <textarea 
            className='fourth-color rounded-md px-2 py-1 outline-none resize-none'
            rows="4"
            cols="30"
            type="text"
            name=''
            placeholder='Leave your message here'
            />
          </div>
          <button className='third-color w-[30%] h-[8%] rounded-md text-white transition-all duration-200 hover:bg-[#f2f2f2] hover:text-black hover:scale-95'>
            <span className=''>Connect</span>
          </button>
      </div>
    </div>
  )
}
