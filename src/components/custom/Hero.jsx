import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import Header from "./Header";

const Hero = () => {
  return (
    <>
    {/* <Header /> */}
    <div className="flex flex-col items-center mx-56 gap-9">
      <h1 className="font-extrabold text-[50px] text-center mt-16">
        <span className="text-blue-700">
        Your Next Vacation, Reimagined by AI:
        </span>{" "}
        Personalized Itineraries at Your Fingertips{" "}
      </h1>
      <p className="text-gray-500 text-center -mt-4">
      Your AI-powered personal travel guide, crafting the perfect journey just for you.
      </p>

      <Link to={'/create-trip'}>
        <Button className="bg-blue-700 " >Get Started, It's Free</Button>
      </Link>
     
    </div>
     <div className="my-auto px-44">
      <img src='/landing.jpg' alt="landingImage" className="mt-10" />
      </div>
    </>
  );
};

export default Hero;
