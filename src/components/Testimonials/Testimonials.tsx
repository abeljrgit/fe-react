import Testimonial from "./Testimonial";
import emily from "../../img/image-emily.jpg";
import thomas from "../../img/image-thomas.jpg";
import jennie from "../../img/image-jennie.jpg";

const Testimonials = () => {
  const testimonialData = [
    {
      name: "Emily R.",
      position: "Marketing Director",
      testimonial: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
      image: emily,
    },
    {
      name: "Thomas S.",
      position: "Chief Operating Officer",
      testimonial: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
      image: thomas,
    },
    {
      name: "Jennie F.",
      position: "Business Owner",
      testimonial: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
      image: jennie,
    },
  ];

  const testimonialCardElArr = testimonialData.map((data: any, i: number) => {
    return <Testimonial name={data.name} position={data.position} testimonial={data.testimonial} image={data.image} key={i} />;
  });

  return (
    <section className="testimonials">
      <div className="testimonials__wrapper">
        <h4 className="testimonials__title">CLIENT TESTIMONIALS</h4>
        <div className="testimonials__cards">{testimonialCardElArr}</div>
      </div>
    </section>
  );
};

export default Testimonials;
