import React from 'react'
import { RiScrollToBottomFill } from "react-icons/ri";
import { LuSparkles } from "react-icons/lu";

const Hero = () => {

  return (
    <div className='py-8 flex justify-center items-center flex-col min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-60px)] overflow-hidden '
    style={{
      backgroundImage: `url('/HeroBg.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '95vh',
    }}
    >
      <div className='w-full px-6 mt-36 md:mt-28 flex justify-center items-center'>
        <h1 className='text-white text-3xl md:text-6xl font-bold text-center'>
          Create your <span className='text-sky-400 font-bold md:text-blue-950 text-4xl md:text-8xl'>perfect travel</span> plan with us using cutting-edge <span className='text-4xl md:text-8xl text-sky-400'>AI!</span> 
        </h1>
      </div>
      <div className='w-full flex justify-center items-center '>
      <LuSparkles className='text-blue-700 text-4xl md:text-8xl animate-bounce' />
      </div>
        <div className='h-[250px] flex justify-center items-center'>
        <RiScrollToBottomFill  className='text-yellow-400 font-medium text-4xl md:text-7xl border rounded-full animate-ping'/>
        </div>
    </div>
  )
}

export default Hero