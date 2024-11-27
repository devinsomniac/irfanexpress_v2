'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
const Page = () => {
    const searchParams = useSearchParams();
    const pageData = searchParams.get('pageData');
    if (!pageData) {
        return <div>Loading...</div>;
      }
    
      // Parse the JSON if it was sent as JSON data
      let parsedData;
      try {
        parsedData = JSON.parse(decodeURIComponent(pageData));
      } catch {
        parsedData = pageData; // If parsing fails, use raw data
      }
    
      return (
        <div className='m-8'>
            <div className=' p-10 bg-[linear-gradient(90deg,_rgba(131,58,180,1)_0%,_rgba(253,29,29,1)_50%,_rgba(252,176,69,1)_100%)] m-3 rounded-2xl'>
                <h2 className='font-bold text-white text-center text-3xl'>{parsedData.tripName}</h2>
            </div>
            {/* <h3>{parsedData.}</h3> */}
          <pre>{JSON.stringify(parsedData, null, 2)}</pre>
        </div>
      );
    };
    
    export default Page;