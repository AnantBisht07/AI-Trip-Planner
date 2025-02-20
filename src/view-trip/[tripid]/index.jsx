import Header from '@/components/custom/Header'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from "@/hooks/use-toast";

import { doc, getDoc } from "firebase/firestore";
import { db } from '../../service/firebaseConfig'; 
import InfoSection from './Components/InfoSection';
import Hotels from './Components/Hotels';
import PlacesToVisit from './Components/PlacesToVisit';
import Footer from './Components/Footer';


const ViewTrip = () => {

    const { tripid } = useParams();
    const [tripData, setTripData] = useState(null); // Store the trip data

    // fetch document depend on the id (firebase)
    // whenever this page/comp rendered then this thing happens
    useEffect(() => {
        console.log("Trip ID:", tripid); 
        // when tripdata is there then only
        tripid && GetTripData();
    }, [tripid]);
    const [loading, setLoading] = useState(true);

    // getting info from firebase
    const GetTripData = async() => {
        try {
            const docRef = doc(db, "AITrips", tripid); // Reference the document
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
              setTripData(docSnap.data());
              console.log(docSnap.data());
            } else {
              toast({ title: "Error", description: "Trip not found!", variant: "destructive" });
            }
          } catch (err) {
            console.error("Error fetching trip data:", err);
            toast({ title: "Error", description: "Failed to load trip data.", variant: "destructive" });
          } finally {
            setLoading(false);
          }
    }

    if (loading) {
        return <div>Loading...</div>;
      }

      if (!tripData) {
        return <div>No trip data available.</div>;
      }
  return (
    <>
    <Header />
    <div className='p-10 md:px-20 lg:px-44 xl:px-56 '>
      
        {/* Information section  */}
        <InfoSection tripData={tripData} />
        {/* Recommended hotels  */}
        <Hotels tripData={tripData} />
        {/* Daily plan   */}
        <PlacesToVisit tripData={tripData} />
        {/* footer  */}
        <Footer tripData={tripData} />

    </div>
    </>
  )
}

export default ViewTrip
