import React from 'react'
import { FcGoogle } from "react-icons/fc";
import {Link} from 'react-router-dom'
const Login = () => {
  return (
    <div className='text-center from-black via-black to-orange-300 bg-gradient-to-r flex justify-center p-10' >
    
      <div className='bg-white p-10  w-[500px] border-3 rounded-xl items-center  text-center place-items-center flex justify-center'>
        <div  > 
            <div >
                        <h1 className=''>GIGUPP</h1>
                          <h2>Connecting Skills to Success</h2>
            </div>
        
            <div className='text-sm'>
            <h1 className='text-2xl text-center font-semibold text-black'>
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
                    
                    <p className='flex m-5'>
                     <input type="checkbox" name="" id="" className='mx-2'/>
                     <p>
                        Remember Me
                     </p>

                        </p>
                        <Link to="/password">
                       
                     <p className='text-red-600 text-xs sm:text-sm  text-right'>
                        Forgot password?
                     </p>
                      </Link>
                </div>
                <button className='text-white bg-orange-500 px-4 w-full rounded-lg p-2'>SignUp</button>
                 <button className='text-black border-orange-500 mt-5 border-2 px-4 w-full rounded-lg p-2 flex items-center justify-center gap-3'>SignUp with Google
                    
                    <FcGoogle  className='text-xl'/> 
                    </button>
                    
                    <div className='flex gap-2 justify-center mt-5 text-center'>Already have an account?
                        <p className='text-orange-400'>
                            Sign  in
                        </p>
                    </div>

            </div>
        </div>
        </div>

      
    </div>
  )
}

export default Login
