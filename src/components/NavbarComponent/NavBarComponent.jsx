import "/src/components/NavbarComponent/NavBarComponent.css";
import AirbnbLogo from "/src/assets/airbnb-logo.png";

const NavBarComponent = () => {
  return (
    <nav className="navbarComponent">
      <img src={AirbnbLogo} className="airbnbLogo" />
    </nav>
  );
};

export default NavBarComponent;
