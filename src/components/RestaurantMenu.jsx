import { useEffect, useState } from "react";
import resCard from "./mocks/resCardMock";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const dummy = "Dummy Data";
  
    const resInfo = useRestaurantMenu(resId);

   
  
    const [showIndex, setShowIndex] = useState(null);
  
    if (resInfo === null) return null;
  
    const { name, cuisines, costForTwoMessage } =
      resInfo?.cards[0]?.card?.card?.info;
  
    const { itemCards } =
      resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;


      console.log("itemCards",itemCards)
  
    const categories =
      resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c.card?.["card"]?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    //console.log(categories);
    return (
        <div className="text-center">
            <h1 className="font-bold my-10 text-2xl">{name}</h1>
            <p className="font-bold  text-lg">{cuisines.join(", ")}  -  {costForTwoMessage}</p>

            {/* Categories Accordions */}
            <h2>Menu</h2>


            {categories.map((category,index)=>{
              return (
                <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}
                  showItems={index === showIndex ? true :false}
                  setShowIndex={()=> setShowIndex(index)}

                  index={index}
                  
                  />
              )
            })}
            {/* <ul>
               {itemCards.map((item)=>{
                return (
                   <li>{item.card.info.name} -{'Rs,'}
                   
                   {item.card.info.price/100 || item.card.info.defaultPrice/100}
                   </li>
                )
               })}
            </ul> */}
        </div>
    )
}


export default RestaurantMenu;