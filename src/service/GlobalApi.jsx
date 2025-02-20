const BASE_URL = "https://places.googleapis.com/v1/places:searchText";
import axios from 'axios';

const config = {
  headers: {
    "Content-type": "application/json", // it will return json
    "X-Goog-Api-Key": import.meta.env.VITE_GOOGLE_PLACE_API_KEY,
    "X-Goog-FieldMask": [
       ' places.photos',
       'places.displayName',
       'places.id'
    ],
    // whatever we want as a res we type here
  },
};


//POST REQ
export const GetPlaceDetails = (data) => axios.post(BASE_URL, data, config)

// SOURCE ->
// https://developers.google.com/maps/documentation/places/web-service/text-search
