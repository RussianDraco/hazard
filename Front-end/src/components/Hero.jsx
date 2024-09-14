import React from 'react'
import HeroVideo from '../assets/header.mp4'

const Hero = () => {
  return (
    <section className='flex h-[40vh] translate-y-56 justify-evenly '>
        <div className="flex flex-col ml-28 items-center">
            <h1 className='text-5xl mb-5 items-start'>Simplify Shopping With <span className='text-orange-500'>HAZARD</span></h1>
            <h1 className='text-5xl items-start'>Know What Your <span className='text-orange-500' >EXACTLY</span> Getting</h1>
            <p className='text-lg w-[80%] mt-6 items-start'>Scan your Amazon browser for any allergents or hazardious content. You have one body, keep it clean!</p>
        <div className="px-3 items-center mt-5 py-2 text-xl border-none transition shadow-md hover:scale-110 hover:shadow-lg rounded-lg bg-gradient-to-r from-orange-400 to-orange-600">
            <button>Install Now</button>
        </div>
        </div>
        <div className="">
            <video src={HeroVideo} autoPlay loop muted className='mr-16'/>
        </div>
    </section>
  )
}

export default Hero