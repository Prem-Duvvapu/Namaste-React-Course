import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const resId = useParams();
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null)
        return <Shimmer />;

    return (
        <div className="Menu">
            <h1> {resInfo?.resName} </h1>
            <h2> {resInfo?.cuisine} </h2>
        </div>
    );
};

export default RestaurantMenu;