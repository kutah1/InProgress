import React from 'react'

const Section1 = () => {
  return (
    <div className='bg-orange-400 text-white text-xl md:text-4xl p-2 '>
      <div className='text-left mt-5 tracking-wide font-semibold p-4 w-1/2'>
        Turn your skills into 
          <br /> real, 
        world  <br />
        experience on right from campus.

      </div>
      <div className='text-sm w-1/2 ml-5 mt-5'>
        GigUpp helps students earn and grow by offering Talent Gig and Lecturer-Featured 
        gigs, locally and nationwide.
      </div>
       <span className='bg-white mt-5 rounded-lg flex items-center p-2 mb-4 w-1/2'>
          <input type="text" placeholder='Search for Gigs' className='text-black px-2 py-1 rounded-l-lg w-full  text-xl focus:outline-none'/>
          <button className='btn text-white bg-gray-800 px-3 rounded-r-lg'>Search</button>
        </span>
      <div className='text-sm ml-5 md:ml-0.5 md:text-lg my-5'>
            <button className='rounded-lg  px-4 p-2 text-white bg-gray-800  md:mx-5'>
                View as a student
            </button>
                        <button className='rounded-lg px-4 p-2 text-gray-800 bg-white md:mx-5'>
               Browse Gigs
            </button>
        </div>
    </div>
  )
}

export default Section1
