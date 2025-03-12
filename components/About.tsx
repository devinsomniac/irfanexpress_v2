import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <div>
      <h2 className='text-center text-4xl  md:text-7xl'>Why Shall You Trust Us ?</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 py-8 p-7 md:p-6 gap-4'>
        <div className='flex justify-end '>
          <Image src={'/AboutImage.jpg'} height={450} width={500} alt='About' className='object-cover h-[450px] rounded-3xl shadow-lg hover:scale-105 hover:transition-transform' />
        </div>
        <div className=' shadow-lg p-8 rounded-3xl border'>
          <h2 className='text-6xl text-orange-600 mb-2'>Irfan Express</h2>
          <p className='mb-2 line-clamp-[10]'>
            It is a trusted travel agency that has been serving customers for over 10 years by delivering personalized itineraries tailored to meet each travelers unique needs. Whether it is booking flight tickets, train tickets, or arranging hotel accommodations, we ensure that every detail of your trip is taken care of, so you can enjoy a seamless and stress-free experience. Our services extend to every country, offering global travel solutions with a range of options to suit different budgets and tastes. Our dedicated team works closely with customers to create travel plans that match their preferences, and with a decade of experience in the industry, Irfan Express is committed to providing exceptional service and making your journey as enjoyable and memorable as possible.
          </p>
          <Link href={'/About'}>
          <Button>Learn More</Button>
          </Link>
        </div>
        <div className='flex justify-end md:mr-16'>
          <Image src={'/AboutImage2.jpg'} height={450} width={500} alt='About' className='object-cover h-[450px] rounded-3xl shadow-lg hover:scale-105 hover:transition-transform' />
        </div>
      </div>
      <div className='flex justify-center items-center mb-6 p-8'>
        <div className='grid grid-cols-2 grid-rows-2 gap-2 md:text-4xl'>
          <div className='flex flex-col items-center justify-center border border-orange-500 rounded-2xl p-3'>
            <h2 className='font-bold'>160+</h2>
            <p className='text-center'>Countries</p>
          </div>
          <div className='flex flex-col items-center justify-center border border-orange-500 rounded-2xl p-3'>
            <h2 className='font-bold'>20+</h2>
            <p className='text-center'>Years Experience</p>
          </div>
          <div className='flex flex-col items-center justify-center border border-orange-500 rounded-2xl p-3'>
            <h2 className='font-bold'>30+</h2>
            <p className='text-center'>Umrah/Hajj</p>
          </div>
          <div className='flex flex-col items-center justify-center border border-orange-500 rounded-2xl p-3'>
            <h2 className='font-bold'>24/7</h2>
            <p className='text-center'>Contact Service</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
