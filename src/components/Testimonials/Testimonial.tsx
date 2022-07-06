const Testimonial = (props: any) => {
  return (
    <div className="testimonial">
      <div className="testimonial__image">
        <img src={props.image} alt="Witness" />
      </div>
      <p className="testimonial__paragraph">{props.testimonial}</p>
      <div className="testimonial__identity">
        <h5 className="testimonial__identity-name">{props.name}</h5>
        <span className="testimonial__identity-position">{props.position}</span>
      </div>
    </div>
  );
};
export default Testimonial;
