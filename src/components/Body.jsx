import React, { useEffect, useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredSearch, setFilteredSearch] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.192119&lng=72.963557&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      const restaurants =
        data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      setListOfRestaurants(restaurants);
      setFilteredSearch(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    setSearchText(searchValue);

    const searchFilteredList = listOfRestaurants.filter((res) => {
      return res.info.name.toLowerCase().includes(searchValue.toLowerCase());
    });

    setFilteredSearch(searchFilteredList);
  };

  const onlineStatus = useOnlinireStatus();

  if (!onlineStatus) {
    return <h1>Looks like you are offline</h1>;
  }

  // const {loggedInUser,setUserName} = useContext(UserContext);

  return (
    <>
      {listOfRestaurants?.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <div className="body">
          <div className="filter flex">
            <div className="search m-4 p-4">
              <input
                type="text"
                className="border border-solid border-black"
                value={searchText}
                onChange={handleChange}
                placeholder="Search Restaurant"
              />
            </div>
            <button
              className="px-1 py-2 bg-green-100 m-4"
              onClick={() => {
                const filteredList = listOfRestaurants.filter((res) => {
                  return res.info.avgRating > 4.1;
                });
                setFilteredSearch(filteredList);
              }}
            >
              Top Rated Restaurants
            </button>

            <div className="search m-4 p-4 flex items-center">

              {/* <label>UserName</label>
              <input className="border border-black" onChange={(e)=>{
                setUserName(e.target.value)
              }} value={loggedInUser} /> */}
            </div>
          </div>

          {filteredSearch.length === 0 ? (
            <h1>No Results Found</h1>
          ) : (
            <div className="flex flex-wrap">
              {filteredSearch.map((restaurant) => (
                <Link
                  to={"/restaurants/" + restaurant?.info?.id}
                  key={restaurant?.info?.id}
                >
                  {restaurant?.info?.promoted ? (
                    <RestaurantCardPromoted resData={restaurant} />
                  ) : (
                    <RestaurantCard resData={restaurant} />
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Body;
