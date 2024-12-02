import React from 'react'
import { auth } from '@/auth'
import { db as postDb} from '@/app/Database'
import { trips, users } from '@/app/Database/schema'
import { eq } from 'drizzle-orm'
import TripsCard from '@/components/TripsCard'
import { collection, Firestore, getDoc, query, where } from 'firebase/firestore'
import { db as fireDb} from '@/Services/FirebaseConfig'
const page = async () => {
    const session = await auth()
    const userId = session?.user?.id
    if (!userId) {
        throw new Error('User email is not available in the session.');
    }
    const responseFromDb = await postDb
        .select({ tripId: trips.tripId })
        .from(trips)
        .innerJoin(users, eq(trips.userId, users.id))
        .where(eq(users.id, userId))

    const tripIds = responseFromDb.map((trip) => (trip.tripId))
    console.log(tripIds)
    let tripData = []
    if (tripIds.length > 0) {
        const tripsQuery = query(
            collection(fireDb, 'AITrips'),
            where('id', 'in', tripIds) 
        )
        
    } 
      

    console.log(responseFromDb)
    return (
        <div className='mx-12 p-14'>
            <div>
                <h1 className='text-4xl font-bold text-center md:text-left'>My Trips</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3'>
            {responseFromDb.map((trip, index) => (
                <div key={index} className='flex justify-center items-center'>
                    <TripsCard trip={trip} />
                </div>

            ))}
            </div>
            
        </div>
    )
}

export default page
