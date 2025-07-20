import Red from '../../assets/images/ChatFeature.jpg'
import { HiOutlineChatAlt2 } from "react-icons/hi";

import { FaRegCheckCircle } from "react-icons/fa";
const Section8 = () => {
  return (

    <div className='flex flex-col md:flex-row w-full text-black p-2 sm:p-4 md:p-8'>
    <div className='m-10 md:w-1/2'>
        <h1 className='font-bold sm:text-4xl text-center sm:text-left text-2xl my-5'>
            Upgrade to Pro
        </h1>
        <p className='text-sm '>
            Unlock nationwide visibility and boost your gigs -Go Pro
        </p>
        <div className='sm:flex text-left text-sm sm:text-lg'>
            
            <div >
            <p className='flex mx-4 mt-5 flex-row'>
             <FaRegCheckCircle className='h-5 text-orange-400 w-5 mx-4' />
                Instant <span className='hidden sm:mx-1 sm:block'></span> Job <span className='hidden sm:mx-1 sm:block'></span> Alerts
            </p>
             <p className='flex  mx-4 mt-5  flex-row'>
             <FaRegCheckCircle className='h-5 text-orange-400 w-5 mx-4' />
                Guided <span className='hidden sm:mx-1 sm:block'></span>Profile<span className='hidden sm:mx-1 sm:block'></span> Optimization
            </p>
            </div>
            <div>
             <p className='flex  mx-4  mt-5 sm:hidden flex-row md:flex'>
             <FaRegCheckCircle className='h-5 text-orange-400 w-5 mx-4' />
                
            Smart <span className='hidden sm:mx-1 sm:hidden md:block'></span>Match <span className='hidden sm:mx-1 sm:hidden'></span> System
            </p>
              <p className='flex sm:hidden md:flex mx-4 mt-5 flex-row'>
             <FaRegCheckCircle className='h-5 text-orange-400 w-5 mx-4' />
                
            Unlimited <span className='hidden sm:mx-1 sm:hidden'></span>visibility
            </p>
            </div>
        </div>
         <button className='text-white  bg-orange-500 rounded-lg p-2 mt-5 w-full'>Upgrade Now</button>

      
    </div>
    <div className=''>
    
         <img src={Red} alt='' className=' transform -translate-y-10'/>


        </div>
       
        
      
    </div>
  )
}

export default Section8
