import React from 'react'
import Auth0 from '../assets/auth0.png'
import Amazon from '../assets/amazon.png'
import MLH from '../assets/mlh.png'

const Sponsor = () => {
  return (
    <div className="bg-gray-300/30 w-full justify-center mt-12 h-28 translate-y-60 flex items-center">
        <div className="flex justify-evenly items-center gap-12 opacity-80">
            <img src={Auth0} className='w-56 h-16' />
            <img src={Amazon} className='w-56 h-24'/>
            <img src={MLH} className='w-36 h-14' />
        </div>
    </div>
  )
}

export default Sponsor