import React from 'react'; // Import React

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock";

it("should render RestaurantCard component with props Data", () => {
  render(
    <RestaurantCard resData={MOCK_DATA} />
  );

  const name = screen.getByText("Bakingo");
  expect(name).toBeInTheDocument();
});
