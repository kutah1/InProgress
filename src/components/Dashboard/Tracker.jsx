import React from 'react'
import DashboardNavbar from './DashboardNavbar';
import ProgressSteps from './ProgressSteps';
const Tracker = () => {
  return (
    <div className='plus-jakarta-sans'>
      <DashboardNavbar />

      <div>
        <div className='shadow-2xl rounded-xl  mx-30  m-10 ' >

       
        <div className='flex flex-row gap-2 justify-evenly  p-5  ' >
            <div className='p-10'>
                <p className='text-3xl font-semibold'>Order ##111</p>
                <p className='text-xl'>Phone Retouching</p>
                <p className='text-sm'>Sophia Nartey</p>
            </div>

              <div className='p-10'>
                <p className='text-xl'>Complete</p>
                <p className='text-xl font-semibold'>60%</p>
                <p className='text-2xl'>Progress Bar</p>
            </div>

              <div className='p-10 text-right'>
                <p className='text-2xl'>Expected Completion</p>
                <p className='text-xl'>July,29 2025</p>
                <p className='text-lg'>6 days left</p>
            </div>
          
        </div>
         {/* Animated Progress Bar Section */}
      <ProgressSteps />
   
 
         </div>



        {/* Comment Section */}
        <div className='bg-orange-300 p-10 mx-30'>
            <div className='w-full'>
                <input type="text" name="" id="" placeholder='Type your comment' className=' mt-5 focus:outline-none p-4 w-full mb-5 bg-white'/>
            </div>
            <button className='bg-orange-500  text-white p-3'>Add Comment</button>
        </div>




        {/* Orders */}


        <div className='shadow-2xl rounded-xl  mx-30  m-10 ' >

       
        <div className='flex flex-row gap-2 justify-evenly  p-5  ' >
            <div className='p-10'>
                <p className='text-3xl font-semibold'>Order ##111</p>
                <p className='text-xl'>Phone Retouching</p>
                <p className='text-sm'>Sophia Nartey</p>
            </div>

              <div className='p-10'>
                <p className='text-xl'>Complete</p>
                <p className='text-xl font-semibold'>60%</p>
                <p className='text-2xl'>Progress Bar</p>
            </div>

              <div className='p-10 text-right'>
                <p className='text-2xl'>Expected Completion</p>
                <p className='text-xl'>July,29 2025</p>
                <p className='text-lg'>6 days left</p>
            </div>
          
        </div>
         {/* Animated Progress Bar Section */}
      <ProgressSteps />
   
 
         </div>

      </div>
    </div>
  )
}

export default Tracker
