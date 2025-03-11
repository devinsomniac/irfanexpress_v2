import Image from 'next/image';
import React from 'react'
import { SlCalender } from "react-icons/sl";
import { LuUsers } from "react-icons/lu";
import Link from 'next/link';

type Data = {
  planId: string; 
  destination: string; 
  groupSize: number; 
  budget: string; 
  duration: number; 
  createdAt: Date; }[]

const ProfilePlanCard = ({data}:{data:Data}) => {
  console.log(data)
  return (
    <div className=' grid grid-cols-1 md:grid-cols-3 gap-3 md:p-8'>
        {data.map((plan,index) => (
          <Link href={`/travelPlan/${plan.planId}`} key={index}>
          <div key={index} className='flex flex-col rounded-3xl shadow-2xl border md:w-[350px]  p-4'>
            <div>
            <Image src={'/RandomImage/Image4.jpg'} alt='Travel Image' height={300} width={300} objectFit='cover' className='rounded-2xl'/>
            </div>
            <div className='p-2'>
              <h2 className='font-medium text-2xl text-orange-600'>{plan.destination}</h2>
              <h1>On <span className='text-blue-600 font-bold text-sm'>{plan.budget}</span> budget</h1>
            </div>
            <div className='flex justify-between items-center p-2'>
              <div className='flex gap-1 justify-center items-center'>
              <SlCalender />
              <p>{plan.duration} Days</p>
              </div>
              <div className='flex gap-1 justify-center items-center'>
              <LuUsers />
              <p>{plan.groupSize} People</p>
              </div>
            </div>
            <div className='text-xs text-gray-600 p-2'>
            <h1>Plan Id : {plan.planId}</h1>
            <h1>Created At : {plan.createdAt.toLocaleDateString()}</h1>
            </div>
          </div>
          </Link>
        ))}
    </div>
  )
}

export default ProfilePlanCard