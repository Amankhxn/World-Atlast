import React from 'react'

const FactCard = ({ fact }) => {
    return (
        <div className="card  ">
            <img src={fact.flag} alt="" className='w-full h-[130px] object-cover rounded flex items-center justify-center 
                    ' />
            <p className='text-lg font-semibold' >{fact.title}</p>
            <p className='text-mg'> {fact.facts}</p>
        </div>
    )
}

export default FactCard
