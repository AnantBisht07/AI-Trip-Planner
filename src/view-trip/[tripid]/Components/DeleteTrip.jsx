import React from 'react'
import { toast } from "@/hooks/use-toast";
import { db } from "../../../service/firebaseConfig" 
import { doc, deleteDoc } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom';


const DeleteTrip = ({ tripData }) => {

    const navigate = useNavigate();

    const handleDelete = async() => {
        try {
            // Reference the document by ID
            const docRef = doc(db, "AITrips", tripData.id);
            await deleteDoc(docRef);  // Deleting the document
            toast({ title: "Success", description: "Trip Deleted Successfully!", variant: "success" });
            navigate('/my-trips');
          } catch (error) {
            toast({ title: "Error", description: "Some error occurred, Please try again!", variant: "destructive" });
          }
    }

  return (
    <div onClick={handleDelete}>
        Delete Trip
    </div>
  )
}

export default DeleteTrip
