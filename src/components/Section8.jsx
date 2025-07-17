import React from 'react'
import { FaRegCheckCircle } from "react-icons/fa";

const Section8 = () => {
  return (
    <div className='m-10'>
        <h1 className='font-bold text-4xl my-5'>
            Upgrade to Pro
        </h1>
        <p className='text-sm '>
            Unlock nationwide visibility and boost your gigs -Go Pro
        </p>
        <div className='flex flex-row '>
            
            <div >
            <p className='flex mx-4 mt-5 flex-row'>
             <FaRegCheckCircle className='h-5 text-orange-400 w-5 mx-4' />
                Instant Job Alerts
            </p>
             <p className='flex  mx-4 mt-5  flex-row'>
             <FaRegCheckCircle className='h-5 text-orange-400 w-5 mx-4' />
                Guided Profile Optimization
            </p>
            </div>
            <div>
             <p className='flex  mx-4  mt-5  flex-row'>
             <FaRegCheckCircle className='h-5 text-orange-400 w-5 mx-4' />
                
            Smart Match System
            </p>
              <p className='flex  mx-4 mt-5 flex-row'>
             <FaRegCheckCircle className='h-5 text-orange-400 w-5 mx-4' />
                
            Unlimited visibility
            </p>
            </div>
        </div>
         <button className='text-white  bg-orange-500 rounded-lg p-2 mt-5 w-1/2'>Upgrade Now</button>

      
    </div>
  )
}

export default Section8
