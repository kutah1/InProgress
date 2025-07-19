import React from 'react'
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
    <footer className='flex flex-col md:flex-row text-white w-full py-8 px-4 md:px-16' style={{backgroundColor:'#0F172A'}} aria-label="Footer">
      <div className='flex-1 mb-8 md:mb-0 md:mr-10'>
        <p className='font-bold text-2xl mb-2'>GIGUPP</p>
        <p className='font-semibold text-lg mb-4'>
          From campus to Clients, start your <br />freelance journey today.
        </p>
        <span className='bg-white rounded-lg flex items-center p-2 mb-4'>
          <input type="text" placeholder='Search for Gigs' className='text-black px-2 py-1 rounded-l-lg w-full focus:outline-none' />
          <button className='btn text-white px-3 rounded-r-lg' style={{backgroundColor:'#FF790C'}} >Search</button>
        </span>
        <nav aria-label="Footer Navigation">
          <ul className='flex flex-wrap gap-4 mb-4'>
            <li><p className='hover:text-orange-400 cursor-pointer'>About</p></li>
            <li><p className='hover:text-orange-400 cursor-pointer'>Contact</p></li>
            <li><p className='hover:text-orange-400 cursor-pointer'>Privacy Policy</p></li>
            <li><p className='hover:text-orange-400 cursor-pointer'>Terms & Conditions</p></li>
          </ul>
        </nav>
        <p className='text-xs text-gray-400'>© 2025. All Rights Reserved GigUpp</p>
      </div>
      <div className='flex-1 flex flex-col items-start md:items-end'>
        <p className='font-semibold mb-2'>Install App</p>

        <div className='flex gap-2'>
          {/* Example app store buttons, replace with actual links/images as needed */}
          <button className='bg-white text-gray-800 px-3 py-1 rounded-lg text-xs font-semibold shadow hover:bg-orange-100'>App Store</button>
          <button className='bg-white text-gray-800 px-3 py-1 rounded-lg text-xs font-semibold shadow hover:bg-orange-100'>Google Play</button>
        </div>

        <div className='flex gap-3 mb-4 items-end h-full'>
          <a href="#" aria-label="Twitter"><AiFillTwitterCircle className='w-7 h-7 hover:text-orange-400 cursor-pointer'/></a>
          <a href="#" aria-label="Facebook"><FaFacebookF className='w-7 h-7 hover:text-orange-400 cursor-pointer'/></a>
          <a href="#" aria-label="Instagram"><FaInstagramSquare className='w-7 h-7 hover:text-orange-400 cursor-pointer'/></a>
          <a href="#" aria-label="Github"><FaGithub className='w-7 h-7 hover:text-orange-400 cursor-pointer'/></a>
        </div>
        
      </div>
    </footer>
    </div>
  )
}

export default Footer
