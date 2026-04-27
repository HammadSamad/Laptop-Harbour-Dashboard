import React from 'react'

const Card = ({ title, count }) => {
    return (
        <div className='bg-blend-saturation p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow-transform duration-300 hover:scale-102 cursor-pointer w-full'>
            <h4 className='font-bold text-lg'>
                {title}
            </h4>
            <p className='text-2xl font-bold'>{count}</p>
        </div>
    )
}

export default Card