import React from 'react'
import { auth } from '@/auth'
import { db } from '@/app/Database'
import { trips, users } from '@/app/Database/schema'
import { eq } from 'drizzle-orm'
const page = async() => {
    const session = await auth()
    const userId = session?.user?.id
    if (!userId) {
        throw new Error('User email is not available in the session.');
    }
    const responseFromDb = await db
        .select({ tripId: trips.tripId })
        .from(trips)
        .innerJoin(users, eq(trips.userId, users.id)) 
        .where(eq(users.id, userId))

        console.log(responseFromDb)
    return (
        <div>
            <div className='flex flex-col justify-center items-center gap-2 p-10'>
                <h1 className='text-4xl'>{session?.user?.name}</h1>
            </div>
        </div>
    )
}

export default page
