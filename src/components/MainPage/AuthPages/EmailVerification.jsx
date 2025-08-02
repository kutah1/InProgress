import React from 'react'
import { FcGoogle } from "react-icons/fc";
import {Link} from 'react-router-dom'
import { useState } from 'react'; 
const EmailVerification= () => {
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
               Email Verification
            </h1>
            <p className='mt-5'>
           Enter 6- digit code

                </p>
                <p>
                    Your code was sent to eva <exp>********</exp>gmail.com
                </p>
         </div>
            
            
             <div className='flex-row  text-center items-center mt-5'>
              <div className='border-orange-600'>
              <input type='number' className='border-orange-600 border h-20 w-8 text-center rounded-2xl m-3' />
              <input type='number' className='border-orange-600 border h-20 w-8  text-center rounded-2xl m-3'/>
              <input type='number' className='border-orange-600 border h-20 w-8 text-center rounded-2xl m-3'/>
              <input type='number' className='border-orange-600 border h-20 w-8 text-center rounded-2xl m-3'/>
              <input type='number' className='border-orange-600 border h-20 w-8 text-center rounded-2xl m-3'/>
              <input type='number' className='border-orange-600 border h-20 w-8 text-center rounded-2xl m-3'/>

              </div>

        
         

        </div>


            <div className='mt-15'>
           
              
  
                <button className='text-white bg-[#FF790C] p-3 px-4 w-full rounded-2xl '>
                    Verify Email</button>

                  
           
                    
                    
             </div>
        </div>
        </div>

      </div>
    </div>
  )
}

export default  EmailVerification
