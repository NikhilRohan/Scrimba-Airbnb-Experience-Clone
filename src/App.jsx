import "./App.css";
import CardComponent from "./components/CardComponent/CardComponent";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import NavBarComponent from "./components/NavbarComponent/NavBarComponent";
import cardData from "/src/data.js";

function App() {
  const cardElements = cardData.map((eachCardData) => {
    return <CardComponent key={eachCardData.id} {...eachCardData} />;
  });
  return (
    <div>
      <NavBarComponent />
      <HeroComponent />
      <div className="cardComponentGroup">{cardElements}</div>
    </div>
  );
}

export default App;
