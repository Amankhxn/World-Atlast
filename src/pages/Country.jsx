import React, { useEffect, useState, useTransition } from 'react'
import { getCountryData } from '../api/postApi'
import CountryCard from '../components/UI/CountryCard';

const Country = () => {

  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      console.log(res.data);
      setCountries(res.data);
    })
  }, [])

  const searchCountryField = (country) => {

    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;

  }

  const selectRegion = (country) => {
    if (filter === "All") return country;
    return country.region === filter;
  }

  const SearchCountry = countries.filter((currCountry) => searchCountryField(currCountry) && selectRegion(currCountry));

  const SortCountry = (value) => {
    const Sort = [...countries].sort((a, b) => {
      return value === "asc" ? a.name.common.localeCompare(b.name.common) : b.name.common.localeCompare(a.name.common)
    });

    setCountries(Sort);
  }


  if (isPending) return <h1>Loading...</h1>

  return (
    <section className='spacing'>
      <div className="features mt-8 h-20 flex items-center p-6 justify-between">

        <input type="text" placeholder='Search..' value={search} onChange={(e) => setSearch(e.target.value)} className='border px-4 py-2 min-w-[200px] w-[25%] rounded-xl' />

        <div className="btns hidden md:flex gap-4">
          <button className='filterBtn' onClick={() => SortCountry("asc")}>Asc</button>
          <button className='filterBtn' onClick={() => SortCountry("dsc")}>Dsc</button>
        </div>

        <select
          className="border px-4 py-2 rounded-xl bg-black"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="Antarctic">Antarctic</option>
        </select>

      </div>
      <div className='CountryCards flex flex-wrap gap-20 justify-around mt-8'>

        {
          SearchCountry.map((country, index) => {
            return <CountryCard key={index} country={country} />
          })
        }
      </div>
    </section>
  )
}

export default Country
