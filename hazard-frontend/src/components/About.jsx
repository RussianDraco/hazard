import React from 'react'
import Animation2 from '../assets/animation2.json'
import Lottie from 'lottie-react'
import { useAuth0 } from "@auth0/auth0-react";

const About = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className='translate-y-60 w-full h-[80vh] flex flex-col items-center'>
        <div className="text-6xl mt-32">
          Behind The Scenes
        </div>
        <div className="flex justify-between mt-20">
          <div className="ml-36 -translate-y-[10%] ">
            <Lottie animationData={Animation2} className='w-[500px]'/>
          </div>
          <div className="w-[40%] xs:w-80 mb-80 mr-60 text-xl leading-relaxed">
            <h1>1. Go onto Amazon.com</h1>
            <h1>2. Search for anything food related</h1>
            <h1>3. Our extention scrapes the products website and looks for the alergent description</h1>
            <h1>4. It pulls the information and displays it on the catalog</h1>
            <h1 className='mt-8'>Make shopping easier and safer.</h1>
            <div className=" mt-8 py-3 border-none shadow-md hover:scale-110 hover:shadow-lg transition rounded-lg bg-gradient-to-r from-orange-400 to-orange-600 text-center">
              <button type='button' onClick={()=>loginWithRedirect()}>Click To Continue</button>
            </div>
          </div>

        </div>
    </div>
  )
}

export default About;