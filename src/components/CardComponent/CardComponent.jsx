import "/src/components/CardComponent/CardComponent.css";
import KatiePicture from "/src/assets/Katie-Picture.png";
import Star from "/src/assets/Star.png";

const CardComponent = () => {
  return (
    <div className="cardComponent">
      <img src={KatiePicture} className="pictureSection" />
      <div class="ratingSection">
        <img src={Star} className="starSection" />
        <p className="ratings">5.0</p>
        <p className="reviews">(6)</p>
        <p className="country">. USA</p>
      </div>
      <div className="cardTitle">Life lessons with Katie Zaferes</div>
      <div className="cost">
        <b>From $136</b> / person
      </div>
    </div>
  );
};

export default CardComponent;
