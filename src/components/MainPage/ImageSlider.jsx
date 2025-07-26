import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Olivia from '../../assets/images/Olivia.png'
import Chair from '../../assets/images/chair.jpg';
import { GoStarFill } from 'react-icons/go';

const cards = [
  {
    img: Chair,
    title: 'SEO Blog Writing',
    subtitle: 'Talent gig',
    description: 'Boost your website traffic with engaging, SEO-optimized blog posts crafted to drive results and keep your readers hooked.',
    host: 'Olivia Rhye',
    rating: 4.9,
    button: 'Order',
  },
  {
    img: Chair,
    title: 'SEO Blog Writing',
    subtitle: 'Talent gig',
    description: 'Boost your website traffic with engaging, SEO-optimized blog posts crafted to drive results and keep your readers hooked.',
    host: 'Olivia Rhye',
    rating: 4.9,
    button: 'Order',
  },
  {
    img: Chair,
    title: 'SEO Blog Writing',
    subtitle: 'Talent gig',
    description: 'Boost your website traffic with engaging, SEO-optimized blog posts crafted to drive results and keep your readers hooked.',
    host: 'Olivia Rhye',
    rating: 4.9,
    button: 'Order',
  },
];

const ImageSlider = () => {
  const [activeIdx, setActiveIdx] = useState(1);
  const handleCardClick = useCallback((idx) => setActiveIdx(idx), []);

  return (
    <>
    <div className='ml-30 mt-10'>
       <h1 className='font-semibold text-5xl'>
        Popular Gigs Near Kumasi

    </h1>
    <p className='mt-3'>
      We love using GigUPP! Finding the right freelancers here is easy.
      <br/>
      and the quality of work always matches exactly what we're 
      <br/>
      looking for.
    </p>

    </div>
   
    <section className="md:flex justify-center items-center mt-10 min-h-[500px] hidden" aria-label="Image Slider">
      <div className="relative flex w-full max-w-6xl justify-center items-center">
        {cards.map((card, idx) => {
          const isActive = idx === activeIdx;
          const scale = isActive ? 1.1 : 0.85;
          const opacity = isActive ? 1 : 0.4;
          const zIndex = isActive ? 30 : 10;
          const translateX = (idx - activeIdx) * 300;

          return (
            <motion.div
              key={idx}
              className="absolute flex flex-col items-center justify-end cursor-pointer"
              style={{
                left: '50%',
                transform: `translateX(${translateX}px) translateX(-50%) scale(${scale})`,
                zIndex,
                opacity,
                transition: 'all 0.5s cubic-bezier(.4,0,.2,1)',
              }}
              onClick={() => handleCardClick(idx)}
            >
              <div
                className={`bg-white rounded-2xl overflow-hidden w-[320px] h-[520px] flex flex-col relative border-2 ${
                  isActive ? 'border-[#FF790C]' : 'border-transparent'
                } shadow-xl`}
              >
                <img src={card.img} alt={card.title} className="w-full h-[200px] p-4   object-cover" />
                <div className="p-5 flex flex-col gap-2">
                  <span className="text-[#FF790C] text-sm font-semibold uppercase">{card.subtitle}</span>
                  <div className="flex justify-between items-center">
                    <h2 className="text-[#0F172A] font-bold text-lg">{card.title}</h2>
                    <span className="bg-[#FF790C] text-white text-sm px-3 py-1 rounded font-semibold">Pro</span>
                  </div>
                  <p className="text-sm text-[#0F172A] mt-1">{card.description}</p>
                  <div className="flex items-center gap-3 mt-3">
                    <div className="w-10 h-10 rounded-full bg-[#C7B9DA] flex items-center justify-center">
                      <img src={Olivia} alt=""className='w-10 h-10 rounded-full' />

                    </div>
                    <div>
                      <h3 className="text-[#0F172A] font-semibold">
                        {card.host}</h3>
                      <div className="flex mt-1">
                        {[...Array(3)].map((_, i) => (
                          <GoStarFill key={i} className="text-[#FF790C] w-4 h-4 mr-1" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <button className="bg-[#FF790C] text-white rounded-lg  px-10 py-3 text-sm font-medium hover:bg-[#FF790C]/90 transition">
                      {card.button}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
    </>
  );
};

export default ImageSlider;
