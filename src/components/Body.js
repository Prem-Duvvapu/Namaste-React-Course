import RestaurantCard from "./RestaurantCard";
import { resList  } from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    // local State variable - Super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    // const arr = useState(resList);
    // console.log(arr.length);
    // const listOfRestaurants = arr[0];
    // const setListOfRestaurants = arr[1];


    // let listOfRestaurants = resList;

    return (
        <div className="body">
            {/* <div className="search">
                Search
            </div> */}

            <div className="filter">
                <button className="filter-btn" 
                onClick={() => {
                    //Filter logic here
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.rating > 4
                    );
                    setListOfRestaurants(filteredList);
                    console.log(filteredList);
                }}>
                    Top Rated Restaurants
                </button>
            </div>

            <div className="res-container">
                {listOfRestaurants.map((restaurant) => {
                    // console.log(restaurant);
                    return <RestaurantCard key={restaurant.id} resData={restaurant} />
                })}
            </div>
        </div>
    );
};

export default Body;