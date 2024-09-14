// import React from 'react'

// const Login = () => {
//   return (
//     <div className='flex flex-col items-center justify-center translate-y-40 text-4xl'>
//         Login
//         <div className="bg-black m-10 w-[40%] h-[500px]"></div>
//     </div>
//   )
// }

// export default Login

import React from "react";

const LoginButton = () => {
  return (
    <div>
      <div>
          <label for="allergyin">Please enter an allergy: </label>
          <input type="text" id="allergyin"></input>
          <button id="allergy">Add</button>
      </div>
      <div id="allergies"></div>
    </div>
  )
};

export default LoginButton;