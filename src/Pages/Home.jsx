import React from 'react'
import Card from '../Components/Card';

const Home = () => {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <Card title="Total Sales" count={1000} />
        <Card title="Total Orders" count={500} />
        <Card title="Total Customers" count={200} />
        <Card title="Total Products" count={150} />
        <Card title="Total Revenue" count={50000} />
        <Card title="Total Categories" count={20} />
        <Card title="Total Brands" count={10} />
        <Card title="Total Reviews" count={300} />
      </div>
    </>
  )
}

export default Home