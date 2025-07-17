import React from 'react'
import { FiTarget } from "react-icons/fi";
import { RxCountdownTimer } from "react-icons/rx";
import Red from '../assets/images/red.png'
const Section5 = () => {
  return (

    <> 
    <div className='m-10 mt-10 text-center  '>
      <h1 className='text-left font-semibold'>GIGUPP
        <br />
        <span>Connecting Skills to Success</span>
      </h1>

      <div className='m-10 text-center'>

        <h1 className='font-semibold text-3xl'>Our Mission and Vision</h1>
        </div>

        <div>
            <img src={Red} alt="" className='w-6xl mx-10 h-50' />
        </div>


        <div className="mx-10 gap-8 mt-10">
          <div className="flex flex-row items-start justify-center text-left">
            <div className="flex flex-col items-center w-1/4">
              <FiTarget className="w-16 h-16 rounded-full bg-orange-500 border-orange-400 border-8 mb-2" />
              <span className="font-bold text-lg mt-2">Mission Statement</span>
            </div>
            <div className="ml-10 w-3/4">
              <p>
                At GigUpp, our mission is to empower students by connecting them with potential clients, providing them with the resources and opportunities they need to succeed on their own terms.<br />
                We exist to make freelancing simpler, safer, and more rewarding by creating meaningful connections between skilled professionals and businesses everywhere.
              </p>
            </div>
          </div>

          <div className="flex flex-row items-start mt-12 justify-center text-left">
            <div className="flex flex-col items-center w-1/4">
              <RxCountdownTimer className="w-16 h-16 rounded-full bg-orange-500 border-orange-400 border-8 mb-2" />
              <span className="font-bold text-lg mt-2">Vision Statement</span>
            </div>
            <div className="ml-10 w-3/4">
              <p>
                We envision a world where talent knows no boundaries, and every freelancer—no matter their background or location—has access to opportunity.<br />
                GigUpp is building a future where independent work drives economic growth, personal freedom, and professional success for millions globally.
              </p>
            </div>
          </div>
        </div>
    </div>

    </>
  )
}

export default Section5
