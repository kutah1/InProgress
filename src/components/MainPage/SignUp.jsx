import React from 'react'
import {Link} from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
const SignUp = () => {
  return (
    <div className='text-center from-white via-white to-orange-500 bg-gradient-to-r flex justify-center p-10' >
    
      <div className='bg-white p-10  md:w-[900px]  rounded-xl items-center shadow-lg shadow-gray-700  text-center place-items-center  flex justify-center'>
        <div  > 
           
        
            <div className='text-sm'>
            <h1 className='text-2xl text-left font-semibold text-black'>
                Profile Information
            </h1>
            
         </div>

        <div className=' flex gap-6 flex-row mt-10'>
            <input type="text" placeholder='First Name'  className=' border border-gray-300 rounded-lg p-2 w-full mb-4'/>
                   <input type="text" placeholder='Last Name'  className='border border-gray-300 rounded-lg p-2 w-full mb-4'/>

        </div>

            <p className='text-left m-3 mt-5'>
           
            </p>
            <div className=' text-left border text-gray-500 border-b-0 border-gray-300 p-3  rounded transform translate-y-3  '>
                TagName
                </div>
            <textarea name="" id="" className='border border-gray-300 rounded-lg p-2 w-full mb-4' placeholder='Description'></textarea>
            
            
            <input type="text" className='border border-gray-300 rounded-lg p-2 w-full mb-4' placeholder='Language' />
             <input type="text" className='border border-gray-300 rounded-lg p-2 w-full mb-4' placeholder='Time zone' />

            <div>
                <div className="flex flex-row gap-10 items-center justify-between">
                    
                    
                </div>
                <button className='mt-5 text-white bg-orange-500 px-4 w-full rounded-lg p-2'>Save</button>
             
                    
                    <div className=' gap-2 hidden sm:block font-semibold justify-center sm:text-lg mt-5 text-center text-xs'>
                        @Copyright 2025.
                        <span className='sm:hidden flex flex-row'></span> All Rights Reserved by GigUpp
                        <Link to="/login">
                        <p className='text-orange-400 flex justify-center'>
                            Sign <span className='ml-1 sm:hidden text-center'></span> in
                        </p>
                        </Link>
                    </div>
                    <div className=' gap-2  sm:hidden font-semibold justify-center sm:text-lg mt-5 text-center text-xs'>
                        @Copyright 2025.
                        <span className='sm:hidden flex flex-row'></span> All Rights Reserved by GigUpp
                        <Link to="/login">
                        <p className='text-orange-400 text-center mt-5 text-lg'>
                            Sign <span className='ml-0 sm:hidden'></span> in
                        </p>
                        </Link>
                    </div>

            </div>
        </div>
        </div>

      
    </div>
  )
}

export default SignUp
