import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed z-10 w-full h-20 shadow-md flex justify-evenly items-center backdrop-filter backdrop-blur-md '>
        <div className="text-3xl font-medium">
            HAZARD
        </div>
        <div className="text-black/65 flex justify-evenly w-[20%] ">
            <a className='hover:text-black hover:cursor-pointer transition'>About</a>
            <a className='hover:text-black hover:cursor-pointer transition'>Devlopers</a>
            <a className='hover:text-black hover:cursor-pointer transition'>Help</a>
            <a className='hover:text-black hover:cursor-pointer transition'>HTN2024</a>
        </div>
        <div className="px-3 py-2 border-none shadow-md hover:scale-110 hover:shadow-lg transition rounded-lg bg-gradient-to-r from-orange-400 to-orange-600">
            <button>Install Now</button>
        </div>

    </nav>
  )
}

export default Navbar