import React from 'react'
import { FcGoogle } from "react-icons/fc";
import {Link} from 'react-router-dom'
const Login = () => {
  return (
    <div className='text-center plus-jakarta-sans from-[#0F172A] via-[#0F172A]  to-[#FF790C] bg-gradient-to-br flex min-h-screen justify-center p-10 h-full'>
      <div>
      <div >
             <h1 className=' text-3xl text-white'>GIGUPP</h1>
              <h2 className='text-white pb-3'>Connecting Skills to Success</h2>
      </div>


      <div className='bg-white p-10 h-[600px]  w-[550px]  rounded-2xl items-center  text-center place-items-center flex justify-center'>
        <div  > 
          
            <div className='text-sm'>
            <h1 className='text-3xl text-center font-semibold text-[#0F172A]'>
                Get Started !
            </h1>
            <p>
                Sign-up in minutes. Start working start earning start growing-with Gigupp
                </p>
         </div>

         <p className='text-left m-3 mt-5'>
            Email
            </p>
            <input type="email" className='border border-gray-300 rounded-2xl p-2 w-full mb-4' placeholder='Enter your email' />


            <p className='text-left m-3 mt-5'>
            Password
            </p>
            <input type="password" className='border border-gray-300 rounded-2xl p-2 w-full mb-4' placeholder='Enter your password' />

            <div>
                <div className="flex flex-row gap-10 items-center justify-between">
                    
                    <p className='flex items-center m-5 sm:text-lg mt-5 text-center text-xs'>
                     <input type="checkbox" name="" id="" className='mx-2 ' color='blue'/>
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
                <button className='text-white bg-[#FF790C] px-4 w-full rounded-2xl p-2'>SignUp</button>
                 <button className='text-[#0F172A] border-[#FF790C]  mt-5 border-2 px-4 w-full rounded-2xl p-2 flex items-center justify-center gap-3'>SignUp with Google
                    
                    <FcGoogle  className='text-xl'/> 
                    </button>
                    
                    

            </div>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Login
