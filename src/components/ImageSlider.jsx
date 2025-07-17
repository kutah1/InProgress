import React from 'react'
import {motion} from 'framer-motion'
import Red from '../assets/images/red.png'
import Green from '../assets/images/green.png'
import Yellow from '../assets/images/yellow.png'
import { useState } from 'react'
const ImageSlider = () => {
    const [positionIndex,setPositionIndex]=useState([0,1,2])

    const handleNext=()=>{
        setPositionIndex((prevIndex)=>{
            const newIndex=prevIndex.map((index)=>(index+1)%3)         
            return newIndex
        })
    }

const images =[
    Red,
    Green,
    Yellow

]
const positions=[
    'center',
    'left',
    'right',
]
const imagevariants ={
    center:{
        x:0,
        scale:1,
        zIndex:5,
    },
    left:{  
        x:'-50%',
        scale:0.8,
        zIndex:4,
    },
    right:{
        x:'50%',
        scale:0.8,
        zIndex:4,
    }
}

const labels = ["Red", "Green", "Yellow"];

// Bring clicked card to center
const handleCardClick = (clickedIdx) => {
  if (positionIndex[clickedIdx] === 0) return; // Already center
  // Rotate array so clicked card is center
  let newOrder = [...positionIndex];
  while (newOrder[clickedIdx] !== 0) {
    newOrder = newOrder.map((i) => (i + 1) % 3);
  }
  setPositionIndex(newOrder);
};

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="relative w-full flex justify-center items-center" style={{ height: '340px' }}>
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="absolute flex flex-col items-center cursor-pointer"
            initial={positions[positionIndex[index]]}
            animate={positions[positionIndex[index]]}
            variants={imagevariants}
            transition={{ duration: 0.5 }}
            style={{ width: '40%' }}
            onClick={() => handleCardClick(index)}
          >
            <div className="relative w-full h-[220px]">
              <img
                src={image}
                alt={labels[index]}
                className={`rounded-[18px] shadow-2xl border-4 border-white transition-all duration-300 w-full h-full object-cover ${positionIndex[index] === 0 ? 'scale-105 ring-4 ring-orange-400 z-10' : 'opacity-80'}`}
              />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 rounded-xl font-bold text-lg text-white bg-black bg-opacity-40 w-fit pointer-events-none">
                Love Ghana
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <button
        className="mt-8 px-6 py-2 bg-orange-500 text-white rounded-lg font-semibold shadow hover:bg-orange-600 transition"
        onClick={handleNext}
      >
        Next
      </button>
      <div className="mt-4 text-gray-500 text-sm">Will be modified soon</div>
    </div>
  )
}

export default ImageSlider
