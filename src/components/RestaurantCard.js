import { FOOD_IMAGE_URL } from '../utils/constants'

// inline style css in not recommended
const styleCard = {
    backgroundColor: "orange"
};

const RestaurantCard = ({resData}) => {
    // console.log(resData);
    const { resName, cuisine, rating, deliveryTime } = resData;

    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" alt="biryani-image" src={FOOD_IMAGE_URL} />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    );
};

export default RestaurantCard;