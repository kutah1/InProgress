import React from 'react'
import ChatBot from '../assets/images/chatbot.png'
import { FaRegCheckCircle } from "react-icons/fa";
const Section4 = () => {
  const cardData = [
    {
      title: "Flexible Work Opportunities",
      description: (
        <>
          Pick up short gigs or remote projects that fit <br /> your academic schedule.
          No. 9-to-5s. Just <br /> work when you can
        </>
      ),
    },
    {
      title: "Earn While You Learn",
      description: (
        <>
          Turn your skils, writing,design,coding. <br/>
          tutoring,and more into real income <br/> to support your education
          and lifestyle.
        </>
      ),
    },
    {
      title: "Flexible Work Opportunities",
      description: (
        <>
          Pick up short gigs or remote projects that fit your academic schedule.
          No. 9-to-5s. Just work when you can
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
    <div className='justify-center items-center text-black p-4 md:p-8'>
      <h1 className='text-orange-400 text-2xl '>Why Students Use GigUpp</h1>
      <img src={ChatBot}  alt="" className='w-[200px] h-[500px] mx-5' />
    <div>
        <h2 className='text-center text-orange-400 text-2xl mb-10'>
            Designing to help students grow, earn and get <br /> discovered while still in school
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-y-1 justify-center'>
          {/* To adjust card spacing, change the gap-x and gap-y values above (e.g., gap-1, gap-2, gap-4) */}
          {cardData.map((card, idx) => (
            <div key={idx} className='flex flex-row  shadow-sm shadow-gray-500 rounded-lg m-1 p-4 w-full md:w-11/12'>
              <p>
                <FaRegCheckCircle className='h-7 w-7 mx-4' />
              </p>
              <div>
                <h1>{card.title}</h1>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
    
    </div>
  )
}

export default Section4
