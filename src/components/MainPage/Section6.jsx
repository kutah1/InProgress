import React, { useState, useMemo, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaQuoteLeft, FaStar } from 'react-icons/fa';
import Red from '../../assets/images/YellowShirt.jpg';
import Cards from './Cards';

const Section6 = memo(() => {
  const slides = useMemo(() => [
    {
      id: 0,
      content: <Cards />,
      image: Red,
      name: "Jennifer Doe",
      role: "Student at UI",
    },
    {
      id: 1,
      content: (
        <div className="text-white text-lg p-4">
          <h2 className="font-bold text-xl mb-2">Browse Gigs Easily</h2>
          <p>Explore a wide range of verified gigs offered by real clients and lecturers.</p>
        </div>
      ),
      image: Red,
      name: "Michael Asante",
      role: "Developer Intern",
    },
    {
      id: 2,
      content: (
        <div className="text-white text-lg p-4">
          <h2 className="font-bold text-xl mb-2">Submit Proposals</h2>
          <p>Craft and send proposals for gigs that match your skills and interest.</p>
        </div>
      ),
      image: Red,
      name: "Esi Bonsu",
      role: "Design Freelancer",
    },
    {
      id: 3,
      content: (
        <div className="text-white text-lg p-4">
          <h2 className="font-bold text-xl mb-2">Get Paid Securely</h2>
          <p>Deliver the work, get rated, and receive payment with peace of mind.</p>
        </div>
      ),
      image: Red,
      name: "Kwame Yeboah",
      role: "Digital Marketer",
    },
  ], []);

  const [index, setIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setIndex(prev => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setIndex(prev => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const slide = slides[index];

  return (
    <section className="bg-black py-10 px-4 md:px-16 w-full relative overflow-hidden">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="font-bold text-white text-2xl md:text-3xl mb-2">Let's see how it works</h1>
        <h2 className="text-sm text-gray-200">Whether you're a student or a client, getting started on GigUpp is simple.</h2>
      </div>

      {/* Slide Content (Text left, Image right) */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Side */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${slide.id}`}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="relative flex flex-col justify-center items-start text-white p-4"
          >
            <FaQuoteLeft className="text-yellow-400 text-4xl mb-4" />
            {slide.content}
          </motion.div>
        </AnimatePresence>

        {/* Image Side */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`img-${slide.id}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative w-full flex justify-center items-center"
          >
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full md:w-[90%] h-[300px] md:h-[400px] object-cover rounded-xl shadow-xl"
              loading="lazy"
            />
            {/* Overlay Info */}
            <div className="absolute bottom-4 left-4 bg-gray-600 p-3 transform md:translate-x-10 rounded-lg text-white backdrop-blur-md">
              
              <p className="font-semibold text-sm ">{slide.name}</p>
              <p className="text-xs text-gray-300">{slide.role}</p>
              <div className="flex gap-1 mb-1 mt-3">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar key={i} className="text-orange-500  text-sm" />
                  ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center gap-6 mt-10">
        <button
          onClick={prevSlide}
          className="bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-200 transition"
          aria-label="Previous Slide"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-200 transition"
          aria-label="Next Slide"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
});

export default Section6;
