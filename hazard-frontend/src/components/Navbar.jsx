import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, logout } = useAuth0();
  return (
    <nav className='fixed z-10 w-full h-20 shadow-md flex justify-evenly items-center backdrop-filter backdrop-blur-md '>
          <a href='/' ><div className="text-3xl font-medium">
            HAZARD
          </div></a>
        <div className="text-black/65 flex justify-evenly normal:w-[20%] xs:w-[40%] md:w-[30%] sm:w-[40%]">
            <a className='hover:text-black hover:cursor-pointer transition'>About</a>
            <a className='hover:text-black hover:cursor-pointer transition'>Developers</a>
            <a className='hover:text-black hover:cursor-pointer transition'>Help</a>
            <a className='hover:text-black hover:cursor-pointer transition'>HTN2024</a>
        </div>
        
        <div className="px-3 py-2 border-none shadow-md hover:scale-110 hover:shadow-lg transition rounded-lg bg-gradient-to-r from-orange-400 to-orange-600">
          <button type='button' onClick={() => loginWithRedirect()}>Install Now</button>
        </div>

    </nav>
  )
}

export default Navbar