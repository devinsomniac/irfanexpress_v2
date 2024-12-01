import React from 'react'
import SearchForm from './SearchForm'
const Hero = () => {
  return (
    <div className='py-8 flex justify-center items-center flex-col '>
        <div className='mt-12 font-bold flex flex-col justify-start items-center md:items-start lg:items-start text-blue-950 px-4'>
            <h1 className='text-2xl md:text-7xl text-left'>Find The  <span className='text-[#fffbcc] bg-blue-950 p-1 rounded-lg'>Best Destination .</span></h1>
            <h2 className='text-xl md:text-6xl text-left mt-2 md:mt-12'>Get Your  <span className='text-[#fffbcc] bg-blue-950 p-1 rounded-lg'>Dream Travel Adventure !</span></h2>
        </div>
        <div >
            <SearchForm/>
        </div>
    </div>
  )
}

export default Hero