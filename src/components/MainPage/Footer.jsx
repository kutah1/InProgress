import React from 'react';
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import PlayStore from '../../assets/images/play_store.png';
import { AiFillApple } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <footer className='flex flex-col plus-jakarta-sans md:flex-row text-white plus-jakarta-sans w-full py-8 px-4 md:px-16' style={{ backgroundColor: '#0F172A' }} aria-label="Footer">
        <div className='flex-1 mb-8 md:mb-0 md:mr-10'>
          <p className='font-bold text-2xl mb-2'>GIGUPP</p>
          <p className='font-semibold text-lg mb-4'>
            From campus to Clients, start your <br />freelance journey today.
          </p>
          <span className='bg-white rounded-lg flex items-center p-2 mb-4'>
            <input type="text" placeholder='Search for Gigs' className='text-[#0F172A] px-2 py-1 rounded-l-lg w-full focus:outline-none' />
            <button className='btn text-white px-5 w-45 text-center rounded-r-lg' style={{ backgroundColor: '#FF790C' }} >Search</button>
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
          <div className='flex items-start text-left text-xl transform md:-translate-x-20'>
            <p className='font-semibold mb-2 text-left'>Install App</p>
          </div>

          {/* Updated PlayStore and Apple Sections */}
          <div className='flex flex-col gap-3 mb-5 md:w-[600] max-w-xs'>
            <div className='flex flex-col gap-3 mb-5 md:w-full max-w-xs'>
  {/* Apple Store */}
  <div className="flex items-center justify-center gap-3 p-3 rounded-xl bg-black text-white shadow-md hover:scale-[1.02] transition-transform duration-200">
    <AiFillApple className="text-4xl md:text-5xl" />
    <div className="leading-tight text-center">
      <p className="text-lg">Download on the</p>
      <p className="text-xl font-semibold">App Store</p>
    </div>
  </div>

  {/* Google Play */}
  <div className="flex items-center justify-center gap-3 p-3 rounded-xl bg-black text-white shadow-md hover:scale-[1.02] transition-transform duration-200">
    <img
      src={PlayStore}
      alt="Google Play"
      className="w-10 h-10 md:w-12 md:h-12 object-contain"
    />
    <div className="leading-tight text-left">
      <p className="text-lg">Get it on</p>
      <p className="text-xl font-semibold">Google Play</p>
    </div>
  </div>
</div>

          </div>

          <div className='flex gap-3 mb-4 items-end h-full'>
            <a href="#" aria-label="Twitter"><AiFillTwitterCircle className='w-7 h-7 hover:text-[#FF790C] cursor-pointer' /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF className='w-7 h-7 hover:text-[#FF790C] cursor-pointer' /></a>
            <a href="#" aria-label="Instagram"><FaInstagramSquare className='w-7 h-7 hover:text-[#FF790C] cursor-pointer' /></a>
            <a href="#" aria-label="Github"><FaGithub className='w-7 h-7 hover:text-[#FF790C] cursor-pointer' /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
