import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="flex plus-jakarta-sans flex-col md:flex-row items-center justify-between text-white p-5 w-full gap-4 md:gap-0" style={{backgroundColor:'#0F172A'}} aria-label="Main Navigation">
      <div className="flex w-full md:w-auto items-center justify-between">
        <p className="mb-2 md:mb-0 text-3xl font-light text-center w-full md:ml-4">GIGUPP</p>
        <button className="md:hidden text-3xl" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>
      </div>
      <ul className={`flex-col items-center flex text-center gap-2 w-full md:flex md:flex-row text-lg md:items-center md:gap-4 md:w-auto ${menuOpen ? 'flex' : 'hidden'} md:!flex`}>
        <li><p className="hover:text-[#FF790C] transition-colors cursor-pointer text-center md:text-left" tabIndex={0}>Browse Gigs</p></li>
        <li><p className="hover:text-[#FF790C] transition-colors cursor-pointer text-center md:text-left" tabIndex={0}>How It Works</p></li>
        <li><p className="hover:text-[#FF790C] transition-colors cursor-pointer text-center md:text-left" tabIndex={0}>Users</p></li>
        <li><p className="hover:text-[#FF790C] transition-colors cursor-pointer text-center md:text-left" tabIndex={0}>FAQs / Help</p></li>
        <li>
          <div className="flex gap-1 w-full md:flex-row md:gap-1 md:w-auto md:mt-0 justify-center md:justify-end mt-2 ">
            <Link to="/login">
              <button className="btn border mx-5 border-white text-white bg-transparent hover:bg-[#0F172A]  px-7 w-full md:w-auto" aria-label="Login" style={{borderRadius:'20px'}}>Log In</button>
            </Link>
            <Link to="/signup">
              <button className="btn mx-5 text-white bg-[#FF790C] hover:bg-[#FF790C] w-full px-7 md:w-auto" aria-label="Sign Up" style={{borderRadius:'20px'}}>Sign Up</button>
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
