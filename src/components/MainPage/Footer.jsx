import React from 'react'
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import PlayStore from '../../assets/images/play_store.png'
import { AiFillApple } from "react-icons/ai";
const Footer = () => {
  return (
    <div>
    <footer className='flex flex-col plus-jakarta-sans md:flex-row text-white plus-jakarta-sans w-full py-8 px-4 md:px-16' style={{backgroundColor:'#0F172A'}} aria-label="Footer">
      <div className='flex-1 mb-8 md:mb-0 md:mr-10'>
        <p className='font-bold text-2xl mb-2'>GIGUPP</p>
        <p className='font-semibold text-lg mb-4'>
          From campus to Clients, start your <br />freelance journey today.
        </p>
        <span className='bg-white rounded-lg flex items-center p-2 mb-4'>
          <input type="text" placeholder='Search for Gigs' className='text-[#0F172A] px-2 py-1 rounded-l-lg w-full focus:outline-none' />
          <button className='btn text-white px-5 w-45 text-center rounded-r-lg' style={{backgroundColor:'#FF790C'}} >Search</button>
        </span>
        <nav aria-label="Footer Navigation">
          <ul className='flex flex-wrap gap-4 mb-4'>
            <li><p className='hover:text-[#FF790C] cursor-pointer'>About</p></li>
            <li><p className='hover:text-[#FF790C] cursor-pointer'>Contact</p></li>
            <li><p className='hover:text-[#FF790C] cursor-pointer'>Privacy Policy</p></li>
            <li><p className='hover:text-[#FF790C] cursor-pointer'>Terms & Conditions</p></li>
          </ul>
        </nav>
        <p className='text-xs text-[#0F172A]'>© 2025. All Rights Reserved GigUpp</p>
      </div>
      <div className='flex-1 flex flex-col text-left items-start md:items-end'>
        <div className='flex items-start text-left md:-translate-x-30 text-xl transform'>
               <p className='font-semibold   mb-2'>Install App</p>

        </div>

        <div className='flex flex-col gap-2 mb-5'>
          {/* Example app store buttons, replace with actual links/images as needed */}
               <div className='rounded-2xl flex flex-row items-start md:h-[70px]  bg-black text-white'>
                <div className='m-1'>
                    <AiFillApple className='text-6xl m-1 transform md:-translate-x-3 text-white' color='white'/>
                </div>
              
                <div className='flex flex-col mt-2'>
                  <h2>
                    Download on the  <br />
                    <h3 className='text-2xl font-light '>App Store</h3>
                  </h2>
                </div>
               </div>

               <div className='rounded-2xl flex flex-row items-start md:p-3  w-[240px] h-[65px] md:h-[75px] bg-black text-white'>
                <div>
                   <img src={PlayStore} alt="play_store" className='md:w-12 mt-3 ml-5 md:ml-0  md:mt-0 md:h-12 h-10 w-10 mr-5'/>
                </div>
              
                <div className='flex flex-col mb-1 '>
                  <h2 className='text-xl'>
                    Get it on <br />
                    <h3 className='text-2xl font-light pb-1 '>Google Play</h3>
                  </h2>
                </div>
               </div>
        </div>

        <div className='flex gap-3 mb-4 items-end h-full'>
          <a href="#" aria-label="Twitter"><AiFillTwitterCircle className='w-7 h-7 hover:text-[#FF790C] cursor-pointer'/></a>
          <a href="#" aria-label="Facebook"><FaFacebookF className='w-7 h-7 hover:text-[#FF790C] cursor-pointer'/></a>
          <a href="#" aria-label="Instagram"><FaInstagramSquare className='w-7 h-7 hover:text-[#FF790C] cursor-pointer'/></a>
          <a href="#" aria-label="Github"><FaGithub className='w-7 h-7 hover:text-[#FF790C] cursor-pointer'/></a>
        </div>
        
      </div>
    </footer>
    </div>
  )
}

export default Footer
