import { FOOD_IMAGE_URL } from '../utils/constants'

// inline style css in not recommended
const styleCard = {
    backgroundColor: "orange"
};

const RestaurantCard = ({resData}) => {
    // console.log(resData);
    const { resName, cuisine, rating, deliveryTime } = resData;

    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-200 hover:bg-gray-400">
            <img className="rounded-lg" alt="biryani-image" src={FOOD_IMAGE_URL} />
            <h3 className="font-bold py-4 text-lg">{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    );
};

export default RestaurantCard;