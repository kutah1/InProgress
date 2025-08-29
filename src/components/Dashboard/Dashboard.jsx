import React, { useState } from 'react'; 
import { motion } from 'framer-motion';
import { FaArrowsRotate } from "react-icons/fa6";
import { FaBars, FaUser, FaEnvelope, FaMoneyBill, FaStar, FaUpload, FaCog, FaSearch, FaGem, FaUserGraduate, FaTools, FaQuestionCircle } from 'react-icons/fa';
import { HiOutlineBell, HiOutlineCog } from 'react-icons/hi';
import { FiHelpCircle } from "react-icons/fi";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
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
  { id: 1,name:'Olivia Rhye', title: 'SEO Blog Writing',description:`Boost your website traffic with  engaging, SEO-optimized blog posts crafted to drive results and keep your  readers hooked` ,
    rating: 5, image: Screen, talent: 'Talent A' },
  { id: 2,name:'Sophia Nartey', title: 'Photo Retouching',description:`Bring your photos to life with expert  color correction, skin retouching, and  detailed enhancements for a polished finish`, rating: 4, image: LadyInPink, talent: 'Talent Gig' },
  { id: 3,name:'Olivia Rhye', title: 'SEO Blog Writing',description:'Boost your website traffic with engaging, SEO-optimized blog posts crafted to drive results and keep your readers hooked', rating: 5, image: Screen, talent: 'Talent Gig' },
  { id: 4,name:'Sophia Nartey', title: 'Brand Design', rating: 4,description:'Boost your website traffic with engaging, SEO-optimized blog posts crafted to drive results and keep your readers hooked', image: LadyInPink, talent: 'Talent Gig' },
  { id: 5, name:'Olivia Rhye',title: 'UX Review', rating: 4,description:'Boost your website traffic with engaging, SEO-optimized blog posts crafted to drive results and keep your readers hooked', image:Screen, talent: 'Talent Gig' },
];

const SidebarIcon = ({ icon, label }) => (
  <div className="flex plus-jakarta-sans items-center gap-4 hover:bg-orange-500 mt-7 p-3 rounded-md cursor-pointer text-white">
    {icon}
    <span className="hidden group-hover:inline-block">{label}</span>
  </div>
);

