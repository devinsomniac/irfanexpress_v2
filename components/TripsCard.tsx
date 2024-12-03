import React from 'react';
import Image from 'next/image';
import Travel from './../public/profileTravel.jpg'

interface TripCardProps {
  trip: {
    tripData: {
      travelers: string;
      budget: string;
      tripName: string;
      location: string;
    };
  };
}

const TripsCard = ({ trip }: TripCardProps) => {
  return (
    <div className='py-4 border border-black border-r-4 rounded-3xl bg-slate-50 hover:scale-105 hover:transition-transform'>
      <div className='w-full flex justify-center items-center'>
      <Image src={Travel} alt='Travel' height={80} width={320} className='rounded-lg'/>
      </div>
      <div className='mx-10'>
      <h2 className='text-xl font-semibold'>{trip.tripData.tripName}</h2>
      <p className='text-gray-600'>{trip.tripData.location}</p>
        <p><strong>Travelers:</strong> {trip.tripData.travelers}</p>
      </div>
    </div>
  );
};

export default TripsCard;
