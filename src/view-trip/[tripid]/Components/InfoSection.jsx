import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { GetPlacePhoto } from "../../../constants/Images";
import { toast } from "@/hooks/use-toast";



const InfoSection = ({ tripData }) => {


  const[randomImgUrl, setRandomImgUrl ] = useState("");

  // component called hum api ko render krnge photo load wali
  useEffect(()=>{
    if(tripData){
      const photo = GetPlacePhoto();
      console.log("Random photo URL:", photo); // Log the photo URL
      setRandomImgUrl(photo);
    }
    const photo = GetPlacePhoto();
    setRandomImgUrl(photo);

    toast({ title: "Note", description: "The images shown here are for reference only and may differ from the actual appearance!", variant: "success" });

  }, [tripData])





  return (

    <div>
      
      <img
        src={randomImgUrl}
        alt=""
        className="h-[450px] w-full object-cover rounded-xl"
      />

      <div className="my-5 flex flex-col gap-2">
        <h2 className="font-bold text-2xl">
          {tripData?.userSelection?.location}
        </h2>

        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-800 text-xs md:text-lg">
              🗓️ {tripData?.userSelection?.days} Days
            </h2>

            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-800 text-xs md:text-lg">
              💰 {tripData?.userSelection?.budget}
            </h2>

            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-800 text-xs md:text-lg">
              💗 {tripData?.userSelection?.travelCompanion}
            </h2>
          </div>
          <Button><IoIosSend /></Button>
        </div>

      </div>
    </div>
  );
};

export default InfoSection;
