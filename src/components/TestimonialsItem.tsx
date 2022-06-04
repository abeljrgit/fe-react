function TestimonialItem(props: any) {
  const i = props.img;
  const pn = props.personName;
  const v = props.verification;
  const q = props.quote;

  return (
    <div className="testimonial-item">
      <div className="testimonial-item__profile">
        <div className="testimonial-item__image">
          <img src={i} alt="Person Image" />
        </div>
        <div className="testimonial-item__profile-right">
          <span className="testimonial-item__name">{pn}</span>
          <span className="testimonial-item__verification">{v}</span>
        </div>
      </div>

      <blockquote className="testimonial-item__quote">{q}</blockquote>
    </div>
  );
}
export default TestimonialItem;
