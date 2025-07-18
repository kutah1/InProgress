import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa6";
import { useState, useMemo, useCallback, memo } from "react";
import Red from '../assets/images/red.png'
import Yellow from '../assets/images/yellow.png'
import Green from '../assets/images/green.png'

const Section1 = memo(() => {
  const images = useMemo(() => [
    { src: Red, alt: "Red", z: 30 },
    { src: Yellow, alt: "Yellow", z: 20 },
    { src: Green, alt: "Green", z: 15 },
  ], []);
  const [activeIdx, setActiveIdx] = useState(0);
  const handleImageClick = useCallback((idx) => {
    setActiveIdx(idx);
  }, []);

  return (

    <div className='bg-orange-400  text-white md:text-4xl  flex flex-row p-5 items-start'>
    <div className='bg-orange-400 text-white text-xl md:text-4xl p-2 mx-10  w-1/2  '>
      
      <div className='text-left mt-5  font-semibold p-4'>
        Turn your skills into 
          <br /> real, 
        world  <br />
        experience on right from campus.

      </div>
      <div className='text-sm md:text-xl w-1/2 ml-5 mt-5'>
        GigUpp helps students earn and grow by <br/> offering Talent Gig and Lecturer-Featured  <br/>
        gigs, locally and nationwide.
      </div>
       <span className='bg-white mt-5 ml-5 rounded-lg flex items-center p-2 mb-4  mr-20'>
          <input type="text" placeholder='Search for Gigs' className='text-black text-sm px-2 py-1 rounded-l-lg w-full  focus:outline-none'/>
          <button className='btn text-white bg-gray-800 rounded-r-lg px-5'>Search</button>
        </span>
      <div className='text-sm ml-5 md:ml-0.5 md:text-lg my-5'>

          {/* Numbers and their formatting */}
          <div className='flex flex-row  text-black items-end h-10 ml-5 my-20   '>
          <div className='flex flex-row text-black items-end h-10  w-1/2  '>
            <div className='flex flex-row items-center '>
              <p className='text-5xl'>
                2943

              </p>
              <p>
               <FaPlus className='text-black text-xl mt-3' /> 
              </p>
               </div>
              <div className='flex flex-col text-sm'>
                <span>Gig</span>
                <span>Jobs Available</span>
              </div>
              </div>
           
             <div className='flex flex-row text-black items-end h-10  md:ml-2 w-1/2 '>
            <div className='flex flex-row items-center'>
              <p className='text-5xl'>
                $1M

              </p>
              <p>
               <FaPlus className='text-black text-xl mt-3' /> 
              </p>
               </div>
              <div className='flex flex-col text-sm'>
                <span>ways to</span>
                <span>earn an income</span>
              </div>
              </div>

            
           

          </div>

                <div className="flex flex-row">
                    <button className='rounded-lg  px-4 p-2 text-white bg-gray-800  md:mx-5 md:mt-10 w-1/2'>
                View as a student
            </button>
                        <button className='rounded-lg px-4 p-2 text-gray-800 bg-white md:mx-5 md:mt-10 w-1/2 mr-10'>
               Browse Gigs
            </button>

                  </div>
          
        </div>


       
        

       
    </div>



         <div className='relative flex-col-reverse flex '>
          {/* Implement the motion here */}
          <div className="flex flex-row w-full items-stretch justify-between">
    {/* Left column: all text, stats, search, buttons */}
    <div className="flex flex-col flex-1 justify-center pr-8">
      {/* ...existing code for text, stats, search, buttons... */}
    </div>
    {/* Right column: images stacked horizontally, aligned center */}
    <div className="flex flex-1 items-center justify-center">
      <div className="relative flex flex-row items-center justify-center w-[320px] h-[500px]">
        {images.map((img, idx) => {
          const isActive = idx === activeIdx;
          const offset = idx * 80; // horizontal offset for stacking
          return (
            <motion.img
              key={img.alt}
              src={img.src}
              alt={img.alt}
              className="w-70 h-90 absolute rounded-xl shadow-lg cursor-pointer"
              style={{
                left: `${offset}px`,
                zIndex: isActive ? 30 : img.z,
                opacity: isActive ? 1 : 0.7,
                transform: `scale(${isActive ? 1 : 0.85})`,
                boxShadow: isActive ? "0 8px 24px rgba(0,0,0,0.2)" : "0 2px 8px rgba(0,0,0,0.1)",
                transition: "all 0.4s cubic-bezier(.4,0,.2,1)",
              }}
              onClick={() => handleImageClick(idx)}
            />
          );
        })}
      </div>
    </div>
  </div>
        </div>



    </div>
  )
})

export default Section1
