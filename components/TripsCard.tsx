import React from 'react'

const TripsCard = ({trip} : {trip : string}) => {
  return (
    <div className='p-8'>
      {trip.tripId}
    </div>
  )
}

export default TripsCard
