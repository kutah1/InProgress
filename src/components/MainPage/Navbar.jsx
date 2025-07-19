import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between text-white p-4 w-full gap-4 md:gap-0" style={{backgroundColor:'#0F172A'}}>
      <div className="flex w-full md:w-auto items-center justify-between">
        <p className="mb-2 md:mb-0 text-2xl font-bold text-center w-full md:w-auto">GIGUPP</p>
        <button className="md:hidden text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>
      </div>
      <div className={`flex-col items-center gap-2 w-full md:flex md:flex-row md:items-center md:gap-4 md:w-auto ${menuOpen ? 'flex' : 'hidden'} md:!flex`}>
        <p className="hover:text-amber-500 transition-colors cursor-pointer text-center md:text-left">Browse Gigs</p>
        <p className="hover:text-amber-500 transition-colors cursor-pointer text-center md:text-left">How it Works</p>
        <p className="hover:text-amber-500 transition-colors cursor-pointer text-center md:text-left">Users</p>
        <p className="hover:text-amber-500 transition-colors cursor-pointer text-center md:text-left">FAQS/Help</p>
        <div className="flex flex-col gap-2 w-full md:flex-row md:gap-2 md:w-auto md:mt-0 justify-center md:justify-end mt-2 md:mt-0">
          <Link to="/login">
            <button className="btn border border-white text-white bg-transparent hover:bg-gray-700 w-full md:w-auto">Login</button>
          </Link>
          <Link to="/signup">
            <button className="btn text-white bg-amber-500 hover:bg-amber-600 w-full md:w-auto">SignUp</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
