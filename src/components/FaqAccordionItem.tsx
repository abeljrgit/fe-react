import { useState } from "react";
import carretDown from "../img/icon-arrow-down.svg";

function FaqAccordionItem(props: any) {
  const [isAccordOpen, setAccordOpen] = useState(false);
  const q = props.question;
  const a = props.answer;
  const accordOpen = (e: any) => {
    setAccordOpen(!isAccordOpen);
  };

  return (
    <div
      className={`accordion__item js-accordion-item ${
        isAccordOpen ? "accordion__item--opened" : ""
      }`}
      onClick={accordOpen}
    >
      <div className="accordion__parent">
        <span className="accordion__parent-text">{q}</span>
        <div className="accordion__parent-icon">
          <img src={carretDown} alt="Carret down" />
        </div>
      </div>
      <div className="accordion__child">
        <span className="accordion__child-text">{a}</span>
      </div>
    </div>
  );
}
export default FaqAccordionItem;
