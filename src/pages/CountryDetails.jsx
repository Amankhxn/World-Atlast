import React, { useEffect, useState, useTransition } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { getCountryDetails } from '../api/postApi';

const CountryDetails = () => {
    const params = useParams();
    const [isPending, startTransition] = useTransition();
    const [country, setCountry] = useState();

    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryDetails(params.id);
            setCountry(res.data[0]);

        })
    }, [])

    if (isPending) return <h1>Loading...</h1>

    return (

        <div className=' backdrop-blur-xs  mt-8 spacing'>
            {
                country && (
                    <>
                        <div className="mainCountry flex flex-wrap flex-col md:flex-row p-5 gap-10 relative  ">
                            <div className="lCountry w-full  lg:w-[25%]  flex items-center justify-center">
                                <img src={country.flags.svg} alt={country.flags.alt} className='h-[250px] rounded-2xl' />
                            </div>
                            <div className="rCountry py-10 w-full lg:w-[60%]">
                                <h1 className='text-3xl font-semibold'>{country.name.official}</h1>
                                <div className='flex flex-col gap-6 mt-8'>


                                    <p className='text-white text-md'>Native name: <span className='text-gray-500'>{country.name.nativeName[Object.keys(country.name.nativeName)[0]].common}</span></p>
                                    <p className='text-white text-md'> Population : <span className='text-gray-500'>{country.population}</span></p>
                                    <p className='text-white text-md'> Region :  <span className='text-gray-500'>{country.region}</span></p>
                                    <p className='text-white text-md'> Sub Region :  <span className='text-gray-500'>{country.subregion}</span></p>
                                    <p className='text-white text-md'> Capital :  <span className='text-gray-500'>{country.capital}</span></p>
                                    <p className='text-white text-md'> Currencies : <span className='text-gray-500'>{country.currencies[Object.keys(country.currencies)[0]].name}</span></p>
                                    <p className='text-white text-md'> Languages : <span className='text-gray-500'>{country.languages[Object.keys(country.languages)[0]]}</span></p>
                                </div>

                                <NavLink to={"/country"}>
                                    <button className='btn absolute bottom-0 right-0 w-[150px]'>Go Back</button>
                                </NavLink>

                            </div>
                        </div>
                    </>
                )
            }

        </div>
    )
}

export default CountryDetails
