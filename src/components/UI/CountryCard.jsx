import React from 'react'
import { NavLink } from 'react-router-dom';

const CountryCard = ({ country }) => {
    const { region, population, capital, name, flags } = country;
    return (
        <div className='card '>
            <div>

                <img src={flags.svg} alt="" className='w-full h-[130px] object-cover rounded flex items-center justify-center' />
                <h1 className='text-2xl  font-semibold text-blue-400 mt-2'> {name.common.length > 15 ? name.common.slice(0, 15) + "..." : name.common}</h1>
            </div>
            <div>
                <p className='text-white text-md'> Capital : <span className='text-gray-500'>{capital[0]}</span></p>
                <p className='text-white text-md'> Region : <span className='text-gray-500'>{region}</span></p>
                <p className='text-white text-md'>  Population :  <span className='text-gray-500'>{population}</span></p>
            </div>

            <NavLink to={`/country/${name.common}`} >
                <button className='btn w-full'>Read more</button>
            </NavLink>
        </div>
    )
}

export default CountryCard
