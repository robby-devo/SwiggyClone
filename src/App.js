// ## Namaste React Course by Akshay Saini
// # Chapter 06 - Exploring the world

import React, { lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import { Header } from "./components/Header";
// import "./index.css";÷
// import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { element } from "prop-types";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
import Body from "./components/Body";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  // authentication

  useEffect(() => {
    // make an api call and send username and password
    const data = {
      name: "Ab",
    };

    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <React.Fragment>
          <Header />

          <Outlet />

          {/* if path is / then show body */}
          {/* <Body /> */}

          {/* if path is /about show about  */}
        </React.Fragment>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/grocery",
        element: <Grocery />,
      },

   
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },   {
        path: "/cart",
        element: <Cart />,
      },

    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);

root.render(<RouterProvider router={appRouter} />);
