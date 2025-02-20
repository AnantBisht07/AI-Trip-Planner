const images = [
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
];

export const GetPlacePhoto = () => {
  const randomIdx = Math.floor(Math.random() * images.length);
  // const randomImgUrl = images[randomIdx];
  return images[randomIdx];
};


const HotelImg = [
    "https://media.istockphoto.com/id/1403277131/photo/business-people-checking-in-at-hotel-reception-desk.jpg?s=612x612&w=0&k=20&c=zegaevHs-qZjGGnCuo6fhmN_UqYRB7JOzj5A8utiWhM=",
    "https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc=",
    "https://media.istockphoto.com/id/1370825295/photo/modern-hotel-room-with-double-bed-night-tables-tv-set-and-cityscape-from-the-window.jpg?s=612x612&w=0&k=20&c=QMXz9HJVhU-8MtBYyeJxtqLz90j7r0SrR6FTWniPkgc=",
    "https://media.istockphoto.com/id/1428091723/photo/hotel-attendant-with-luggage-in-lobby.jpg?s=612x612&w=0&k=20&c=AAB0L3PNjmwm8w-XY9pPbWYtDUsyUDU1ysl4sjb6YjM=",
    "https://media.istockphoto.com/id/1491859442/photo/young-couple-traveler-opening-the-curtains-and-looking-at-the-view-from-the-window-of-a-hotel.jpg?s=612x612&w=0&k=20&c=WrD82Ll6o1_QJj0gGuRenKJJDeW9yvrAu74eOXQMFG8=",
    "https://media.istockphoto.com/id/1333257950/photo/digitally-rendered-image-of-a-five-star-hotel-interior.jpg?s=612x612&w=0&k=20&c=cAMaQYc-dDz8xveLeM_-xsGtn41-2BJKRA6GrDuy-HE=",
    "https://media.istockphoto.com/id/1210328194/photo/ocean-sunset-view-from-bedroom-balcony-for-travel-concept.jpg?s=612x612&w=0&k=20&c=UU944NTbhzZ209d2Qm7sDrMtkBHqmBNo7sOlrqdsKdc=",
    "https://media.istockphoto.com/id/472899538/photo/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab.jpg?s=612x612&w=0&k=20&c=rz-WSe_6gKfkID6EL9yxCdN_UIMkXUBsr67884j-X9o=",

];

export const GetPlaceHotelsPhoto = () => {
    const randomIdx = Math.floor(Math.random() * HotelImg.length);
    // const randomImgUrl = images[randomIdx];
    return HotelImg[randomIdx];
  };


const travelImg = [
    "https://media.istockphoto.com/id/1357530144/photo/young-family-having-fun-traveling-together.jpg?s=612x612&w=0&'k=20&c=9n0yR3q7w4ReuTiNA1k8D4BOl7__ZJ9K4ixT4kNhYZ8=",
    "https://media.istockphoto.com/id/1357530144/photo/young-family-having-fun-traveling-together.jpg?s=612x612&w=0&'https://media.istockphoto.com/id/1500563478/photo/traveler-asian-woman-relax-and-travel-on-thai-longtail-boat-in-ratchaprapha-dam-at-khao-sok.jpg?s=612x612&w=0&k=20&c=_bb2PdPJMtY9KmNNBSFY6w_TOcC98we45LvsYoa48p8=k=20&c=9n0yR3q7w4ReuTiNA1k8D4BOl7__ZJ9K4ixT4kNhYZ8=",
    "https://media.istockphoto.com/id/1933790728/photo/young-female-tourist-enjoying-the-beautiful-landscape-at-padar-island-in-komodo-national-park.jpg?s=612x612&w=0&k=20&c=0nRMkRZxk2oLp3j4MUur7hT9-VzCGeh_hzbqs1-vKag=",
    "https://media.istockphoto.com/id/1145064928/photo/tourist-riding-camel-in-desert.jpg?s=612x612&w=0&k=20&c=zZpS5SxgBNFhI5kb-oBnf2CL4RyBcRKgCGrImtKs7dw=",
    "https://media.istockphoto.com/id/1031433104/photo/admiring-the-city-of-udaipur.jpg?s=612x612&w=0&k=20&c=btBfL36xRqJPxd_MD2AxO0uY5yQb_Ndn7nKxXRG_k48=",
    "https://media.istockphoto.com/id/146812172/photo/sunrise-at-taj-mahal-on-jamuna-river.jpg?s=612x612&w=0&k=20&c=SdtUfSDFuJfelsg4qatrtLvGfMSFXp8Ms5WzoZQ7RdA=",
    "https://media.istockphoto.com/id/1416018492/photo/teenager-indian-girl-hiking-on-mountain-with-backpack-in-manali-himachal-pradesh-india-female.jpg?s=612x612&w=0&k=20&c=swephOf1AFzLbd6Ycn43KMicLCvjy-HysY7PQSMsU0Q=",
    "https://media.istockphoto.com/id/930852852/photo/dhankar-gompa-india-spiti-valley.jpg?s=612x612&w=0&k=20&c=F4zopbUYwgi56-fhSrjfzgscV8Jac4UYWvCB0vl8gN0=",
    "https://media.istockphoto.com/id/951823988/photo/india.jpg?s=612x612&w=0&k=20&c=hF_FvzbZNaPFVbvHbaCqrG4niDn_i14dshFHvVjVOh0=",
    "https://media.istockphoto.com/id/517525274/photo/varanasi_pray_sadhu.jpg?s=612x612&w=0&k=20&c=9SjIo5ow35EyeUiMFr1pslzZlU_tOZTqrpScdiSmDj8=",
    "https://media.istockphoto.com/id/154894958/photo/amber-fort-jaipur-india.jpg?s=612x612&w=0&k=20&c=gCNirw30cmkl7clV30l8mcbmxOk-IAoT5ACxHRBQsdA=",
    "https://media.istockphoto.com/id/523513953/photo/times-square-in-new-york-city.jpg?s=612x612&w=0&k=20&c=ibPzzIPHrsIdPElVpZYHyWyvqIN4VXTzNP5UXiQcpu8=",
    "https://media.istockphoto.com/id/1454217037/photo/statue-of-liberty-and-new-york-city-skyline-with-manhattan-financial-district-world-trade.jpg?s=612x612&w=0&k=20&c=6V54_qVlDfo59GLEdY2W8DOjLbbHTJ9y4AnJ58a3cis=",
    "https://media.istockphoto.com/id/1452800406/photo/manhattan-downtown-and-skyscrapers-at-sunset.jpg?s=612x612&w=0&k=20&c=b-YVU9lcZdUnDD0P6Z5EoFm-4cgJVsVTl51YMiQUoVA=",
    "https://media.istockphoto.com/id/608615480/photo/liberty-island-overlooking-manhattan-skyline.jpg?s=612x612&w=0&k=20&c=iB_ytgpDtKUCX0zxgqCSvCYcDDoBr33zyLpsEoJNbG0="
];  

export const GetPlaceTravelPhoto = () => {
    const randomIdx = Math.floor(Math.random() * travelImg.length);
    // const randomImgUrl = images[randomIdx];
    return travelImg[randomIdx];
  };