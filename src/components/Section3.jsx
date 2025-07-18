import React, { memo } from 'react'
import ChatBot from '../assets/images/chatbot.png'
import Cards from '../components/Cards'
import Red from '../assets/images/red.png'

const Section3 = memo(() => {
  return (
    <section className="bg-black py-10 px-4 md:px-16 w-full">
        <div className='text-center '>
          <h1 className="font-bold text-white text-2xl md:text-3xl mb-2">Let's see how it works</h1>
          <h2 className="text-sm text-gray-200 mb-6">Whether you're a student or a client, getting started on GigUpp is simple.</h2>

        </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Column */}
      
        <div className="flex flex-col items-center justify-center">
            
          <img src={Red} alt="Red" className=" md:w-6xl mx-10 md:h-80  rounded-xl shadow-lg object-cover shadow-amber-800" />
        </div>
        {/* Card Column */}
        <div className='flex flex-col justify-center items-center text-black p-2 sm:p-4 md:p-8'>
          <Cards />
        </div>
      </div>
    </section>
  )
})

export default Section3
