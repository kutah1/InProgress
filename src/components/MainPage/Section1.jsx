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
    <div className="flex flex-col plus-jakarta-sans md:flex-row p-5 items-start text-white text-xl md:text-4xl bg-gradient-to-br -bg-linear-180 from-[#FF790C] to-[#D0650D]">
      
      {/* Left Section */}
      <div className="px-4 md:m-5 md:ml-20">
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

      {/* Right Section – Updated Image Carousel using motion.img */}
      <div className="flex w-full md:w-1/2 justify-center items-center mt-10 md:mt-0 overflow-hidden">
        <div className="relative w-[250px] sm:w-[280px] md:w-[320px] sm:h-[400px] md:h-[650px]">
          {images.map((img, idx) => {
            const isActive = idx === activeIdx;
            const offset = idx * 60;

            return (
              <motion.img
                key={img.alt}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                onClick={() => handleImageClick(idx)}
                className="absolute rounded-xl shadow-lg cursor-pointer w-[260px] h-[460px] object-cover"
                initial={false}
                animate={{
                  scale: isActive ? 1 : 0.85,
                  x: offset,
                  zIndex: isActive ? 30 : img.z,
                  boxShadow: isActive
                    ? '0 2px 8px rgba(0,0,0,0.1)'
                    : '0 50px 30px rgba(0,0,0,0.5)',
                }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 26,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
});

export default Section1;
