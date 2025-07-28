import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa6";
import { useState, useMemo, useCallback, memo } from "react";
import Red from '../../assets/images/PCandDayLight.jpg';
import Yellow from '../../assets/images/PCandNighLight.jpg';
import Green from '../../assets/images/PCandHands.jpg';

const Section1 = memo(() => {
  const images = useMemo(() => [
    { src: Red, alt: "Red", z: 20 },
    { src: Yellow, alt: "Yellow", z: 20 },
    { src: Green, alt: "Green", z: 15 },
  ], []);

  const [activeIdx, setActiveIdx] = useState(0);

  const handleImageClick = useCallback((idx) => {
    setActiveIdx(idx);
  }, []);

  return (
    <div className="flex flex-col plus-jakarta-sans md:flex-row px-4 md:px-5 py-10 items-start text-white text-xl md:text-4xl bg-gradient-to-br from-[#FF790C] to-[#D0650D]">
      
      {/* Left Section */}
      <div className="w-full md:w-1/2 px-2 md:px-10">
        <div className="mt-5 text-3xl sm:text-4xl font-bold">
          Turn your skills into <br />
          real, world <br />
          experience right <br />from campus.
        </div>

        <div className="text-sm sm:text-base md:text-xl mt-5">
          GigUpp helps students earn and grow by <br />
          offering Talent Gigs and Lecturer-Featured <br />
          gigs, locally and nationwide.
        </div>

        <div className="bg-white mt-5 rounded-lg flex items-center px-3 py-2 w-full">
          <input
            type="text"
            placeholder="Search for Gigs"
            className="text-[#0F172A] text-sm px-2 py-1 rounded-l-lg w-full focus:outline-none"
          />
          <button className="text-white px-4 sm:px-6 py-2 text-base md:text-xl rounded-lg bg-[#0F172A]">
            Search
          </button>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col sm:flex-row text-[#0F172A] gap-6 mt-10">
          <div className="flex items-center gap-2">
            <p className="text-3xl sm:text-4xl">2943</p>
            <FaPlus className="text-lg sm:text-xl mt-1" />
            <div className="text-sm ml-2">
              <p>Gig</p>
              <p>Jobs Available</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-3xl sm:text-4xl">$1M</p>
            <FaPlus className="text-lg sm:text-xl mt-1" />
            <div className="text-sm ml-2">
              <p>Ways to</p>
              <p>Earn an income</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row font-light text-lg md:text-xl gap-4 mt-10 w-full">
          <button className="rounded-xl px-6 py-3 text-white bg-[#0F172A] w-full sm:w-auto">
            Verify as a student
          </button>
          <button className="rounded-xl px-6 py-3 text-[#0F172A] bg-white w-full sm:w-auto">
            Browse Gigs
          </button>
        </div>
      </div>

      {/* Right Section – Image Carousel */}
      <div className="sm:w-full min-w-screen md:w-1/2 flex justify-center items-center transform -translate-x-10 sm:translate-x-0 mt-10 md:mt-0">
        <div className="relative w-[250px] sm:w-[280px] md:w-[320px] h-[400px] sm:h-[450px] md:h-[650px]">
          {images.map((img, idx) => {
            const isActive = idx === activeIdx;
            const offset = idx * 60;

            return (
              <motion.div
                key={img.alt}
                onClick={() => handleImageClick(idx)}
                className="absolute rounded-xl shadow-lg cursor-pointer overflow-hidden"
                style={{
                  left: `${offset}px`,
                  zIndex: isActive ? 30 : img.z,
                  transform: `scale(${isActive ? 1 : 0.85})`,
                  transition: 'all 0.4s cubic-bezier(.4,0,.2,1)',
                  width: '240px',
                  height: '360px',
                  boxShadow: isActive
                    ? '0 2px 8px rgba(0,0,0,0.1)'
                    : '0 30px 20px rgba(0,0,0,0.4)',
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
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
