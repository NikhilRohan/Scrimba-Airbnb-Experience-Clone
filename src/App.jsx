import "./App.css";
import CardComponent from "./components/CardComponent/CardComponent";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import NavBarComponent from "./components/NavbarComponent/NavBarComponent";
import cardData from "/src/data.js";

function App() {
  const cardElements = cardData.map((eachCardData) => {
    return (
      <CardComponent
        img={eachCardData.coverImg}
        rating={eachCardData.stats.rating}
        reviewCount={eachCardData.stats.reviewCount}
        location={eachCardData.location}
        title={eachCardData.title}
        price={eachCardData.price}
      />
    );
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
