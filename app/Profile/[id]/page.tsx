import Image from 'next/image'
import React from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { auth } from '@/auth'
import { db } from '@/lib/db'
import { travelPlan } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'
import ProfilePlanCard from '@/components/ProfilePlanCard'

// type dataType = {
//   planId: string; 
//   destination: string; 
//   groupSize: number; 
//   budget: string; 
//   duration: number; 
//   createdAt: Date; }[]

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id
  const session = await auth()
  const data = await db
  .select()
  .from(travelPlan)
  .where(eq(travelPlan.userId, id));
  console.log(data)
  return (
    <div className='min-h-[calc(100vh-120px)]'>
      <div className='h-[250px] md:h-[350px] w-full relative overflow-hidden'>
        <Image src={'/RandomImage/Image5.jpg'} alt='cover photo' objectFit='cover' layout='fill' className='object-fill w-full' />
      </div>
      <div className='h-[100px] w-[100px] md:h-[200px] md:w-[200px] rounded-full absolute top-[16rem] md:top-80 left-40 border-[5px] border-gray-500 overflow-hidden'>
        <Image src={session?.user?.image || '/RandomImage/Image4.jpg'} alt='pro pic' height={200} width={300} className='rounded-full h-[100px] md:h-[200px] w-[100px] md:w-[200px]' />
      </div>

      <div className='p-10 grid grid-cols-1 md:grid-cols-3 md:mt-20 gap-4'>
        <div className='col-span-1 p-4 rounded-3xl shadow-2xl h-[300px] flex flex-col border'>
        <h2 className='font-bold text-blue-700 text-4xl'>Profile</h2>
        <Separator className='w-[180px] bg-orange-600 h-[6px] rounded-full my-2' />
            <h2 className='text-2xl '>{session?.user?.name}</h2>
            <h3 className='font-bold text-sm text-gray-600'>@{session?.user?.email}</h3>
            <form>
            <label>Enter Your Bio :</label>
            <Textarea />
            <Button className='bg-yellow-400 text-black hover:bg-orange-600 my-2'>Save Bio</Button>
            </form>
        </div>
        <div className='col-span-2 p-4 rounded-3xl shadow-2xl border'>
          <h2 className='font-bold text-blue-700 text-4xl'>You Adventure Plans Are Below:</h2>
          <Separator className='w-[180px] bg-orange-600 h-[6px] rounded-full my-2' />
          <ProfilePlanCard data={data} />
        </div>
      </div>
    </div>
  )
}

export default page