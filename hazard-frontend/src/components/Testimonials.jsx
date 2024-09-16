import React from 'react'
import Person1 from "../assets/avatar1.png"
import Person2 from "../assets/avatar2.png"
import Person3 from "../assets/avatar3.png"
import { useAuth0 } from "@auth0/auth0-react";

const Testimonials = () => {
    const { loginWithRedirect } = useAuth0();
  return (
    <div className='flex flex-col items-center translate-y-96 w-full h-[70vh] '>
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
                    <button type='button' onClick={() => loginWithRedirect()}>Learn More!</button>
                </div>
            </div>
            <div className="h-[100%] w-[30%] flex flex-col items-center rounded-3xl shadow-xl">
                <img src={Person2} className='w-56 h-36 mt-5'/>
                <div className="text-orange-500 mt-5 text-3xl font-semibold">ALICE JOHN</div>
                <div className="w-[20%] h-[2px] bg-black m-5 rounde1"></div>
                <div className="w-[70%] text-center"><p>"I've never loved a chrome extention more than Hazard. It makes shopping for my children 1000x more effective!"</p></div>
                <div className="mt-3 px-3 py-2 bg-orange-500 rounded-xl hover:cursor-pointer shadow-lg hover:scale-110">
                    <button type='button' onClick={() => loginWithRedirect()}>Learn More!</button>
                </div>
            </div>
            <div className="h-[100%] w-[30%] flex flex-col items-center rounded-3xl shadow-xl">
                <img src={Person3} className='w-56 h-36 mt-5'/>
                <div className="text-orange-500 mt-5 text-3xl font-semibold">GREG BLACK</div>
                <div className="w-[20%] h-[2px] bg-black m-5 rounde1"></div>
                <div className="w-[70%] text-center"><p>"I've never loved a chrome extention more than Hazard. It makes shopping for my children 1000x more effective!"</p></div>
                <div className="mt-3 px-3 py-2 bg-orange-500 rounded-xl hover:cursor-pointer shadow-lg hover:scale-110">
                    <button type='button' onClick={() => loginWithRedirect()}>Learn More!</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials