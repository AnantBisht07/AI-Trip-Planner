import { Button } from '@/components/ui/button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteTrip from './DeleteTrip';




const UserTripsDetails = ({ tripData }) => {

    const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/view-trip/${tripData?.id}`)} className='cursor-pointer'>
       <div>
      <h2 className='text-2xl mt-2 mb-1 font-bold text-blue-800'>{tripData?.userSelection?.location?.slice(0,20)}...</h2>
      <h3> {tripData?.userSelection?.days} days trip with {tripData?.userSelection?.budget} budget</h3>
      <h3 className='text-gray-500'>Travel Compnion: {tripData?.userSelection?.travelCompanion || 'Not specified'}</h3>
      </div> 
      <Button className="mt-2 bg-blue-950"><DeleteTrip tripData={tripData} /></Button>

    </div>
  )
}

export default UserTripsDetails
