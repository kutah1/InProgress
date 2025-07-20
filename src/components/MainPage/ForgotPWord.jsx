import React from 'react'
import { FcGoogle } from "react-icons/fc";

const  ForgotPWord = () => {
  return (
    <div className='text-center  text-xs sm:text-lg flex justify-center p-10' >
    
      <div className=' flex justify center  bg-white p-10  w-[500px] shadow-lg shadow-gray-600 rounded-xl items-center  text-center place-items-center mt-10'>
        <div  > 
        
           
            <div className='text-sm'>
            <h1 className=' text-orange-500 text-lg sm:text-lg  text-center font-semibold '>
              Create a New Password
            </h1>
            <div className='sm:text-center text-left sm:m-5 mt-4 mb-4 '>
                Don't worry it happens. Just enter <br className='hidden sm:block'/>
                the email relate to this account

                </div>
         </div>

         
            <input type="password" className='border border-gray-300 rounded-lg p-2 w-full mb-4' placeholder='Enter your new password' />


           
            <input type="password" className='border border-gray-300 rounded-lg p-2 w-full mb-4' placeholder='Confirm your password' />

            <div>
              
              <div className='text-left'>
                <h2 className='text-red-500'>
                    Password criteria tips:


                </h2>
                <ul className='text-xs sm:text-lg'>
                    <li>
                        Minimum 6 characters
                    </li>
                    <li>
                        One number & one capital letter
                    </li>
                </ul>
              </div>

                 <button className=' bg-orange-500 text-white mt-5 border-2 px-4 w-full rounded-lg p-2 flex items-center justify-center gap-3'>
                  Continue
                    
                    </button>
                    

            </div>
        </div>
        </div>

      
    </div>
  )
}

export default ForgotPWord
