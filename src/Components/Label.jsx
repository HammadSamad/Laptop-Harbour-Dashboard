import React from 'react'

const Label = ({ text }) => {
  return (
    <div>
        <label className="text-md font-medium text-gray-700">{text}</label>
    </div>
  )
}

export default Label