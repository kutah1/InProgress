import React from 'react'
import DashboardNavbar from './DashboardNavbar'
import Footer from '../MainPage/Footer'

const HelpPage = () => {
  return (
    <>
    <DashboardNavbar/>  

    <div className='flex justify-center'>
        <div>
          <div>
            <h1 className='text-2xl'>How can we help you</h1>
            <h2>Browse our FAQS or Chat with our support agent</h2>

            <div className='border rounded-xl'>
                <input type="text" name="" id="" placeholder='Search for talents' className='focus:outline-0' />
                <button className='bg-gray-600 px-8 p-1 text-white'>Search </button>

            </div>
          </div>


           <div className='grid grid-cols-3'>
            <div className='bg-pink-400 rounded-xl '>

            </div>

           </div>

        </div>
        
        
    </div> 
   
    <Footer/>
    </>
  )
}

export default HelpPage
