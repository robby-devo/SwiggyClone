import { render, screen,fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { Header } from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

it("Header Page Test Cases", () => {
  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
    </BrowserRouter>
    
  );

//   const loginButton = screen.getByRole("button");

//   expect(loginButton).toBeInTheDocument()


const loginButton = screen.getByRole("button",{name:"Login"});
expect(loginButton).toBeInTheDocument()
  
});




it("Should render Header Component with cart items 0 buttn", () => {
  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
    </BrowserRouter>
    
  );

//   const loginButton = screen.getByRole("button");

//   expect(loginButton).toBeInTheDocument()


const cartItems = screen.getByText(/Cart/);
expect(cartItems).toBeInTheDocument()
  
});


it("Should change login button to logout", () => {
  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
    </BrowserRouter>
    
  );

  const loginButton = screen.getByRole("button",{name:"Login"});



  fireEvent.click(loginButton)


  const logoutButton = screen.getByRole("button",{name:"Logout"});


  expect(logoutButton).toBeInTheDocument()
  
});
