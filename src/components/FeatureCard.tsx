function FeatureCard(props: any) {
  return (
    <div className={`fc ${props.className}`}>
      <h3 className="fc__title">{props.fcTitle}</h3>
      <p className="fc__description">{props.fcDescription}</p>
      <div className="fc__icon">
        <img src={props.fcIcon} alt="" />
      </div>
    </div>
  );
}
export default FeatureCard;
