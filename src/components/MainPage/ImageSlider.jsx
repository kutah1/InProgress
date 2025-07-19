import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Red from '../../assets/images/PCandDayLight.jpg';
import { GoStarFill } from "react-icons/go";

const cards = [
  {
    img: Red,
    title: 'Talent Gig',
    subtitle: 'Talent Gig',
    description: 'Browse your website traffic with engaging SEO-optimized blog posts crafted to drive results and keep your readers hooked.',
    host: 'Olivia Shye',
    rating: 4.9,
    button: 'Order',
  },
  {
    img: Red,
    title: 'Talent Gig',
    subtitle: 'Talent Gig',
    description: 'Browse your website traffic with engaging SEO-optimized blog posts crafted to drive results and keep your readers hooked.',
    host: 'Olivia Shye',
    rating: 4.9,
    button: 'Order',
  },
  {
    img: Red,
    title: 'Talent Gig',
    subtitle: 'Talent Gig',
    description: 'Browse your website traffic with engaging SEO-optimized blog posts crafted to drive results and keep your readers hooked.',
    host: 'Olivia Shye',
    rating: 4.9,
    button: 'Order',
  },
];

const ImageSlider = () => {
  const [activeIdx, setActiveIdx] = useState(1);
  const handleCardClick = useCallback((idx) => setActiveIdx(idx), []);

  return (
    <section className="md:flex justify-center items-center mt-10 min-h-[500px] hidden" aria-label="Image Slider">
      <div className="relative flex w-full max-w-5xl justify-center items-center">
        {cards.map((card, idx) => {
          const isActive = idx === activeIdx;
          let scale = isActive ? 1.1 : 0.85;
          let opacity = isActive ? 1 : 0.5;
          let brightness = isActive ? '100%' : '80%';
          let zIndex = isActive ? 30 : 10;
          let translateX = (idx - activeIdx) * 260;
          return (
            <motion.div
              key={idx}
              className="absolute flex flex-col items-center justify-end cursor-pointer"
              style={{
                left: '50%',
                transform: `translateX(${translateX}px) translateX(-50%) scale(${scale})`,
                zIndex,
                opacity,
                filter: `brightness(${brightness})`,
                transition: 'all 0.5s cubic-bezier(.4,0,.2,1)',
                boxShadow: isActive
                  ? '0 12px 32px rgba(0,0,0,0.18)'
                  : '0 2px 8px rgba(0,0,0,0.08)',
              }}
              onClick={() => handleCardClick(idx)}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-[320px] h-[400px] flex flex-col relative">
                <img src={card.img} alt={card.title} loading="lazy" className="w-full h-[220px] object-cover" />
                <div className="p-5 flex flex-col gap-2">
                  <h2 className="text-orange-500 font-bold text-lg">{card.subtitle}</h2>
                  <div className="flex flex-row items-center justify-between">
                    <h2 className="font-semibold text-gray-800">{card.title}</h2>
                    <button className="px-6 bg-orange-400 text-white rounded p-2">Pro</button>
                  </div>
                  <div className="text-gray-600 text-sm mb-2">{card.description}</div>
                  <div className="flex flex-row items-center mt-2">
                    <div className="bg-black rounded-full w-10 h-10 flex items-center justify-center mr-2">
                      <span className="text-white text-xs font-semibold">{card.host.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="flex flex-row items-center ml-2">
                        <h1 className="font-semibold text-gray-800 mr-2">{card.host}</h1>
                        {[...Array(3)].map((_, i) => (
                          <GoStarFill key={i} className="w-5 h-5 text-orange-500 mx-1" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <button className="text-white w-40 rounded-lg px-8 py-3 bg-orange-500 hover:bg-orange-600 transition">
                      {card.button}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-row gap-3">
        {cards.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition-all ${activeIdx === idx ? "bg-orange-500 scale-125" : "bg-gray-300"}`}
            onClick={() => setActiveIdx(idx)}
            aria-label={`Go to card ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;
