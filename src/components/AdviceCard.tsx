import { useState } from "react";
import diceIcon from "../img/icon-dice.svg";
import dividerDesktop from "../img/pattern-divider-desktop.svg";
import dividerMobile from "../img/pattern-divider-mobile.svg";

function AdviceCard() {
  const [advice, setAdvice] = useState({
    id: 117,
    advice:
      "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
  });

  const getAdviceData = () => {
    fetch("https://api.adviceslip.com/advice", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setAdvice(data.slip));
  };

  return (
    <div className="aCard">
      <h1 className="aCard__counter">ADVICE #{`${advice?.id}`}</h1>
      <blockquote className="aCard__advice">{`${advice?.advice}`}</blockquote>
      <div className="aCard__divider">
        <img src={dividerDesktop} alt="Divider" />
      </div>
      <div className="aCard__button" onClick={getAdviceData}>
        <img src={diceIcon} alt="Dice Icon" />
      </div>
    </div>
  );
}

export default AdviceCard;
