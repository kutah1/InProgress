import React from 'react'
import { TbFileSearch } from "react-icons/tb";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiTakeMyMoney } from "react-icons/gi";

const cardData = [
  {
    icon: <TbFileSearch className="w-10 h-10 text-black bg-white rounded-full shadow" />,
    title: "Create a Gig",
    desc: "Got a skill to share or a task to outsource? Drop it here and let the right people find you."
  },
  {
    icon: <CiDeliveryTruck className="w-10 h-10 text-black bg-white rounded-full shadow" />,
    title: "Deliver and Grow",
    desc: "Deliver your gig, get feedback, and grow your reputation."
  },
  {
    icon: <GiTakeMyMoney className="w-10 h-10 text-black bg-white rounded-full shadow" />,
    title: "Earn and Grow",
    desc: "Earn money and experience while building your skills and network."
  }
];

const Cards = () => {
  return (
    <div className="space-y-6">
      {cardData.map((card, idx) => (
        <div key={idx} className="flex items-center  text-black rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
          <div>{card.icon}</div>
          <div className="ml-5">
            <h1 className="font-bold text-white text-lg mb-1">{card.title}</h1>
            <p className="text-gray-200 text-sm">{card.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cards
