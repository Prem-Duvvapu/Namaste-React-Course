import RestaurantCard from "./RestaurantCard";
import { resList  } from '../utils/mockData'

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>

            <div className="res-container">
                {resList.map((restaurant) => {
                    console.log(restaurant);
                    return <RestaurantCard key={restaurant.id} resData={restaurant} />
                })}
            </div>
        </div>
    );
};

export default Body;