import React from 'react'
import { FaBell } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import AvatarInBlue from '../../assets/images/DashboardImages/AvatarInBlue.jpg'

const DashboardNavbar = () => {
  return (
    <div className='flex-row plus-jakarta-sans flex justify-between items-center bg-gray-900 text-white p-1 '>
      <div className='m-5 flex flex-row gap-3 items-center'>
        <img src={AvatarInBlue} alt=""  className='h-10 w-10 rounded-full'/>
        <p className='text-2xl'>
          Dashboard

        </p>
      </div>


      <div className='flex-row plus-jakarta-sans gap-4 flex mr-30'>

    
        <div className='rounded-xl bg-amber-500 p-1'>
         < IoMdSettings className='text-white text-2xl '/> 

        </div>
        <div className='rounded-xl bg-amber-500 p-1'>
        <FaBell className='text-white text-2xl '/>

        </div>
          </div>

      

    </div>
  )
}

export default DashboardNavbar
