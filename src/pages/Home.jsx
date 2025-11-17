import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Facts } from '../api/constants';
import FactCard from '../components/UI/FactCard';

const Home = () => {
  return (
    <div className='spacing'>
      <div className='home flex justify-between items-center '>
        <div className="left_home  w-[50%]">
          <h1 className=' md:text-3xl lg:text-4xl font-semibold '>Explore the world one, <span className='text-blue-400'>Country</span> at a time </h1>
          <p className='text-lg md:text-sm lg:text-lg'>Discover the history, culture and beauty of every nation. Sort, Search, and Filter through countries to find the details you need</p>
          <NavLink to='/country'>
            <button className='btn max-sm:text-xs md:text-sm lg:text-xl '>Start Exploring <FaLongArrowAltRight /> </button>
          </NavLink>
        </div>
        <div className="right_home   w-[50%] ">
          <img src="/images/globe.png" className='bg-transparent  w-full   drop-shadow-[0_0_35px_rgba(0,150,255,0.55) drop-shadow-[0_0_90px_rgba(0,120,255,0.35)] ' alt="" />
        </div>
      </div>
      <div className="facts flex flex-col gap-10">
        <h1 className='text-4xl font-semibold text-center md:text-3xl'>Here are the Interesting Facts that we are Proud of!</h1>

        <div className="fact-cards flex flex-wrap gap-20 justify-around ">

          {

            Facts.map((fact, index) => {
              return <FactCard key={index} fact={fact} />
            })
          }

        </div>
      </div>
    </div>

  )
}

export default Home
