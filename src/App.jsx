import "./App.css";
import CardComponent from "./components/CardComponent/CardComponent";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import NavBarComponent from "./components/NavbarComponent/NavBarComponent";

function App() {
  return (
    <div>
      <NavBarComponent />
      <HeroComponent />
      <CardComponent />
    </div>
  );
}

export default App;
