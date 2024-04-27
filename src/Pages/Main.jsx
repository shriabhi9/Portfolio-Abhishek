import React from 'react'
import { Location } from '../Components/Location'
import { Footer } from '../Components/Footer'
import { Hero } from '../Components/Hero'
export const Main = () => {
  return (
    <div className='first-color h-full'>
      <Location/>
      <Hero></Hero>
      <Footer></Footer>
    </div>
  )
}
