import "/src/components/CardComponent/CardComponent.css";
import KatiePicture from "/src/assets/Katie-Picture.png";
import Star from "/src/assets/Star.png";

const CardComponent = (props) => {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="cardComponent">
      {badgeText && <div className="badgeClass">{badgeText}</div>}
      <img src={"/src/assets/" + props.coverImg} className="pictureSection" />
      <div className="ratingSection">
        <img src={Star} className="starSection" />
        <p className="ratings">{props.stats.rating}</p>
        <p className="reviews">({props.stats.reviewCount})</p>
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
