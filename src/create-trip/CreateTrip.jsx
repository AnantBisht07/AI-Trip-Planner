import React, { useState } from "react";
import Header from "@/components/custom/Header";
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import axios from "axios";
// import { key } from 'lucide-react';
import { useDebounce } from "use-debounce";
import { Input } from "../components/ui/input";
import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTravelList,
} from "@/constants/options";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { chatSession } from "@/service/AIModel";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useGoogleLogin } from "@react-oauth/google";

import { doc, setDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { db } from '../service/firebaseConfig'; 
import { useNavigate } from "react-router-dom";

const CreateTrip = () => {
  const [suggestions, setSuggestions] = useState([]); // Stores an array of location suggestions received from the API.
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 500); // Debounced query after 500ms
  // const [place, setPlace] = useState();
  const [formData, setFormData] = useState({
    location: "",
    days: "",
    budget: "",
    travelCompanion: "",
  });

  const [openDialog, setOpenDialog] = useState(false);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "days" && value > 10) {
      alert("Please insert number less then 10");
    }
    // Update query only for location input
    if (name === "location") {
      setQuery(value.trim());
    }
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    console.log(formData);
  };

  // when user selects a location
  const handleSelectLocation = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      location: value.formatted, // Save the formatted location in formData
    }));
    setQuery(value.formatted); // Set the input value to the selected location
    setSuggestions([]); // Clear the suggestions list
    // if query is not empty it makes a req to the api.
  };

  React.useEffect(() => {
    if (debouncedQuery) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://api.opencagedata.com/geocode/v1/json`,
            {
              params: {
                q: debouncedQuery,
                key: "1a259559e33d4b3284acef95a0259af8",
              },
            }
          );

          if (response.data.results.length > 0) {
            setSuggestions(response.data.results);
            setError(null); // Clear any previous errors
          } else {
            setSuggestions([]);
            setError("No results found!");
          }
        } catch (err) {
          setError(
            "Error fetching data. Please check your API key or try again later."
          );
          console.error(err);
        }
      };
      fetchData();
    } else {
      setSuggestions([]);
      setError(null);
    }
    // if the response contains results and its length is greater than 0, it updates the suggestions state with the returned results and clears any previous errors (setError(null)).
  }, [debouncedQuery]);

  // auth method for google
  const login = useGoogleLogin({
    onSuccess: (tokenInfo) => GetUserProfile(tokenInfo),
    onError: (error) => console.log(error),
  });

  const handleFormSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }
    const user = localStorage.getItem("user");
    if (!user) {
      setOpenDialog(true);
      return;
    }
    const { location, travelCompanion, days, budget } = formData;
    if (!location || !travelCompanion || !days || !budget) {
      toast({
        title: "Error",
        description: "Please fill all the details!",
        variant: "destructive",
      });
      return;
    }
    console.log("Submitted Form Data:", formData);

    // according to the prompt we are setting the location, days and other details
    // it means humare pass demo text pda hai bs usme days, location jo jo user select krega us hisab se replacr kr rhe hain for every user...

    // ------------------  Loading --------------------
    setLoading(true);
    const FINAL_PROMPT = AI_PROMPT.replace("{location}", formData?.location)
      .replace("{totalDays}", formData?.days)
      .replace("{traveler}", formData?.travelCompanion)
      .replace("{budget}", formData?.budget)
      .replace("{totalDays}", formData?.days);

    // console.log(FINAL_PROMPT);

    // generating trip.
    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log(result?.response?.text());
    setLoading(false);
    // whenever res coming from ai at that time this method is called and trip got save at db. and we pass ai res in this and accept the params as a TripData...
    SaveAiTrip(result?.response?.text());
  };

  // add data to firebase
  const SaveAiTrip = async (TripData) => {
    // ------------- Loading ----------------
    setLoading(true);
    const user = JSON.parse(localStorage.getItem("user"));
    const docId = Date.now().toString();
    // Add a new document in collection "cities"
    await setDoc(doc(db, "AITrips", docId), {
      userSelection: formData,
      tripData: JSON.parse(TripData),
      userEmail: user?.email, // it throw null if !user.
      id: docId,
    });
    setLoading(false);
    navigate('/view-trip/'+docId);
  };

  //
  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "Application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        // store this user data in lclstrg
        localStorage.setItem("user", JSON.stringify(res.data));
        setOpenDialog(false);
        handleFormSubmit();
      });
  };

  const handleSelectOption = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  return (
    <>
    <Header />
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 p-5 mt-10 m-24 mb-0">
      <h2 className="font-bold text-3xl">Tell us your travel preferences❄️</h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information, and our trip plannr will generate a
        customized itinerary based on your preferences.
      </p>

      {/* The package simplifies integrating Google's Places Autocomplete API into a React application. It allows users to search for locations and provides autocomplete suggestions for places as they type. */}
      {/* <div className='mt-20'>
          <h2 className='text-xl my-3 font-medium'>What is your destination choice?</h2>
          <GooglePlacesAutocomplete
          apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
          selectProps={{
            onChange: (value) => console.log(value), // Logs the selected location
            placeholder: 'Search for a location',
          }}
  
           /> */}

      <form className="" onSubmit={(e) => handleFormSubmit(e)}>
        <div className="mt-20">
          <h2 className="text-xl my-3 font-medium">
            What is your destination choice?
          </h2>
          <Input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="Search for a location"
          />
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <ul>
            {suggestions.map((item, idx) => (
              <li
                key={idx}
                // set location when clicked
                onClick={() => handleSelectLocation(item)}
                className="py-1"
              >
                {item.formatted}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <h2 className="text-xl my-3 font-medium">
              How many days are you planning for?
            </h2>
            <Input
              placeholder={"Ex.4"}
              name="days"
              type="number"
              value={formData.days}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-xl my-3 font-medium">What is your budget?</h2>
          <div className="grid grid-cols-3 gap-5 mt-5 cursor-pointer">
            {SelectBudgetOptions.map((item, idx) => (
              <div
                key={idx}
                name="buget"
                value={formData.budget}
                className={`p-4 border rounded-lg hover:shadow-lg ${
                  formData.budget === item.title
                    ? "shadow-lg border-gray-400"
                    : ""
                }`}
                onClick={() => handleSelectOption("budget", item.title)}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-xl my-3 font-medium">
            Who do you plan on travelling with on your next adventure ?
          </h2>
          <div className="grid grid-cols-3 gap-5 mt-5 cursor-pointer">
            {SelectTravelList.map((item, idx) => (
              <div
                key={idx}
                className={`p-4 border rounded-lg hover:shadow-lg ${
                  formData.travelCompanion === item.title
                    ? " shadow-lg border-gray-400"
                    : ""
                }`}
                name="travelCompanion"
                value={formData.travelCompanion}
                onClick={() =>
                  handleSelectOption("travelCompanion", item.title)
                }
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

        <div className=" my-10 flex justify-end">
          <Button
            // when loading is true disable it
            disabled={loading}
            type="submit"
          >
            {loading ? (
              <AiOutlineLoading3Quarters className="w-7 h-7 animate-spin" />
            ) : (
              "Generate Trip"
            )}
          </Button>
        </div>

        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogDescription>
                <div className="flex justify-center items-center -mt-14">
                  <img className="w-56" src="/saf.png" />
                </div>

                <Button
                  onClick={login}
                  className="w-full mt-7 flex gap-3 items-center rounded-lg shadow-md py-2 px-4"
                >
                  <FcGoogle className="h-7 w-7" />
                  Sign In with Google
                </Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </form>
    </div>
    </>
  );
};

export default CreateTrip;
