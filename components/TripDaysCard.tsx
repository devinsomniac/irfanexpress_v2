import React from 'react';
import PlanCard from './PlanCard';

interface Day {
  day: string;
  theme: string;
  plan: Array<{
    time: string;
    placeName: string;
    placeDetails: string;
    ticketPricing: string;
    transportation: string;
    speciality: string;
  }>;
  food: string;
  clothing: string;
}

interface TripDaysCardProps {
  day: Day;
}

const TripDaysCard: React.FC<TripDaysCardProps> = ({ day }) => {
  
  return (
    <div className="day-card p-4 border-[2px] border-black m-2 rounded-3xl ">
      <h2 className='font-semibold text-2xl '>Day - {day.day}</h2>
      <h3 className='font-semibold text-xl mt-2 mb-2'>Theme -  {day.theme}</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
      {day.plan.map((plan, planIndex) => (
        <div key={planIndex} className="plan-card">
          <PlanCard plan={plan}/>
        </div>
      ))}
      </div>
      <div className="food-clothing-card">
        <h4>Food & Clothing</h4>
        <p><strong>*Food:</strong> {day.food}</p>
        <p><strong>*Clothing:</strong> {day.clothing}</p>
      </div>
    </div>
  );
};

export default TripDaysCard;
