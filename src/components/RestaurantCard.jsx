import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {

  const { resData } = props
  console.log("resdata", resData);

      // const {}=useContext(UserContext)
  // const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId } = resData;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="rounded-lg"
        src={`${CDN_URL}/${resData?.info?.cloudinaryImageId}`}
        alt="foods"
      />
      <h3 className="font-bold py-4 text-lg">{resData?.info?.name}</h3>
      <h4>{resData?.info?.cuisines.join(" ")}</h4>
      <h4>{resData?.info?.avgRating}</h4>
    </div>
  );
};


// Higher Order Component
// input - Restaurant ==> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard