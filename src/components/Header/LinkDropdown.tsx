import ArrowUpIcon from "../Svg/ArrowUpIcon";
import { useState } from "react";

function Link(props: any) {
  const [isLinksVisible, setIsLinksVisible] = useState(false);

  const linksArray = props.linksData[1].map((data: any, i: number) => {
    return (
      <a href={data.linkUrl} className="dropdown__link" key={i}>
        {data.icon ? <img src={data.icon} alt="Link Icon" /> : ""}
        <span>{data.linkText}</span>
      </a>
    );
  });

  const toggleLinksDropdown = () => {
    setIsLinksVisible(!isLinksVisible);
  };

  return (
    <div className="dropdown">
      <div
        className={`dropdown__title ${
          isLinksVisible ? "dropdown__title--active" : ""
        }`}
        onClick={toggleLinksDropdown}
      >
        <span>{props.linksData[0].title}</span>
        <ArrowUpIcon />
      </div>
      <div
        className={`dropdown__links ${
          props.linkType === "left" ? "dropdown__links--left-0" : ""
        } ${isLinksVisible ? "dropdown__links--visible" : ""}`}
      >
        {linksArray}
      </div>
    </div>
  );
}
export default Link;
