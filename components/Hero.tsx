import React from 'react'
import SearchForm from './SearchForm'
import HeroImageUrl from '@/public/HeroImages/HeroImagesArray'
const Hero = () => {
  const randomImage = HeroImageUrl[1];
  return (
    <div className='py-8 flex justify-center items-center flex-col '
    style={{
      backgroundImage: `url(${randomImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '95vh',
    }}
    >
        <div className='md:mt-8 font-bold flex flex-col text-[#ffe900] px-4'>
            <h1 className='text-2xl  mb-2 md:text-6xl text-left'>Create a <span className='text-[#fffbcc] bg-blue-950 p-1 rounded-lg'>personalized itinerary</span>  </h1>
            <h2 className='text-xl md:text-4xl text-right mt-2 md:mt-12'><span className='text-[#fffbcc] bg-blue-950 p-1 rounded-lg'>for your <span className='text-[#ffe900]'>dream vacation.</span> </span></h2>
        </div>
        <div >
            <SearchForm/>
        </div>
    </div>
  )
}

export default Hero