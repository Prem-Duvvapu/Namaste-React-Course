import RestaurantCard from "./RestaurantCard";
import { resList  } from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    // local State variable - Super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component).
    console.log("Body rendered");

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
        // setListOfRestaurants(json.data);
        setListOfRestaurants(resList);
    }

    // Conditional Rendering
    if (listOfRestaurants.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="body">
                <div className="filter">
                    <div className="search">
                    <input 
                        type="text" 
                        className="searchText" 
                        value={searchText} 
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}/>
                    <button onClick={() => {
                        // filter the restaurant cards and update the ui
                        // search Text
                        console.log(searchText);
                        const filteredList = resList.filter(
                            (res) => res.resName.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setListOfRestaurants(filteredList);
                    }}>Search</button>
                </div>

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