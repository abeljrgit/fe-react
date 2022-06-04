import TestimonialItem from "./TestimonialsItem";
import coltonImg from "../img/image-colton.jpg";
import ireneImg from "../img/image-irene.jpg";
import annImg from "../img/image-anne.jpg";

function Testimonials() {
  return (
    <div className="testimonials">
      <TestimonialItem
        img={coltonImg}
        personName="Colton Smith"
        verification="Verified Buyer"
        quote="We needed the same printed design as the one we had ordered a week prior.
    Not only did they find the original order, but we also received it in time. Excellent!"
      />
      <TestimonialItem
        img={ireneImg}
        personName="Irene Roberts "
        verification="Verified Buyer"
        quote="Customer service is always excellent and very quick turn around. Completely
    delighted with the simplicity of the purchase and the speed of delivery."
      />
      <TestimonialItem
        img={annImg}
        personName="Anne Wallace "
        verification="Verified Buyer"
        quote="Put an order with this company and can only praise them for the very high
    standard. Will definitely use them again and recommend them to everyone!"
      />
    </div>
  );
}
export default Testimonials;
