import React, { useState } from "react";
import { FoodItems } from "../appInterface";

interface AppContext {
  topRated: FoodItems[];
  allCategories: FoodItems[];
  dishesNearYou: FoodItems[];
}

interface AppState extends AppContext {}

export const DataContext = React.createContext<AppContext>({} as AppContext);

function DataProvider({ children }: { children: JSX.Element }) {
  const [state, setState] = useState<AppState>({
    topRated: [
      {
        id: 1,
        name: "Cake",
        price: 100,
        url: "/assets/cake.jpg",
        desc: "Very tasty",
        rate: 4.1,
      },
      {
        id: 2,
        name: "Noodles",
        price: 200,
        url: "/assets/noodles.jpg",
        desc: "Chilly",
        rate: 4.1,
      },
      {
        id: 3,
        name: "Fries",
        price: 70,
        url: "/assets/fries.jpg",
        desc: "Crispy",
        rate: 4.2,
      },
    ],
    allCategories: [
      {
        id: 4,
        name: "Macroni",
        price: 150,
        url: "/assets/macroni.jpg",
        desc: "Yummy",
        rate: 4.5,
      },
      {
        id: 5,
        name: "Pizza",
        price: 400,
        url: "/assets/pizza.jpg",
        desc: "Very tasty",
        rate: 4.0,
      },
      {
        id: 6,
        name: "Salad",
        price: 60,
        url: "/assets/salad.jpg",
        desc: "Very tasty",
        rate: 4.2,
      },
    ],
    dishesNearYou: [
      {
        id: 7,
        name: "Samosa",
        price: 20,
        url: "/assets/samosa.jpg",
        desc: "Very tasty",
        rate: 4.2,
      },
      {
        id: 8,
        name: "Soup",
        price: 50,
        url: "/assets/soup.jpg",
        desc: "Delicious",
        rate: 4.2,
      },
      {
        id: 9,
        name: "Tacos",
        price: 110,
        url: "/assets/tacos.jpg",
        desc: "Awesome!!",
        rate: 4.4,
      },
    ],
  });

  const { topRated, allCategories, dishesNearYou } = state;
  return (
    <DataContext.Provider value={{ topRated, allCategories, dishesNearYou }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
