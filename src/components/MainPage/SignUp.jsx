import React from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  return (
    <div className='from-white via-white to-orange-500 bg-gradient-to-r min-h-screen flex items-center justify-center'>
      <div className='text-center plus-jakarta-sans flex flex-col justify-center p-4 sm:p-10 '>
        <div className='bg-white p-6 sm:p-10 w-full md:w-[850px] rounded-xl shadow-lg shadow-gray-700 mx-auto'>
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
                className='border border-gray-300 rounded-lg p-2 w-full'
              />
              <input
                type="text"
                placeholder='Last Name'
                className='border border-gray-300 rounded-lg p-2 w-full'
              />
            </div>

            <p className='text-left m-3 mt-5'></p>

            <div className='text-left border text-gray-500 border-b-0 border-gray-300 p-3 rounded transform translate-y-3'>
              TagName
            </div>

            <textarea
              className='border border-gray-300 rounded-lg p-2 w-full mb-4'
              placeholder='Description'
            ></textarea>

            <input
              type="text"
              className='border border-gray-300 rounded-lg p-2 w-full mb-4'
              placeholder='Language'
            />
            <input
              type="text"
              className='border border-gray-300 rounded-lg p-2 w-full mb-4'
              placeholder='Time zone'
            />

            <div>
              <button className='mt-5 text-white bg-[#FF790C] px-4 w-full rounded-lg p-2'>
                Save
              </button>

              <div className='hidden sm:block font-semibold sm:text-lg mt-5 text-center text-xs'>
                © Copyright 2025. All Rights Reserved by GigUpp
                <Link to="/login">
                  <p className='text-[#FF790C] mt-2'>Sign in</p>
                </Link>
              </div>

              <div className='sm:hidden font-semibold sm:text-lg mt-5 text-center text-xs'>
                © Copyright 2025. All Rights Reserved by GigUpp
                <Link to="/login">
                  <p className='text-[#FF790C] mt-5 text-lg'>Sign in</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
