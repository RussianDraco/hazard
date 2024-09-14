import React from 'react'
import Person1 from "../assets/avatar1.png"

const Testimonials = () => {
  return (
    <div className='flex flex-col items-center translate-y-64 w-full h-[70vh] '>
        <div className="text-6xl mb-5">
            Testimonials
        </div>
        <div className="text-2xl">
            See What Others Are Saying
        </div>
        <div className="w-[80%] h-[70%] mt-5 flex justify-evenly">
            <div className="h-[100%] w-[30%] flex flex-col items-center rounded-3xl shadow-xl">
                <img src={Person1} className='w-60 h-40 mt-5'/>
                <div className="text-orange-500 mt-5 text-3xl font-semibold">JOHN SMITH</div>
                <div className="w-[20%] h-[2px] bg-black m-5 rounde1"></div>
                <div className="w-[70%] text-center"><p>"I've never loved a chrome extention more than Hazard. It makes shopping for my children 1000x more effective!"</p></div>
                <div className="mt-3 px-3 py-2 bg-orange-500 rounded-xl hover:cursor-pointer shadow-lg hover:scale-110">
                    <button>Learn More!</button>
                </div>
            </div>
            <div className="h-[100%] w-[30%] rounded-3xl shadow-xl">

            </div>
            <div className="h-[100%] w-[30%] rounded-3xl shadow-xl">

            </div>
        </div>
    </div>
  )
}

export default Testimonials