import React from 'react';
import TripDaysCard from '@/components/TripDaysCard';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/Services/FirebaseConfig';

interface Plan {
  time: string;
  placeName: string;
  placeDetails: string;
  ticketPricing: string;
  transportation: string;
  speciality: string;
}

interface Day {
  day: string;
  theme: string;
  plan: Plan[];
  food: string;
  clothing: string;
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  console.log(id);

  const docRef = doc(db, 'AITrips', id as string);
  const docSnap = await getDoc(docRef);

  let parsedData: { tripName: string; notes: string; days: Day[] } | null = null;

  if (docSnap.exists()) {
    const data = docSnap.data();
    try {
      parsedData = JSON.parse(data.tripData);
    } catch (error) {
      console.error('Error parsing tripData:', error);
    }
  } else {
    console.log('No such document!');
  }

  if (!parsedData) {
    return <div>Error loading trip data</div>;
  }

  return (
    <div className="m-8">
      <div className="p-10 bg-[linear-gradient(90deg,_rgba(131,58,180,1)_0%,_rgba(253,29,29,1)_50%,_rgba(252,176,69,1)_100%)] m-3 rounded-2xl">
        <h2 className="font-bold text-white text-center text-3xl">{parsedData.tripName}</h2>
      </div>
      <p className="font-bold text-gray-600 m-2">* {parsedData.notes}</p>
      <div>
        {parsedData.days.map((day: Day, index: number) => (
          <div key={index}>
            <TripDaysCard day={day} />
          </div>
        ))}
      </div>
      {/* <pre>{JSON.stringify(parsedData, null, 2)}</pre> */}
    </div>
  );
};

export default Page;
