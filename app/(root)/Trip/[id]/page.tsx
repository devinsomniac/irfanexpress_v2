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
  const docRef = doc(db,"AITrips",id)
  console.log(docRef)
  const docSnap = await getDoc(docRef)
  let tripdata
  if(docSnap.exists()){
    tripdata = docSnap.data().tripData
    console.log(tripdata)
  }else{
    console.log("Not Found")
  }


  return (
    <div className="m-8">
      <div className="p-10 bg-[linear-gradient(90deg,_rgba(131,58,180,1)_0%,_rgba(253,29,29,1)_50%,_rgba(252,176,69,1)_100%)] m-3 rounded-2xl">
        <h2 className="font-bold text-white text-center text-3xl">{tripdata.tripName}</h2>
      </div>
      <p className="font-bold text-gray-600 m-2">* {tripdata.notes}</p>
      <div>
        {tripdata.days.map((day: Day, index: number) => (
          <div key={index}>
            <TripDaysCard day={day} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
