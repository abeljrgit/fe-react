import EllipsisIcon from "./Svg/EllipsisIcon";

function CategoryCard(props: any) {
  return (
    <div className="cCard">
      <div className={`cCard__color ${props.className}`}>
        <img src={props.thumb} alt="Theme Image" />
      </div>
      <div className="cCard__content">
        <div className="cCard__content-row">
          <span>{props.category}</span>
          <EllipsisIcon />
        </div>
        <div className="cCard__content-time">
          <h2 className="cCard__content-current">{props.current}hrs</h2>
          <h3 className="cCard__content-previous">
            Last {props.rangeType} - {props.previous}hrs
          </h3>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
