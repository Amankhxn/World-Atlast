import React from 'react'
import { Facts, features } from '../api/constants'
import FeatureCard from '../components/UI/FeatureCard';
import FactCard from '../components/UI/FactCard';

const About = () => {
  return (
    <div className='mt-8 flex flex-col gap-20 spacing'>
      <div className="about1 ">
        <h1 className='text-5xl text-center'>About<span className='text-blue-400 font-semibold'> World AtLast</span> </h1>
        <p className='text-center mt-6 text-xl'>World Atlas is designed to help you explore the world with ease. Our platform brings together essential information about countries, cultures, and global facts in a clean and interactive way. Whether you're learning, researching, or simply curious, World Atlas helps you discover the beauty, diversity, and history of every nation through a modern and engaging experience.</p>
      </div>


      <div className="features flex flex-col gap-10">
        <h1 className='text-4xl font-semibold text-center'>Features</h1>
        <div className="featureCards grid grid-cols-2 gap-10 ">


          {
            features.map((features, index) => {

              return <FeatureCard key={index} feature={features} />

            })
          }

        </div>

      </div>


      <div className="developer flex justify-center items-center ">
        <div className="left-dev w-[50%] flex justify-center items-center ">
          <img src="/images/Developer.png" alt="developer" className='rounded-full h-[300px] ' />
        </div>
        <div className="right-dev w-[50%] flex flex-col gap-14">
          <h1 className='text-4xl font-semibold'>Meet the Developer</h1>
          <p>Hi! I’m Aman, the developer behind World Atlas.
            I love creating clean, modern, and useful web applications. World Atlas was built to help people explore countries, learn interesting facts, and enjoy a smooth UI experience while using the website.
            <br />
            I enjoy learning new frameworks, improving my design skills, and building projects that solve real problems in a simple and beautiful way.</p>
        </div>
      </div>


      <h2 className='text-center text-4xl font-semibold'>Here are the Interesting Facts that we are Proud of!</h2>
      <div className="fact-cards flex flex-wrap gap-20 justify-around">

        {

          Facts.map((fact, index) => {
            return <FactCard key={index} fact={fact} />
          })
        }

      </div>

    </div>
  )
}

export default About
