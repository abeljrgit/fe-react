import { useState } from "react";

import todoIcon from "../../img/icon-todo.svg";
import calenderIcon from "../../img/icon-calendar.svg";
import remindersIcon from "../../img/icon-reminders.svg";
import planningIcon from "../../img/icon-planning.svg";

import ArrowUpIcon from "../Svg/ArrowUpIcon";

function SideMenuAccordion(props: any) {
  const [isAccordionActive, setIsAccordionActive] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionActive(!isAccordionActive);
  };

  const linksElementArray = props.linksData[1].map((data: any, i: number) => {
    return (
      <a href={data.linkUrl} className="smAccordion__link" key={i}>
        {data.icon ? <img src={data.icon} alt="Link Logo" /> : ""}
        <span>{data.linkText}</span>
      </a>
    );
  });

  return (
    <div className="smAccordion">
      <div
        className={`smAccordion__head ${
          isAccordionActive ? "smAccordion__head--active" : ""
        }`}
        onClick={toggleAccordion}
      >
        <span>{props.linksData[0].title}</span>
        <ArrowUpIcon />
      </div>
      <div
        className={`smAccordion__body ${
          isAccordionActive ? "smAccordion__body--active" : ""
        }`}
      >
        {linksElementArray}
      </div>
    </div>
  );
}

export default SideMenuAccordion;
