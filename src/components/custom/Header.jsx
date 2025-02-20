import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { useGoogleLogin } from "@react-oauth/google";
import axios from 'axios';
import { FcGoogle } from "react-icons/fc";




const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

   const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []); // Empty dependency array ensures this runs only once, when the component mounts.

  useEffect(() => {
    console.log("user", user); // This will log the updated user state
  }, [user]); // The second useEffect will run every time 'user' changes

  // auth method for google
    const login = useGoogleLogin({
      onSuccess: (tokenInfo) => GetUserProfile(tokenInfo),
      onError: (error) => console.log(error),
    });


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
          window.location.reload();
        });
    };



  return (
    <div className="p-3 shadow-md flex justify-between items-center px-5 sticky top-0 bg-white z-50 ">
      <h1 className="text-4xl p-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-teal-400 text-transparent bg-clip-text">
        SafarAI
      </h1>

      <div>
        {user ? (
          <div className="flex items-center space-x-3">
            <Button onClick={() => navigate('/my-trips')} variant="outline" className="rounded-full">
              My Trips
            </Button>

            <Popover>
              <PopoverTrigger>
                <img
                  src={user.picture}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
              </PopoverTrigger>
              <PopoverContent className='text-center font-semibold w-32'>
                <h2 className="cursor-pointer" onClick={() => {
                  googleLogout();
                  localStorage.clear();
                  navigate('/')
                }}>Logout</h2>
              </PopoverContent>
            </Popover>

            {/* <h1>{user.name}</h1> */}
          </div>
        ) : (
          <Button onClick={() => setOpenDialog(true)}>Get Started</Button>
        )}
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
    </div>
  );
};

export default Header;
