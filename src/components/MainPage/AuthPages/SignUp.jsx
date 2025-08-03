import React from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import ProfilePicture from '../../../assets/images/profilepic.png'
const SignUp = () => {
  return (
    <div className='from-white via-white plus-jakarta-sans to-orange-500 bg-gradient-to-r min-h-screen flex-col items-center justify-center'>
      <div className='text-[#FF790C]  text-3xl transform translate-x-20 translate-y-5'>

     
      <h1 className=''>
        GIGUPP
      </h1>
      <h1 className='text-xl '>
        Connecting Skills to Success
      </h1>
      </div>

          <img src={ProfilePicture} alt="" className='w-30 h-30  rounded-full justify-self-center' />


      <div className='text-center  flex flex-col justify-center p-4 sm:p-10 '>
    

        <div className='bg-white p-6 sm:p-10 w-full md:w-[850px] rounded-2xl shadow-lg shadow-gray-400  mx-auto'>
          <div>

            <div className='text-sm'>
              <h1 className='text-2xl text-left font-semibold text-[#0F172A]'>
                Profile Information
              </h1>
            </div>

            <div className='flex flex-col md:flex-row gap-4 md:gap-6 mt-10'>
              <input
                type="text"
                placeholder='First Name'
                className='border border-gray-300 rounded-2xl p-2 w-full focus:outline-0'
              />
              <input
                type="text"
                placeholder='Last Name'
                className='border border-gray-300 rounded-2xl p-2 w-full focus:outline-0'
              />
            </div>

            <p className='text-left m-3 mt-5'></p>

            <div className='text-left border text-gray-500 border-b-0 border-gray-300 p-3 rounded transform translate-y-3'>
              TagName
            </div>

            <textarea
              className='border border-gray-300 rounded-2xl p-2 w-full mb-4 focus:outline-0'
              placeholder='Description'
            ></textarea>

            <input
              type="text"
              className='border border-gray-300 rounded-lg p-2 w-full mb-4 focus:outline-0'
              placeholder='Language'
            />
            <input
              type="text"
              className='border border-gray-300 rounded-lg p-2 w-full mb-4 focus:outline-0'
              placeholder='Time zone'
            />

            <div>
              <Link to='/dashboard'>
              
              <button className='mt-5 text-white bg-[#FF790C] px-4 w-full rounded-lg p-2'>
                Save
              </button>
              </Link>
              
            </div>
          </div>
        </div>



        <div className='hidden sm:block font-semibold sm:text-sm mt-5 text-center text-[#18181B] text-xs'>
                © Copyright 2025. All Rights Reserved by GigUpp
            
              </div>

              <div className='sm:hidden font-semibold sm:text-sm mt-5 text-[#18181B] text-center text-xs'>
                © Copyright 2025. All Rights Reserved by GigUpp
            
              </div>
      </div>
    </div>
  )
}

export default SignUp
