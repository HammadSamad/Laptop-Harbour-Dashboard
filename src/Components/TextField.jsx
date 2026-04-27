import React from 'react'

const TextField = ({text}) => {
    return (
        <div>    
            <input className="border-0 rounded focus:outline-none focus:ring-2  focus:ring-blue-500 p-2 transition-outline duration-400" type="text" placeholder={text} />
        </div>
    )
}

export default TextField