import PhotoGrid from "/src/assets/photo-grid.png";
import "/src/components/HeroComponent/HeroComponent.css";

const HeroComponent = () => {
  return (
    <div className="heroComponent">
      <div class="photoContainer">
        <img src={PhotoGrid} className="photoGridClass" />
      </div>
      <div className="infoBody">
        <p className="infoBodyTitle">Online Experiences</p>
        <p className="infoBodyContent">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
};

export default HeroComponent;
