import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const About = () => {
  return (
    <div>
      <h2 className='text-center text-4xl'>Why Shall You Trust Us ?</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 p-8 gap-4'>
        <div className='md:ml-16 shadow-lg'>
            <h2 className='text-6xl text-orange-600 mb-2'>Irfan Express</h2>
            <p className='mb-2'>
            It is a trusted travel agency that has been serving customers for over 10 years by delivering personalized itineraries tailored to meet each traveler’s unique needs. Whether it's booking flight tickets, train tickets, or arranging hotel accommodations, we ensure that every detail of your trip is taken care of, so you can enjoy a seamless and stress-free experience. Our services extend to every country, offering global travel solutions with a range of options to suit different budgets and tastes. Our dedicated team works closely with customers to create travel plans that match their preferences, and with a decade of experience in the industry, Irfan Express is committed to providing exceptional service and making your journey as enjoyable and memorable as possible.
            </p>
            <Button>Learn More</Button>
        </div>
        <div className='flex justify-end md:mr-16'>
        <Image src={'/AboutImage.jpg'} height={450} width={500} alt='About' className='rounded-3xl shadow-lg hover:scale-105 hover:transition-transform'/>
        </div>
      </div>
    </div>
  )
}

export default About
