import React from 'react'
import TextField from '../Components/TextField'
import Label from '../Components/Label'

const Product = () => {
    return (
        <div className='max-w-2xl mx-auto shadow-lg rounded-lg p-8 bg-white'>

            <h1 className="text-2xl font-bold mb-8">
                Product Page
            </h1>

            <div className="space-y-6">

                <div className='flex items-center'>
                    <div className="w-44">
                        <Label text="Product Name" />
                    </div>
                    <div className="flex-1">
                        <TextField text="Enter product name" />
                    </div>
                </div>

                <div className='flex items-center'>
                    <div className="w-44">
                        <Label text="Product Price" />
                    </div>
                    <div className="flex-1">
                        <TextField text="Enter product price" />
                    </div>
                </div>

                <div className='flex items-center'>
                    <div className="w-44">
                        <Label text="Product Description" />
                    </div>
                    <div className="flex-1">
                        <TextField text="Enter product description" />
                    </div>
                </div>

                <div className='flex items-center'>
                    <div className="w-44">
                        <Label text="Product Category" />
                    </div>
                    <div className="flex-1">
                        <TextField text="Enter product category" />
                    </div>
                </div>

                <div className='flex items-center'>
                    <div className="w-44">
                        <Label text="Product Brand" />
                    </div>
                    <div className="flex-1">
                        <TextField text="Enter product brand" />
                    </div>
                </div>

                {/* Button */}
                <div className="text-right pt-4">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                        Add Product
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Product