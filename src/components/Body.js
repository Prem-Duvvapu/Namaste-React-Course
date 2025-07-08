import RestaurantCard from "./RestaurantCard";
import { resList  } from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {

    // local State variable - Super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    // const arr = useState(resList);
    // console.log(arr.length);
    // const listOfRestaurants = arr[0];
    // const setListOfRestaurants = arr[1];


    // let listOfRestaurants = resList;

    // useEffect(callback function, dependency array)
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const json = await data.json();
        console.log(json);
    }

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