const Dashboard = () => {
  const [expanded, setExpanded] = useState(false);
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="flex plus-jakarta-sans min-h-screen font-sans bg-gray-100">
      {/* Sidebar */}
      <motion.div
        animate={{ width: expanded ? 220 : 80 }}
        className="bg-gradient-to-b from-orange-500 via-orange-400 to-gray-400 text-white p-4 pt-6 group transition-all duration-100"
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        <SidebarIcon icon={<GiBrickWall />} label="Dashboard" className="w-7 h-7  " />
        <SidebarIcon icon={<BsChatTextFill  className="w-7 h-7 text-[#0F172A]  my-2" />} label="Messages" />
        <SidebarIcon icon={<GiTakeMyMoney className="w-7 h-7 text-[#0F172A]   my-2  " />} label="Payment" />
        <SidebarIcon icon={<TfiSharethisAlt  className="w-7 h-7 text-[#0F172A]  my-2" />} label="Reviews" />
        <SidebarIcon icon={<BiSolidSend  className="w-7 h-7 text-[#0F172A]  my-2" />} label="Submission" />
        <SidebarIcon icon={<FaUserCircle className="w-7 h-7 text-[#0F172A]  my-2" />} label="Account" />
      </motion.div>

      {/* Main content */}
      <div className="flex-1  p-6 plus-jakarta-sans">
        {/* Top bar */}
        <div className="flex justify-around items-center mb-6">
          <div className="flex gap-2 items-center">
            <div className='border rounded-4xl'>
             <input className=" px-4 py-2 rounded-full focus:outline-0" placeholder="Search for talents" />
            <button className="bg-[#0F172A] text-white px-8 py-2 m-1 rounded-full">Search</button>

            </div>
      
            <button className="border-orange-500 border px-4 py-2 rounded-full">Talent gig</button>
            <button className="border-orange-500 border px-4 py-2 rounded-full">Lecture-featured gig</button>
          </div>
          <div className="flex items-center gap-4">
            <HiOutlineCog size={38}  className='bg-orange-500 rounded-xl text-white '/>
            <HiOutlineBell size={38} className='bg-orange-500 rounded-xl text-white ' />
          </div>
        </div>

        {/* Profile, Upgrade & Orders */}
        <div className=" plus-jakarta-sans flex-row flex  gap-6 mb-6">
          {/* Profile */}
          <div className="bg-orange-500 p-4 rounded-xl shadow flex-row flex justify-center items-center gap-4 flex-1 ">
            <div className='flex-col text-center self-center justify-center w-1/3'>
              <img src={AvatarInBlue} className="rounded-full w-15 h-15 object-center self-center ml-13" alt="profile" />
              <p className="font-semibold text-white">Hello Kojo 👋</p>
              <div className="flex gap-2 mt-2 bg-white px-6 rounded-3xl p-2">
                <button className="text-[#0F172A] px-2 py-1 rounded-md text-sm flex flex-row items-center transform -translate-x-3">
                  <FaUserCircle className='text-xl' />
                  
                  <span className='mx-1'>
                    Client
                    </span></button>
                <button className="text-[#0F172A] px-2 py-1 rounded-md text-sm flex flex-row items-center transform -translate-x-3">
                  <FaLocationCrosshairs className='text-xl' />
                  <span className='mx-1'>Kumasi
                    </span> </button>
              </div>
            </div>
          </div>

          {/* Upgrade & Track Orders */}
          <div className="flex flex-col gap-6 flex-1 plus-jakarta-sans">
            <div className="bg-[#0F172A] text-white p-12 rounded-xl shadow">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="font-semibold mb-1 text-2xl">Upgrade to Pro</h2>
                  <p className="">Unlock featured student <br /> matching</p>
                </div>
                <FaGem size={68} className="text-pink-400 items-end" />
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow flex items-start gap-4">
              <FaArrowsRotate size={32}  />
              <div>
                <h2 className="font-semibold">Track Orders</h2>
                <p className="text-sm text-[#0F172A]">Monitor your ongoing gigs in real-time</p>
                <button className="bg-orange-500 px-15 p-2 mt-5 rounded-xl text-white  ">Visit now</button>
              </div>
            </div>
          </div>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-3 gap-6 mb-6 plus-jakarta-sans">
          <div className="bg-white p-4 rounded-xl shadow flex flex-row items-start  gap-4">
            <FaUserGraduate size={28}  className='text-xl'/>
            <div>
              <p className="mb-2 text-sm">Are you a student looking to offer  <br />services on GigUp?</p>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-2xl p-2 mt-4 text-sm">Verify as a student</button>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow flex items-start gap-4">
            < FaUserCircle size={28} className='text-xl'  />
            <div>
              <h2 className="font-semibold mb-1">Account & Profile Settings</h2>
              <p className="text-sm text-[#0F172A]">Edit your profile and manage your <br />account settings easily.</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow flex items-start gap-4">
            <FiHelpCircle  size={28}  className='text-xl' />
            <div>
              <h2 className="font-semibold mb-1">Help / Support</h2>
              <p className="text-sm text-[#0F172A]">Get assistance or find answers to <br /> your questions.</p>
            </div>
          </div>
        </div>

        {/* Recently viewed gigs */}
        <div>
          <div className="flex plus-jakarta-sans justify-between items-center mb-4">
            <h2 className="font-bold text-xl">Recently viewed gig</h2>
            <button className="text-orange-500" onClick={() => setShowAll(true)}>See all</button>
          </div>

          {/* Updated slider section */}
          <div className="grid grid-cols-3 plus-jakarta-sans gap-4">
            {(showAll ? dummyCards : dummyCards.slice(0, 3)).map((card) => (
              <motion.div
                key={card.id}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow cursor-pointer flex flex-col justify-center p-4 h-110"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <p className="font-semibold">{card.description}</p>
                <div className='flex flex-row justify-between mt-4 items-center'>
                   <p className="text-sm  text-orange-500 "> {card.talent}</p>
                <p className="text-white bg-orange-500 rounded-xl px-6 p-1 mt-1 mr-5">Pro</p>
                </div>
                <div className='font-semibold text-xl'>{card.title}</div>

                <div className='flex flex-row gap-5'>

                  <img src={card.image} alt=""  className='w-9 h-9 rounded-full'/>
                  <div>
                   <p>{card.name}</p>
                  <div className="flex w-15 h-15 mt-1">
                  {'★'.repeat(card.rating)}{'☆'.repeat(5 - card.rating)}
                </div>
                  </div>
                </div>
               
             
              </motion.div>
            ))}
          </div>
        </div>

        <p className="text-center plus-jakarta-sans text-sm text-black mt-12">&copy; Copyright 2025. All Rights Reserved by GigUpp</p>
      </div>
    </div>
  );
};

export default Dashboard;
