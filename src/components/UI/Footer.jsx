import React from 'react'
import { upperFooter } from '../../api/constants';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className=' bg-[#0B0F19]/90 backdrop-blur-md shadow-lg'>
      <div className='w-[80%] mx-auto mt-8'>
        <div className="upper_footer flex justify-between flex-wrap">

          {
            upperFooter.map((data) => {
              const { title, description, icon: Icon } = data;
              return (
                <div className="footerInfo flex  w-[30%] items-center gap-6 p-2" key={data.id}>
                  <div >

                    <Icon className='text-blue-400 ' size={28} />
                  </div>
                  <div className="detail">
                    <h2>{title}</h2>
                    <p className='text-gray-400 text-sm'>{description}</p>
                  </div>
                </div>
              )
            })
          }

        </div>

      </div>
      <div className="lower_footer flex  justify-between bg-gray-700 py-2 px-40 " >
      

          <div className="left-footer">
            <p className='text-sm'>Copyright @ 2025. All Rights Reserved <span className='text-blue-400'> KhanAman</span></p>
          </div>
          <div className="right-footer">
            <ul className='flex gap-8 text-sm '>
              <li><NavLink>Home</NavLink></li>
              <li><NavLink>Social</NavLink></li>
              <li><NavLink>Contact</NavLink></li>
            </ul>
          </div>
      
      </div>
    </div>
  )
}

export default Footer
