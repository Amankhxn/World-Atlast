import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Header = () => {

  const [isOPen, setIsOpen] = useState(false);


  return (
    <header className='  bg-[#0B0F19]/90 backdrop-blur-md shadow-lg relative z-50 overflow-hidden' >
      <div className='header px-4 text-xl flex justify-between  h-18 items-center relative  '>

        <NavLink to='/'>
          <h2 className='text-3xl xs:text-blue-600 sm:text-red-400 md:text-yellow-400 lg:text-green-400 font-bold' >World Atlas</h2>
        </NavLink>

        <nav>
          <ul className='navList max-lg:hidden lg:block lg:flex gap-8 '>
            <li><NavLink to='/' className='hover:text-blue-400 transition-all duration-'>Home</NavLink></li>
            <li><NavLink to='/about' className='hover:text-blue-400 transition-all duration-'>About</NavLink></li>
            <li><NavLink to='/country' className='hover:text-blue-400 transition-all duration-'>Country</NavLink></li>
            <li><NavLink to='/contact' className='hover:text-blue-400 transition-all duration-'>Contact</NavLink></li>
          </ul>
        </nav>

        {
          isOPen &&
          <nav className="fixed top-0 right-0 w-1/2 h-screen bg-[#0B0F19] flex flex-col justify-center items-center gap-6 text-2xl z-50 lg:hidden">
            <div className="closeIcon absolute top-10 left-10">
              <IoMdClose onClick={() => setIsOpen(false)} size={35} />
            </div>
            <ul className="mob_navList  flex flex-col gap-6">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/country">Country</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </nav>
        }





        <div className="hamburger absolute top-5 right-5 cursor-pointer lg:hidden">
          <GiHamburgerMenu onClick={() => setIsOpen(true)} size={30} />
        </div>
      </div>
    </header>
  )
}

export default Header
