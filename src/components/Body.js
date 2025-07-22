import RestaurantCard from "./RestaurantCard";
import { resList  } from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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

    const onlineStatus = useOnlineStatus();
    console.log(onlineStatus);

    if (onlineStatus === false) {
        return (
            <h1>
                Looks like you're offline!! Please check your internet connection
            </h1>
        );
    }

    // Conditional Rendering
    if (listOfRestaurants.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="body">
                <div className="filter flex">
                    <div className="search m-4 p-4">
                    <input 
                        type="text" 
                        className="border border-solid border-black" 
                        value={searchText} 
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}/>
                    <button className='px-4 py-2 bg-green-300 m-4 rounded-lg' onClick={() => {
                        // filter the restaurant cards and update the ui
                        // search Text
                        console.log(searchText);
                        const filteredList = resList.filter(
                            (res) => res.resName.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setListOfRestaurants(filteredList);
                    }}>Search</button>
                </div>

                <div className="search m-4 p-4 flex items-center">
                    <button className="px-4 py-2 bg-gray-300 m-4 rounded-lg" 
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
            </div>

            <div className="flex flex-wrap">
                {listOfRestaurants.map((restaurant) => {
                    // console.log(restaurant);
                    return (
                        <Link key={restaurant.id}  to={"/restaurants/" + restaurant.id}>
                            <RestaurantCard resData={restaurant} />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Body;