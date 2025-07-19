import React, { memo } from 'react'
import SoftLife from '../../assets/images/SoftLife.jpg'
import { FaRegCheckCircle } from "react-icons/fa";
const Section2 = memo(() => {
  const cardData = [
    {
      title: "Access to Diverse, Vetted Talent",
      description: (
        <>
          Pick up short gigs or remote projects that fit <br /> your academic schedule.
          No. 9-to-5s. Just <br /> work when you can
        </>
      ),
    },
    {
      title: "Fast, Flexible Writing",
      description: (
        <>
          Post your project and start receiving <br/>
          proposals within hours. Hire short-term, long- <br/>
          term, or by task - you choose.
        </>
      ),
    },
    {
      title: "Easy Communication & Project Tracking",
      description: (
        <>
          Chat in real-time, share files, set <br/>
          milestones, and stay updated - all from <br/>
          your dashboard or mobile app.
        </>
      ),
    },
    {
      title: "Works with Real Clients",
      description: (
        <>
          Collaborate with business and startups <br />
          across different industries and countries -at <br />
          from your phone or laptop
        </>
      ),
    },
  ];
  return (
    <div >

    <div className='flex flex-col justify-center items-center text-black p-2 sm:p-4 md:p-8'>
          <h1 className='text-orange-400  items-start  text-left mr-10 transform md:-translate-x-55 text-2xl sm:text-3xl md:text-4xl font-semibold  sm:ml-5 my-6 sm:my-10 '>Why Students Use GigUpp</h1>

      <img src={SoftLife} alt="" className='rounded-lg md:h-5xl  md:w-4xl w-full mx-2 sm:mx-5' />
      <div>
        <h2 className='text-center my-6 sm:my-10 text-xl sm:text-2xl md:text-4xl font-semibold text-orange-400 mb-6 sm:mb-10'>
           These aren't just students, they're future professionals gaining <br/>
           real experience and ready to impress.
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-y-2 sm:gap-y-4 gap-x-0 sm:gap-x-2 justify-center'>
          {/* To adjust card spacing, change the gap-x and gap-y values above (e.g., gap-1, gap-2, gap-4) */}
          {cardData.map((card, idx) => (
            <div key={idx} className='flex flex-row shadow-sm shadow-gray-500 rounded-lg m-1 sm:m-2 p-2 sm:p-4 w-full md:w-11/12 bg-white'>
              <p>
                <FaRegCheckCircle className='h-6 w-6 sm:h-7 sm:w-7 mx-2 sm:mx-4 text-orange-400' />
              </p>
              <div>
                <h1 className='font-semibold text-base sm:text-lg md:text-xl mb-1'>{card.title}</h1>
                <p className='text-xs sm:text-sm md:text-base'>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
})

export default Section2
