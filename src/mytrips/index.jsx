import React, { useEffect, useState } from "react";
import Header from "@/components/custom/Header";
import { useNavigate } from "react-router-dom";

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebaseConfig";
import UserTripsDetails from "@/view-trip/[tripid]/Components/userTripsDetails";

const MyTrips = () => {
  const navigate = useNavigate();
  const [userTrips, setUserTrips] = useState([]);

  useEffect(() => {
    GetUserTrips();
  }, [navigate]);

  // Getting all users

  const GetUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/");
      return;
    }

    setUserTrips([]);
    // getting all docs from firebase...
    const q = query(
      collection(db, "AITrips"),
      where("userEmail", "==", user?.email)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());

      setUserTrips((prevVal) => [...prevVal, doc.data()]);
    });
  };
  return (
    <>
      <Header />
      <div className="p-10 sm:px-10 md:px-32 lg:px-72 px-5">
        <h2 className="font-bol text-3xl">My Trips</h2>

        <div className="grid grid-col-2 mt-10 md:grid-cols-3 gap-10 ">
          {userTrips.map((tripData, idx) => (
            <UserTripsDetails key={idx} tripData={tripData} className=""
            />
          ))}
        </div>

      </div>
    </>
  );
};

export default MyTrips;
