import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import CocktailCard from "./components/CocktailCard";

import { useState } from "react";

function App() {
  const [items, setItems] = useState(0);

  const handleAdd = () => {
    setItems(items + 1);
    console.log(items);
  };

  return (
    <>
      <NavBar items={items} />
      <CocktailCard onAdd={handleAdd} />
      <ItemListContainer greeting="CoderHouse" className="mt-20" />
    </>
  );
}

export default App;
