import React from 'react'
import { Navbar } from '../Components/Navbar/Navbar'
import Project from '../Components/Project'
import { Footer } from "../Components/Footer";


export const Work = () => {
  return (
    <div className='h-full'>
      <Navbar/>
      <Project/>
      <Footer/>
    </div>
  )
}
