import React from 'react'
import { RiScrollToBottomFill } from "react-icons/ri";
import HeroImageUrl from '@/public/HeroImages/HeroImagesArray'
const Hero = () => {
  const randomImage = HeroImageUrl[1];
  return (
    <div className='py-8 flex justify-center items-center flex-col min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-60px)] '
    style={{
      backgroundImage: `url(${randomImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '95vh',
    }}
    >
        <div className='md:mt-8 font-bold flex flex-col text-[#ffe900] px-4'>
            <h1 className='text-xl  mb-2 md:text-6xl text-left'>Create a <span className='text-[#fffbcc] bg-blue-950 p-1 rounded-lg'>personalized itinerary</span>  </h1>
            <h2 className='text-xl md:text-4xl text-left mt-2 md:mt-12'><span className='text-[#fffbcc] bg-blue-950 p-1 rounded-lg'>for your <span className='text-[#ffe900]'>dream vacation.</span> </span></h2>
            <h3 className='text-xl md:text-2xl text-left mt-2 md:mt-12 text-[#ffe900]'><span className='bg-blue-950 p-1'>With Us.</span></h3>
        </div>
        <div className='h-[250px] flex justify-center items-center'>
        <RiScrollToBottomFill  className='text-yellow-400 font-medium text-4xl md:text-7xl border rounded-full animate-ping'/>
        </div>
    </div>
  )
}

export default Hero