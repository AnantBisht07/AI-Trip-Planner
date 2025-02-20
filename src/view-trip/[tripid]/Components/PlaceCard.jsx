import React from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const PlaceCard = ({ place, randomImgUrl}) => {
  // console.log('place:', place);
  return (
    <Link 
                to={
                  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place?.place_name)}`
                }
                target="_blank"
              >
    <div className='shadow-md border rounded-xl p-3 mt-2 flex gap-4 hover:scale-105 transition-all hover:shadow-lg cursor-pointer'>
      <img src={randomImgUrl} alt=""className='w-[100px] h-100 rounded-xl' />

      <div>
      <h2 className='font-bold text-lg'>{place?.place_name}</h2>
      <p className='text-sm text-gray-500'>{place?.place_details}</p>
      <h2 className='mt-2'>{place?.ticket_pricing}</h2>

      
      </div>
    </div>
    </Link>
  )
}

export default PlaceCard
