import Image from 'next/image';
import React from 'react';
import { PiUsersFill } from 'react-icons/pi';

type FamousPlaceType = {
  id: number;
  name: string;
  Days: number;
  group: number;
  type: string;
  image: string;
  tag: string;
};

const FamousCard = ({ place }: { place: FamousPlaceType }) => {
  return (
    <div className='p-8 shadow-2xl rounded-3xl h-[350px]  w-full '>
      <div className='h-[200px] flex justify-center items-center'>
        <Image src={place.image} alt='offer Image' height={200} width={200} className='object-cover h-full w-full shadow-xl rounded-2xl overflow-hidden' loading='lazy' />
      </div>
      <p className='text-sm mt-2 text-gray-700 font-bold'>{place.type}</p>
      <div className='flex justify-between'>
        <h2 className='text-2xl font-bold'>{place.name}</h2>
        <div className='flex items-center gap-1'>
          <PiUsersFill />
          {place.group}
        </div>
      </div>

      <p className='text-xs md:text-sm font-bold text-gray-600'>{place.tag}</p>
      <p className='text-xs md:text-sm font-bold text-gray-600'>Days : {place.Days}</p>
    </div>
  )
};

export default FamousCard;