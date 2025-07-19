import React from 'react'
import Red from '../assets/images/PCandDayLight.jpg'
import { GoStarFill } from "react-icons/go";
const ImageSlider = () => {
  return (
    <div className="flex  border-orange-500 border-2 w-1/3 rounded-2xl p-3 justify-center items-center content-center ">

      <div  m-10>
        <div className='mx-5'>
          <img src={Red} alt="" className='w-100 h-60 rounded' />
          <div className=''>
            <h2 className='text-orange-500'>Talent Gig</h2>
            <div className='flex flex-row items-center justify-between'>
               <h2>Talent Gig</h2>
               <button className='px-10 bg-orange-400 text-white rounded p-2'>Pro</button>
            </div>
            <div>Browse your website traffic with engaging <br />
            SEO-optimized blog posts crafted to drive <br />
            results and keep your readers hooked.</div>
            
          </div>
          <div className="flex flex-row ">
            <div className='bg-black rounded-full w-10 h-10'>
                  
            </div>
            <div >
             
               


              <div className='flex flex-row  ml-4 '>
                 <h1>Olivia Shye</h1>
              <GoStarFill className='w-5 h-20 absolute  text-orange-500 mr-5' />
              <GoStarFill className='w-5 h-20 absolute text-orange-500 ml-5' />
              <GoStarFill className='w-5 h-20 absolute text-orange-500 ml-10'/>
            </div>
            
            </div>
           
         


          </div>
          <div className='text-center'>
             <button className='text-white w-50 rounded-lg px-8 p-4 mt-5 text-center  bg-orange-500 '>
              
              Order :
              </button>
            </div>
           
        </div>
       

      </div>
      <div>


      </div>
      <div>


      </div>
      
      
    </div>
  )
}

export default ImageSlider
