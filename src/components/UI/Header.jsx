import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Header = () => {

  const [isMobile, setIsMobile] = useState(false);


  return (
    <header className='  bg-[#0B0F19]/90 backdrop-blur-md shadow-lg relative z-50 ' >
      <div className='header px-4 text-xl flex justify-between  h-18 items-center relative  '>

        <NavLink to='/'>
          <h2 className='text-3xl font-bold' >World Atlas</h2>
        </NavLink>

        <nav>
          <ul className='navList max-lg:hidden lg:flex gap-8 '>
            <li onClick={() => setIsMobile(false)}><NavLink to='/' className='hover:text-blue-400 transition-all duration-'>Home</NavLink></li>
            <li onClick={() => setIsMobile(false)}><NavLink to='/about' className='hover:text-blue-400 transition-all duration-'>About</NavLink></li>
            <li onClick={() => setIsMobile(false)}><NavLink to='/country' className='hover:text-blue-400 transition-all duration-'>Country</NavLink></li>
            <li onClick={() => setIsMobile(false)}><NavLink to='/contact' className='hover:text-blue-400 transition-all duration-'>Contact</NavLink></li>
          </ul>
        </nav>




        <nav
          className={`fixed top-0 right-0 w-[80%] max-w-sm h-screen bg-[#0B0F19]
                     flex flex-col justify-center items-center gap-6 text-2xl z-50 lg:hidden
                    transition-transform duration-500 ease-in-out
                     ${isMobile ? "translate-x-0" : "translate-x-full"}`}
        >



          <div className="closeIcon absolute top-10 left-10">
            <IoMdClose onClick={() => setIsMobile(false)} size={35} />
          </div>
          <ul className="mob_navList  flex flex-col gap-6">
            <li onClick={() => setIsMobile(false)}><NavLink to="/">Home</NavLink></li>
            <li onClick={() => setIsMobile(false)}><NavLink to="/about">About</NavLink></li>
            <li onClick={() => setIsMobile(false)}><NavLink to="/country">Country</NavLink></li>
            <li onClick={() => setIsMobile(false)}><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>




        <div className="hamburger absolute top-5 right-5 cursor-pointer lg:hidden">
          <GiHamburgerMenu onClick={() => setIsMobile(true)} size={30} />
        </div>
      </div>
    </header>
  )
}

export default Header
