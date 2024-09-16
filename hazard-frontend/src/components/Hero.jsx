import React from 'react'
import Lottie from 'lottie-react'
import HeroVideo from '../assets/header.mp4'
import HeroAnimation from "../assets/animation1.json"
import { useAuth0 } from "@auth0/auth0-react";

const Hero = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <section className='flex h-[40vh] translate-y-56 xs:w-[80vw]'>
        <div className="flex flex-col ml-28 items-center">
            <h1 className='text-5xl mb-5 items-start text-center'>Simplify Shopping With <span className='text-orange-500'>HAZARD</span></h1>
            <div  className='text-5xl text-center xs:w-80 md:w-[80%]'><h1>Don't Waist An <span className='text-orange-500'>EpiPen</span> </h1></div>
            
            <p className='text-lg w-[80%] ms:w-[200%] mt-6 items-start'>Scan your Amazon browser for any allergents or hazardious content. You have one body, keep it safe!</p>
        <div className="px-3 scale-125 items-center mt-5 py-2 text-xl border-none transition shadow-md hover:scale-110 hover:shadow-lg rounded-lg bg-gradient-to-r from-orange-400 to-orange-600">
            <button type='button' onClick={() => loginWithRedirect()}>Install Now</button>
        </div>
        </div>
        <div className="translate-y-0.5">
            <Lottie animationData={HeroAnimation} delay='3000' className='w-[600px] translate-y-[-35%]
            ' />
        </div>
    </section>
  )
}

export default Hero