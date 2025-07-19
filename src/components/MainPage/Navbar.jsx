import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="flex   flex-row md:flex-row items-center justify-between  text-white p-4 w-full" style={{backgroundColor:'#0F172A'}}>
      <p className="mb-2 md:mb-0 text-2xl font-bold ">GIGUPP</p>
      <div className="flex flex-row md:flex-row items-center gap-2 md:gap-4">
        <p className="hover:text-amber-500 transition-colors cursor-pointer">Browse Gigs</p>
        <p className="hover:text-amber-500 transition-colors cursor-pointer">How it Works</p>
        <p className="hover:text-amber-500 transition-colors cursor-pointer">Users</p>
        <p className="hover:text-amber-500 transition-colors cursor-pointer">FAQS/Help</p>
      </div>
      <p className="flex gap-2 mt-2 md:mt-0">
        <Link to="/login" >
        <button className="btn border border-white text-white bg-transparent hover:bg-gray-700">Login</button>
        </Link>
         <Link to="/signup" >
        <button className="btn text-white bg-amber-500 hover:bg-amber-600">SignUp</button>
        </Link>
      </p>
    </nav>
  )
}

export default Navbar
