'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import TripDaysCard from '@/components/TripDaysCard';

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

const Page: React.FC = () => {
  const searchParams = useSearchParams();
  const pageData = searchParams.get('pageData');
  
  if (!pageData) {
    return <div>Loading...</div>;
  }

  let parsedData: { tripName: string; notes: string; days: Day[] };
  try {
    parsedData = JSON.parse(decodeURIComponent(pageData));
  } catch {
    parsedData = pageData as any; 
  }

  return (
    <div className='m-8'>
      <div className='p-10 bg-[linear-gradient(90deg,_rgba(131,58,180,1)_0%,_rgba(253,29,29,1)_50%,_rgba(252,176,69,1)_100%)] m-3 rounded-2xl'>
        <h2 className='font-bold text-white text-center text-3xl'>{parsedData.tripName}</h2>
      </div>
      <p className='font-bold text-gray-600 m-2'>* {parsedData.notes}</p>
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
