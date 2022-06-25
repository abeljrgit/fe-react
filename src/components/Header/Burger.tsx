import { useEffect, useState } from "react";

function Burger(props: any) {
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const onClickHandler = () => {
    setIsBurgerActive(!isBurgerActive);
    props.onToggleBurger();
  };

  useEffect(() => {
    if (isBurgerActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isBurgerActive]);

  window
    .matchMedia("(max-width: 768px)")
    .addEventListener("change", function (e: any) {
      if (e.matches === false) {
        setIsBurgerActive(false);
      }
    });

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
