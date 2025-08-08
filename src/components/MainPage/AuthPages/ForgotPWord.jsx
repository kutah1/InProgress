import React from 'react'
import { FcGoogle } from "react-icons/fc";
import {Link} from 'react-router-dom'
const ForgotPWord = () => {
  return (
    <div className='text-center plus-jakarta-sans from-[#0F172A] via-[#0F172A]  to-[#FF790C] bg-gradient-to-br flex min-h-screen justify-center p-10 h-full'>
      <div>
      <div >
             <h1 className=' text-3xl text-white'>GIGUPP</h1>
              <h2 className='text-white pb-3'>Connecting Skills to Success</h2>
      </div>


      <div className='bg-white p-10 h-[600px]  w-[600px]  rounded-2xl items-center  text-center place-items-center flex justify-center'>
        <div  > 
          
            <div className='text-sm'>
            <h1 className='text-3xl text-center font-semibold text-[#0F172A]'>
                Forgot Password
            </h1>
            <p>
              Don't worry. It happens. Just entet the email related <br/>
              to this account

                </p>
         </div>

         <p className='text-left m-3 mt-20 font-semibold'>
            Email
            </p>
            <input type="email" className=' border-gray-400 border-2 rounded-2xl p-3 w-full mb-4' placeholder='Enter your email' />



            <div className='mt-30'>
                <Link to="/changepassword">
              
  
                <button className='text-white bg-[#FF790C] p-3 px-4 w-full rounded-2xl '>Send an email</button>

                  
                    
                    
               </Link>
            </div>
        </div>
        </div>

      </div>
    </div>
  )
}

export default  ForgotPWord
