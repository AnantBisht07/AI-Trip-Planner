export const SelectTravelList = [
    {
        id: 1,
        title: 'Alone',
        desc: 'A sole traveles in exploration',
        icon: '🪖',
        people: '1'
    },
    {
        id: 2,
        title: 'Couple',
        desc: 'Two traveles in tandem',
        icon: '🥂',
        people: '2 People'
    },
    {
        id: 3,
        title: 'Family',
        desc: 'A group of fun loving adventure',
        icon: '👪',
        people: '3-7 People'
    },
    {
        id: 4,
        title: 'Friends',
        desc: 'A bunch of thrill-seeks',
        icon: '💗',
        people: '7+ People'
    },

]

export const SelectBudgetOptions = [
    {
        id: 1,
        title: 'Cheap', 
        desc: 'Stay conscious of costs',
        icon: '💵'
    },
    {
        id: 2,
        title: 'Moderate', 
        desc: 'Keep costs on average side',
        icon: '💰'
    },
    {
        id: 3,
        title: 'Luxury', 
        desc: 'Dont worry about cost',
        icon: '🤑'
    },
]

export const AI_PROMPT = 'Generate Travel plan for Location : {location}, for {totalDays} Days for {traveler} with a {budget} budget, give me Hotels options list with HotelName, Hotel address, Price, hotel image url  geo coordinates, rating, description, and suggest itinerary with placename, place details, place image url, geo coordinates, ticket pricing, rating, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON FORMAT '