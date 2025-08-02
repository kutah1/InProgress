import React from 'react'
import { FcGoogle } from "react-icons/fc";
import {Link} from 'react-router-dom'

import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
const ChangePWord = () => {
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
            
        
    <div className="bg-white mt-5 md:w-full rounded-lg flex items-center px-3 py-2 w-full border">
          <input
            type="text"
            placeholder="Enter your password" 
            className="text-[#0F172A] text-sm px-2 py-1 rounded-3xl w-full focus:outline-none"
          />
          <button className="text-white px-6 py-2 text-xl rounded-lg ">
           <AiOutlineEyeInvisible color='black' className='transform rotate-x-180'/>
          </button>
        </div>




    <div className="bg-white mt-5 md:w-full rounded-lg flex items-center px-3 py-2 w-full border">
          <input
            type="text"
            placeholder=" Confirm your password" 
            className="text-[#0F172A] text-sm px-2 py-1 rounded-l-lg w-full focus:outline-none"
          />
          <button className="text-white px-6 py-2 text-xl rounded-lg ">
           <AiOutlineEyeInvisible color='black' className='transform rotate-x-180'/>
          </button>
        </div>



        <div className='text-left mt-5'>
            <h1 className='text-red-600 '>Password criteria tips:</h1>
          <ul>
            <li >
                Minimum 8 characters
            </li>
              <li>
                One number & one capital letter
            </li>
          </ul>

        </div>


            <div className='mt-15'>
           
              
               <Link to='/emailverification'>
               
                <button className='text-white bg-[#FF790C] p-3 px-4 w-full rounded-2xl '>
                    Continue</button>
               </Link>
                    
             </div>
        </div>
        </div>

      </div>
    </div>
  )
}

export default  ChangePWord
