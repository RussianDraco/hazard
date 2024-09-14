import React from 'react'
import Animation2 from '../assets/animation2.json'
import Lottie from 'lottie-react'

const About = () => {
  return (
    <div className='translate-y-60 w-full h-[80vh] flex flex-col items-center'>
        <div className="text-5xl mt-32">
          Behind The Scenes
        </div>
        <div className="flex justify-between mt-20">
          <div className="ml-36 -translate-y-[10%] ">
            <Lottie animationData={Animation2} className='w-[500px]'/>
          </div>
          <div className="w-[40%] mr-60 text-xl leading-relaxed">
            <h1>1. Go onto Amazon.com</h1>
            <h1>2. Search for anything food related</h1>
            <h1>3. Our extention scrapes the products website and looks for the alergent description</h1>
            <h1>4. It pulls the information and displays it on the catalog</h1>
            <h1 className='mt-8'>sdasda</h1>
          </div>

        </div>
    </div>
  )
}

export default About;