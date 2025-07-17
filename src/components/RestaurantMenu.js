import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [resInfo, setResInfo] = useState(null);

    console.log("res id in restaurant menu ",resId);

    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        console.log("json data", json);
        setResInfo(json);
    }

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