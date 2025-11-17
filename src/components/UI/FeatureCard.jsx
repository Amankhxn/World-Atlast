import React from 'react'

const FeatureCard = ({feature}) => {
    return (
        <div className="feautureCard border backdrop-blur-sm  cursor-pointer ">
            <h1 className='text-xl text-blue-400'>{feature.title}</h1>
            <p className='text-sm '>{feature.description}</p>
        </div>
    )
}

export default FeatureCard
