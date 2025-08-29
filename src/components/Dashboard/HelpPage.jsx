import React from 'react'
import DashboardNavbar from './DashboardNavbar'
import Footer from '../MainPage/Footer'
import { GiSpanner } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { TbAlertSquareFilled } from "react-icons/tb";
import { MdHeadsetMic } from "react-icons/md";
import { GoUpload } from "react-icons/go";
import { MdQuestionAnswer } from "react-icons/md";
const Data = [
  {
    icon: FaSearch,
    heading: "How to hire on Gigupp",
    background: "bg-[#FFE7D3]"
  },
  {
    icon: TbAlertSquareFilled,
    heading: "Report a gig",
    background: "bg-[#DAF2FF]"
  },
  {
    icon: MdHeadsetMic,
    heading: "Support a request",
    background: "bg-[#E9FFC1]"
  },
  {
    icon: GiSpanner,
    heading: "How to reset my password",
    background: "bg-[#FFBEBE]"
  },
  {
    icon: GoUpload,
    heading: "How to upgrade to pro version",
    background: "bg-[#F7FFBE]"
  },
  {
    icon: MdQuestionAnswer,
    heading: "FAQs",
    background: "bg-[#FFCEFA]"
  }
];

const HelpPage = () => {
  return (
    <>
    <DashboardNavbar/>  

    <div className=' flex justify-center plus-jakarta-sans'>
        <div>
          <div className='text-left mx-10 mt-50'>
            <div className='mx-20'>
            <h1 className='text-4xl mt-10 mb-1'>How can we help you today?</h1>
            <h2 className='text-xl text-[#0F172A]'>Browse our FAQS or Chat with our support agent</h2>
            </div>
            <div className='border-[#A1A1AA] border-1 flex flex-row justify-between rounded-3xl pl-10  m-10'>
                <input type="text" name="" id="" placeholder='Search for talents' className='  focus:outline-none px-20 p-3 text-left md:-translate-x-20 transform ' />
                <button className='bg-gray-800 px-15 rounded-3xl m-2 text-white p-3'>Search </button>

            </div>
          </div>



        </div>
        
        
        
    </div> 



    
           <div className='plus-jakarta-sans grid grid-cols-1 md:grid-cols-3 gap-8 mx-10 my-15 mb-72'>
             {Data.map((item, idx) => {
               const Icon = item.icon;
               return (
                 <div
                   key={idx}
                   className={`flex flex-col items-center justify-center rounded-2xl shadow-lg p-8 transition hover:scale-105 duration-200 ${item.background}`}
                   style={{ minHeight: '200px' }}
                 >
                   <div className='mb-4 bg-white p-2 rounded-full w-20 h-20 flex items-center justify-center'>
                     <Icon className='text-5xl text-[#0F172A] mb-2 ' />
                   </div>
                   <h3 className='text-xl font-semibold text-center text-[#0F172A]'>{item.heading}</h3>
                 </div>
               );
             })}
           </div>


    <div>

      
    </div>
   
    <Footer/>
    </>
  )
}

export default HelpPage
