import React from 'react'
import { FcGoogle } from "react-icons/fc";
import {Link} from 'react-router-dom'
const Login = () => {
  return (
    <div className='text-center plus-jakarta-sans from-black via-black to-[#FF790C] bg-gradient-to-r flex min-h-screen justify-center p-10 h-full'>
    
      <div className='bg-white p-10 h-[600px]  w-[550px] border-3 rounded-xl items-center  text-center place-items-center flex justify-center'>
        <div  > 
            <div >
                        <h1 className='p-4'>GIGUPP</h1>
                          <h2>Connecting Skills to Success</h2>
            </div>
        
            <div className='text-sm'>
            <h1 className='text-2xl text-center font-semibold text-[#0F172A]'>
                Get Started
            </h1>
            <p>
                Sign-up in minutes. Start working start earning start growing-with Gigupp
                </p>
         </div>

         <p className='text-left m-3 mt-5'>
            Email
            </p>
            <input type="email" className='border border-gray-300 rounded-lg p-2 w-full mb-4' placeholder='Enter your email' />


            <p className='text-left m-3 mt-5'>
            Password
            </p>
            <input type="email" className='border border-gray-300 rounded-lg p-2 w-full mb-4' placeholder='Enter your password' />

            <div>
                <div className="flex flex-row gap-10 items-center justify-between">
                    
                    <p className='flex items-center m-5 sm:text-lg mt-5 text-center text-xs'>
                     <input type="checkbox" name="" id="" className='mx-2'/>
                     <p className='flex '>
                        Remember  <span className='ml-1 sm:ml-2'></span> Me
                     </p>

                        </p>
                        <Link to="/password">
                       
                     <p className='text-red-600 flex text-xs sm:text-lg  text-right'>
                        Forgot <span className='ml-1 sm:ml-2'></span>password?
                     </p>
                      </Link>
                </div>
                <button className='text-white bg-[#FF790C] px-4 w-full rounded-lg p-2'>SignUp</button>
                 <button className='text-[#0F172A] border-[#FF790C]  mt-5 border-2 px-4 w-full rounded-lg p-2 flex items-center justify-center gap-3'>SignUp with Google
                    
                    <FcGoogle  className='text-xl'/> 
                    </button>
                    
                    

            </div>
        </div>
        </div>

      
    </div>
  )
}

export default Login
