// import React from 'react';
// import { auth } from '@/auth';
// import { db as postDb } from '@/app/Database';
// import { trips, users } from '@/app/Database/schema';
// import { eq } from 'drizzle-orm';
// import TripsCard from '@/components/TripsCard';
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import { db as fireDb } from '@/Services/FirebaseConfig';
// import Link from 'next/link';

// interface TripData {
//   id: string;
//   tripData: {
//     travelers: string;
//     budget: string;
//     tripName: string;
//     location: string;
//   };
// }

// const page = async () => {
//   const session = await auth();
//   const userId = session?.user?.id;
//   if (!userId) {
//     throw new Error('User email is not available in the session.');
//   }

//   const responseFromDb = await postDb
//     .select({ tripId: trips.tripId })
//     .from(trips)
//     .innerJoin(users, eq(trips.userId, users.id))
//     .where(eq(users.id, userId));

//   const tripIds = responseFromDb.map((trip) => trip.tripId);
//   console.log("Trip Ids Are : ", tripIds);
  
//   let tripData: TripData[] = [];
//   if (tripIds.length > 0) {
//     const tripsQuery = query(
//       collection(fireDb, 'AITrips'),
//       where('__name__', 'in', tripIds)
//     );

//     const querySnapshot = await getDocs(tripsQuery);
//     tripData = querySnapshot.docs.map((doc) => ({
//       id: doc.id,
//       tripData: {
//         travelers: doc.data().tripData.travelers,
//         budget: doc.data().tripData.budget,
//         tripName: doc.data().tripData.tripName,
//         location: doc.data().tripData.location,
//       },
//     })) as TripData[];
//   }

//   console.log("The details are:", tripData[0]);

//   return (
//     <div className='mx-12 p-14'>
//       <div>
//         <h1 className='text-4xl font-bold text-center md:text-left'>My Trips</h1>
//       </div>
//       <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4'>
//         {tripData.map((trip, index) => (
          
//           <div key={index} className='flex justify-center items-center'>
//             <Link href={`/Trip/${trip.id}`}>
//             <TripsCard trip={trip} /> 
//             </Link>
//           </div>
          
//         ))}
//       </div>
//     </div>
//   );
// };

// export default page;
