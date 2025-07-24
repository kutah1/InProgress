import React from 'react';
import { motion } from 'framer-motion';
import Red from '../../assets/images/YellowShirt.jpg';
import SoftLife from '../../assets/images/WhiteWoman.jpg';
import greater from '../../assets/images/DoublePCs.jpg';

const cardVariants = {
  hover: { scale: 1.05, rotate: 0, transition: { duration: 0.3 } },
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Section21 = () => {
  return (
    <section className="w-full min-h-50 bg-gradient-to-b from-[#0c0d24] to-[#14162e] text-white flex flex-col items-center justify-center p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 text-center">Gigupp</h1>

      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {/* Card 1 */}
        <motion.div
          variants={cardVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="rounded-xl overflow-hidden shadow-lg relative transform rotate-[-3deg]">
          <img src={greater} alt="Digital Marketing" className="w-full h-64 md:h-96 object-cover" />
          <div className="absolute bottom-4 left-4 text-lg md:text-xl font-semibold">Digital Marketing</div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={cardVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="rounded-xl overflow-hidden shadow-lg relative transform rotate-[2deg]">
          <img src={Red} alt="Architecture" className="w-full h-64 md:h-96 object-cover" />
          <div className="absolute bottom-4 left-4 text-lg md:text-xl font-semibold">Architecture</div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={cardVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="rounded-xl overflow-hidden shadow-lg relative transform rotate-[-2deg]">
          <img src={SoftLife} alt="Projects" className="w-full h-64 md:h-96 object-cover" />
          <div className="absolute bottom-4 left-4 text-lg md:text-xl font-semibold">Projects</div>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          variants={cardVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="rounded-xl overflow-hidden shadow-lg relative transform rotate-[3deg]">
          <img src={greater} alt="Coding" className="w-full h-64 md:h-96 object-cover" />
          <div className="absolute bottom-4 left-4 text-lg md:text-xl font-semibold">Coding</div>
        </motion.div>
      </div>

      <p className="text-center max-w-2xl text-sm sm:text-base md:text-lg mb-8 px-2">
        At GigUpp, we connect you with talented freelancers across multiple fields,
        whether you need creative work, technical expertise, or business support.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl transition">
          Pro Student Gigs
        </button>
        <button className="bg-white hover:bg-gray-100 text-gray-900 font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl transition">
          Lecturer Featured
        </button>
      </div>
    </section>
  );
};

export default Section21;
