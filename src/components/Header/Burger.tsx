import { useState } from "react";

function Burger(props: any) {
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const onClickHandler = () => {
    setIsBurgerActive(!isBurgerActive);
    props.onToggleBurger();
  };

  return (
    <div
      className={`burger ${isBurgerActive ? "burger--active" : ""}`}
      onClick={onClickHandler}
    >
      <div className="burger__wrapper">
        <div className="burger__line">&nbsp;</div>
        <div className="burger__line">&nbsp;</div>
        <div className="burger__line">&nbsp;</div>
      </div>
    </div>
  );
}
export default Burger;
