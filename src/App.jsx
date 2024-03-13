import "./App.css";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { CocktailCard } from "./components/CocktailCard";
function App() {
  return (
    <>
      <NavBar />
      <CocktailCard />
      <ItemListContainer greeting="CoderHouse" />
    </>
  );
}

export default App;
