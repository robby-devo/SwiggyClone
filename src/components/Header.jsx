import { useState ,useContext} from "react";
import { Link } from "react-router-dom";
import React from "react";
import UserContext from "../utils/UserContext";
// import { useSelector } from "react-redux/es/hooks/useSelector";
import { useSelector } from "react-redux";
const Title = () => {
  return (
    <a href="https://www.google.co.in">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMlkr9q5-6nt8D-CbmzkyWN0KJH77t0jZuPHrgXjQ&s"
        alt="logo"
        className="logo"
      />
    </a>
  );
};

export const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");


// const data = useContext(UserContext)
const {loggedInUser} = useContext(UserContext)

console.log("context",loggedInUser)

// Subscribing to the store usning a selector
const cartItems = useSelector((store) => store.cart.items);
console.log("cartItems",cartItems)


  return (
    <>
      <div className="flex justify-between shadow-lg">
       <div className="logo-container">
       <a href="https://www.google.co.in">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMlkr9q5-6nt8D-CbmzkyWN0KJH77t0jZuPHrgXjQ&s"
        alt="logo"
        className="w-30"
      />
    </a>
       </div>

        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4"> <Link to="/">Home</Link> </li>
            <li className="px-4">About</li>

            <li className="px-4">  <Link to="/contact"> Contact
            </Link>
            </li>

            <li className="px-4">  <Link to="/grocery"> Grocery
            </Link>
            </li>

           <li className="px-4 font-bold text-xl"><Link to="/cart" >Cart ({cartItems.length})</Link></li>
            <button
              className="login px-4"
              onClick={() => {

                // if (loginButton === "Login") {
                // setLoginButton("Logout");

                // } else {
                // setLoginButton("Login");
                { loginButton === "Login" ? setLoginButton("Logout") : setLoginButton("Login") }


              }}
            >
              {loginButton}
            </button>

            <li className="px-4 font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    </>
  );
};
