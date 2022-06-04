import star from "../img/icon-star.svg";

function RatingsItem(props: any) {
  const t = props.typeText;

  return (
    <div className="ratings-item">
      <div className="ratings-item__stars">
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
      </div>
      <div className="ratings-item__type">{t}</div>
    </div>
  );
}
export default RatingsItem;
