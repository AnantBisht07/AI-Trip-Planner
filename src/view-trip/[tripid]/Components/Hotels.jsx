import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetPlaceHotelsPhoto } from "../../../constants/Images";

const Hotels = ({ tripData }) => {
  // component called hum api ko render krnge photo load wali
  // useEffect(() => {
  //   if (tripData) {
  //     const photo = GetPlaceHotelsPhoto();
  //     console.log("Random photo URL:", photo); // Log the photo URL
  //     setRandomImgUrl(photo);
  //   }
  //   const photo = GetPlaceHotelsPhoto();
  //   setRandomImgUrl(photo);
  // }, [tripData]);

  return (
    <div>
      {/* {console.log("tripata: ", tripData)} */}
      <h2 className="text-3xl mt-14 font-bold">
        Here is your Hotel Recommendation
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-5 ">
        {tripData?.tripData?.hotel_options?.map((hotel, idx) => {
        // {console.log("hoteldata: ", hotel)} 
          const randomImgUrl = GetPlaceHotelsPhoto();
          return (
            <Link
              key={idx}
              to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                hotel?.hotel_name
              )},${encodeURIComponent(hotel?.hotel_address)}`}
              target="_blank"
            >
              <div
                key={idx}
                className="hover:scale-105 transition-all cursor-pointer "
              >
                <img src={randomImgUrl} alt="" className="h-40 rounded-lg "  />
                <div className="my-2 flex flex-col">
                  <h2 className="font-medium text-2xl mb-2 text-blue-800">{hotel?.hotel_name}</h2>
                  <h2 className="text-sm text-blue-500">
                    📍{hotel?.hotel_address?.slice(0,20,) || "Address not available"}...
                  </h2>
                  <h2 className="text-sm mt-1 font-medium text-gray-700">
                    💸{hotel?.price_range}
                  </h2>
                  <h2 className="text-sm font-medium text-gray-700">
                    ⭐{hotel?.rating}
                  </h2>

                  {/* {console.log("data:",hotel)} */}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Hotels;

// Use encodeURIComponent:

// This ensures that special characters in hotel_name and address (like spaces, commas, etc.) are properly encoded for a URL. Without this, the URL might break or cause navigation errors.
