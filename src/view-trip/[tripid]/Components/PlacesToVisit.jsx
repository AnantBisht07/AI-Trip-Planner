import React from "react";
import PlaceCard from "./PlaceCard";
import { GetPlaceTravelPhoto } from "../../../constants/Images";

const PlacesToVisit = ({ tripData }) => {
    console.log('tripData', tripData);
    const itinerary = tripData?.tripData?.itinerary || {};
  return (
    <div>
      <h2 className="font-bold mt-12 -mb-6 text-3xl">Places to Visit</h2>

      <div>
        {/* itinerary is a keys obj not an array  */}
        {Object.keys(itinerary).length > 0 ? (
            Object.entries(itinerary).map(([day, item], idx) => (
                <div key={idx}>
                    <h2 className="font-medium text-blue-600 text-xl mt-10">{day.toUpperCase()}</h2>

                    <div  className="grid md:grid-cols-2 gap-5">
                    {item.plan.map((place, pidx) => {
                      const randomImgUrl = GetPlaceTravelPhoto();
                      return (
                    <div className="" key={pidx}>
                        <h2 className="font-medium text-sm mt-1  text-orange-400">⏱️{place?.time_travel}</h2>
                        
                        <PlaceCard place={place} randomImgUrl={randomImgUrl} />


                    </div>
                    );
})}
                        </div>
                </div>
            ))
        ) : (
            <p>No itinerary available!</p>
        )} 
        
       
      </div>
    </div>
  );
};

export default PlacesToVisit;
