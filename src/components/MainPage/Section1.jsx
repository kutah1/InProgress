import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa6";
import { useState, useMemo, useCallback, memo } from "react";
import Red from '../../assets/images/PCandDayLight.jpg';
import Yellow from '../../assets/images/PCandNighLight.jpg';
import Green from '../../assets/images/PCandHands.jpg';

const Section1 = memo(() => {
  // Static image list with z-index configuration
  const images = useMemo(() => [
    { src: Red, alt: "Red", z: 20 },
    { src: Yellow, alt: "Yellow", z: 20 },
    { src: Green, alt: "Green", z: 15 },
  ], []);

  // Track which image is currently active (scaled and on top)
  const [activeIdx, setActiveIdx] = useState(0);

  // Handle switching active image on click
  const handleImageClick = useCallback((idx) => {
    setActiveIdx(idx);
  }, []);

  return (
    <div className="flex flex-col plus-jakarta-sans md:flex-row p-5 items-start text-white text-xl md:text-4xl bg-gradient-to-br -bg-linear-180 from-[#FF790C] to-[#D0650D]">
      
      {/* Left Section – No changes needed here */}
      <div className="px-4  md:m-5 md:ml-20">
        <div className="mt-5 font-semibold text-4xl">
          Turn your skills into <br />
          real, world <br />
          experience right <br />from campus.
        </div>

        <div className="text-sm md:text-xl mt-5">
          GigUpp helps students earn and grow by <br />
          offering Talent Gigs and Lecturer-Featured <br />
          gigs, locally and nationwide.
        </div>

        <div className="bg-white mt-5 md:w-full rounded-lg flex items-center px-3 py-2 w-full">
          <input
            type="text"
            placeholder="Search for Gigs"
            className="text-[#0F172A] text-sm px-2 py-1 rounded-l-lg w-full focus:outline-none"
          />
          <button className="text-white px-6 py-2 text-xl rounded-lg bg-[#0F172A]">
            Search
          </button>
        </div>

        {/* Stats Section */}
        <div className="flex flex-row md:flex-row text-[#0F172A] gap-6 mt-10">
          <div className="flex items-center gap-2">
            <p className="text-4xl">2943</p>
            <FaPlus className="text-xl mt-2" />
            <div className="text-sm ml-2">
              <p>Gig</p>
              <p>Jobs Available</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-4xl">$1M</p>
            <FaPlus className="text-xl mt-2" />
            <div className="text-sm ml-2">
              <p>Ways to</p>
              <p>Earn an income</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row font-light text-xl gap-23 mt-10">
          <button className="rounded-xl px-8 p-2 h-[65px] text-white bg-[#0F172A]">
            Verify as a student
          </button>
          <button className="rounded-xl px-8 py-2 text-[#0F172A] h-[65px] bg-white p-2">
            Browse Gigs
          </button>
        </div>
      </div>

      {/* Right Section – Image Carousel */}
      <div className="flex w-full md:w-1/2 justify-center items-center mt-10 md:mt-0 overflow-hidden">
        {/* Container for carousel – controls width/height of all images */}
        <div className="relative w-[250px] sm:w-[280px] md:w-[320px]  sm:h-[400px] md:h-[650px]">

          {images.map((img, idx) => {
            const isActive = idx === activeIdx;     // Determine if current image is active
            const offset = idx * 60;                // Horizontal offset (spacing between images)

            return (
              // Motion div for image wrapper – allows scale/position animation
              <motion.div
                key={img.alt}
                onClick={() => handleImageClick(idx)} // Clicking image changes active one
                className="absolute rounded-xl shadow-lg cursor-pointer overflow-hidden"
                style={{
                  left: `${offset}px`,              // Stagger images horizontally
                  zIndex: isActive ? 30 : img.z,    // Put active image on top
                  transform: `scale(${isActive ? 1 : 0.85})`, // Scale active image larger
                  transition: 'all 0.4s cubic-bezier(.4,0,.2,1)', // Smooth animation
                  width: '260px',
                  height: '460px',
                  boxShadow: isActive
                    ? '0 2px 8px rgba(0,0,0,0.1)'  // Stronger shadow for active
                    : '0 50px 30px rgba(0,0,0,0.5)',   // Lighter shadow for inactive
                }}
              >
                {/* '0 2px 8px rgba(0,0,0,0.1)' */}
                {/* Actual image inside the animated wrapper */}
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full relative h-full object-cover"
                />
              </motion.div>
            );
          })}

        </div>
      </div>
    </div>
  );
});

export default Section1;
