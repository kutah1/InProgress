import React from 'react'
import { FaBell } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
const DashboardNavbar = () => {
  return (
    <div className='flex-row flex justify-between bg-gray-900 text-white p-2 '>
      <div className='m-5'>
        <p className='text-3xl'>
          Dashboard

        </p>
      </div>


      <div className='flex flex-row gap-4 m-5 mr-20'>
        <div className='rounded-xl bg-amber-500 p-2'>
         < IoMdSettings className='text-white text-3xl '/> 

        </div>
        <div className='rounded-xl bg-amber-500 p-2'>
        <FaBell className='text-white text-3xl '/>

        </div>

      </div>

    </div>
  )
}

export default DashboardNavbar
