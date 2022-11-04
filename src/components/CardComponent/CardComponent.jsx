import "/src/components/CardComponent/CardComponent.css";
import KatiePicture from "/src/assets/Katie-Picture.png";
import Star from "/src/assets/Star.png";

const CardComponent = (props) => {
  return (
    <div className="cardComponent">
      <img src={"/src/assets/" + props.img} className="pictureSection" />
      <div class="ratingSection">
        <img src={Star} className="starSection" />
        <p className="ratings">{props.rating}</p>
        <p className="reviews">({props.reviewCount})</p>
        <p className="country">{props.location}</p>
      </div>
      <div className="cardTitle">{props.title}</div>
      <div className="cost">
        <b>From ${props.price}</b> / person
      </div>
    </div>
  );
};

export default CardComponent;
