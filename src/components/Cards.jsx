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
    title: "Deliver  Value",
    desc: `Collaborate with real clients, deliver 
     solutions that matter, and grow your credibility through hands-on experience.`
  },
  {
    icon: <GiTakeMyMoney className="w-10 h-10 text-black bg-white rounded-full " />,
    title: "Earn and Grow",
    desc: "Turn every project into profit and every experience into progress. Grow your income and impact"
  }
];

const Cards = () => {
  return (
    <div className="space-y-6">
      {cardData.map((card, idx) => (
        <div key={idx} className="flex items-center  text-black rounded-xl p-4   ">
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
