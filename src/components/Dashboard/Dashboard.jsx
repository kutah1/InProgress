import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaUser, FaEnvelope, FaMoneyBill, FaStar, FaUpload, FaCog, FaSearch, FaGem, FaUserGraduate, FaTools, FaQuestionCircle } from 'react-icons/fa';
import { HiOutlineBell, HiOutlineCog } from 'react-icons/hi';
import { BsCardList } from 'react-icons/bs';
import { FiUser } from 'react-icons/fi';
import { GiBrickWall } from "react-icons/gi";
import { BsChatTextFill } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";
import { TfiSharethisAlt } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";
import { BiSolidSend } from "react-icons/bi";
import AvatarInBlue from '../../assets/images/DashboardImages/AvatarInBlue.jpg'
import LadyInPink from '../../assets/images/DashboardImages/LadyInPink.jpg'
import Screen from '../../assets/images/DashboardImages/Screen.jpg'

const dummyCards = [
  { id: 1, title: 'SEO Blog Writing', rating: 5, image: Screen, talent: 'Talent A' },
  { id: 2, title: 'Photo Retouching', rating: 4, image: LadyInPink, talent: 'Talent B' },
  { id: 3, title: 'SEO Blog Writing', rating: 5, image: Screen, talent: 'Talent C' },
  { id: 4, title: 'Brand Design', rating: 4, image: LadyInPink, talent: 'Talent D' },
  { id: 5, title: 'UX Review', rating: 4, image:Screen, talent: 'Talent E' },
];

const SidebarIcon = ({ icon, label }) => (
  <div className="flex items-center gap-4 hover:bg-orange-500 p-3 rounded-md cursor-pointer text-white">
    {icon}
    <span className="hidden group-hover:inline-block">{label}</span>
  </div>
);

const Dashboard = () => {
  const [expanded, setExpanded] = useState(false);
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="flex min-h-screen font-sans bg-gray-100">
      {/* Sidebar */}
      <motion.div
        animate={{ width: expanded ? 220 : 80 }}
        className="bg-orange-600 text-white p-4 pt-6 group transition-all duration-300"
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        <SidebarIcon icon={<GiBrickWall />} label="Dashboard" className="w-7 h-7 " />
        <SidebarIcon icon={<BsChatTextFill  className="w-7 h-7 text-[#0F172A]" />} label="Messages" />
        <SidebarIcon icon={<GiTakeMyMoney className="w-7 h-7 text-[#0F172A]   " />} label="Payment" />
        <SidebarIcon icon={<TfiSharethisAlt  className="w-7 h-7 text-[#0F172A]" />} label="Reviews" />
        <SidebarIcon icon={<BiSolidSend  className="w-7 h-7 text-[#0F172A]" />} label="Submission" />
        <SidebarIcon icon={<CgProfile  className="w-7 h-7 text-[#0F172A]" />} label="Account" />
      </motion.div>

      {/* Main content */}
      <div className="flex-1 p-6">
        {/* Top bar */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-2 items-center">
            <input className="border px-4 py-2 rounded-full" placeholder="Search for talents" />
            <button className="bg-black text-white px-4 py-2 rounded-full">Search</button>
            <button className="border px-4 py-2 rounded-full">Talent gig</button>
            <button className="border px-4 py-2 rounded-full">Lecture-featured gig</button>
          </div>
          <div className="flex items-center gap-4">
            <HiOutlineCog size={24} />
            <HiOutlineBell size={24} />
          </div>
        </div>

        {/* Profile, Upgrade & Orders */}
        <div className="flex-row flex  gap-6 mb-6">
          {/* Profile */}
          <div className="bg-orange-500 p-4 rounded-xl shadow flex-row flex justify-center items-center gap-4 flex-1">
            
            <div className='flex-col text-center self-center justify-center'>
              <img src={AvatarInBlue} className="rounded-full w-15 h-15 object-center self-center ml-13" alt="profile" />

              <p className="font-semibold text-white">Hello Kojo 👋</p>
              <div className="flex gap-2 mt-2 bg-white px-6 rounded-3xl p-2">
                <button className="text-black px-2 py-1 rounded-md text-sm">Client</button>
                <button className="text-black px-2 py-1 rounded-md text-sm">Kumasi</button>
              </div>
            </div>
          </div>

          {/* Upgrade & Track Orders */}
          <div className="flex flex-col gap-6 flex-1">
            <div className="bg-black text-white p-12 rounded-xl shadow">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="font-semibold mb-1">Upgrade to Pro</h2>
                  <p className="text-sm">Unlock featured student matching</p>
                </div>

                 <FaGem size={38} className="text-orange-400 items-end" />

              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow flex items-start gap-4">
              <BsCardList size={32} className="text-orange-500" />
              <div>
                <h2 className="font-semibold">Track Orders</h2>
                <p className="text-sm text-gray-600">Monitor your ongoing gigs in real-time</p>
                <button className="bg-orange-500 px-10 p-1 rounded-xl text-white  mt-1">Visit now</button>
              </div>
            </div>
          </div>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-4 rounded-xl shadow flex items-start gap-4">
            <FaUserGraduate size={28} className="text-orange-500" />
            <div>
              <p className="mb-2 text-sm">Are you a student looking to offer services on GigUp?</p>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm">Verify as a student</button>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow flex items-start gap-4">
            <FaTools size={28} className="text-orange-500" />
            <div>
              <h2 className="font-semibold mb-1">Account & Profile Settings</h2>
              <p className="text-sm text-gray-600">Edit your profile and manage your account settings easily.</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow flex items-start gap-4">
            <FaQuestionCircle size={28} className="text-orange-500" />
            <div>
              <h2 className="font-semibold mb-1">Help / Support</h2>
              <p className="text-sm text-gray-600">Get assistance or find answers to your questions.</p>
            </div>
          </div>
        </div>

        {/* Recently viewed gigs */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-xl">Recently viewed gig</h2>
            <button className="text-orange-500" onClick={() => setShowAll(true)}>See all</button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {(showAll ? dummyCards : dummyCards.slice(0, 3)).map((card) => (
              <motion.div
                key={card.id}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-4 rounded-xl shadow cursor-pointer"
              >
                <img src={card.image} alt={card.title} className="w-full h-40 object-cover rounded-md mb-3" />
                <p className="font-semibold">{card.title}</p>
                <p className="text-sm text-gray-600">by {card.talent}</p>
                <p className="text-orange-500 mt-1">Pro</p>
                <div className="flex mt-1">
                  {'★'.repeat(card.rating)}{'☆'.repeat(5 - card.rating)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-gray-400 mt-12">&copy; Copyright 2025. All Rights Reserved by GigUpp</p>
      </div>
    </div>
  );
};

export default Dashboard;
