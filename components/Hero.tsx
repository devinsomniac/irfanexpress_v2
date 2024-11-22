import React from 'react'
import Image from 'next/image'
import SearchForm from './SearchForm'
const Hero = () => {
  return (
    <div className='p-10 flex justify-center items-center flex-col bg-slate-100 h-[700px]'>
        <div className='font-bold flex flex-col justify-center items-center'>
            <h1 className='text-4xl '>Find The best <span className='text-orange-500'>destination</span> for you with us</h1>
            <h2 className='text-2xl '>Get Your <span className='text-orange-400'>Dream</span> Travel Adventure!</h2>
        </div>
        <div>
            <SearchForm/>
        </div>
        <Image src={"/Hero.png"} alt='Hero' width={1000} height={500} className='mt-24 w-full'/>
    </div>
  )
}

export default Hero