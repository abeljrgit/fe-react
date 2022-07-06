import { useEffect, useState } from "react";

const Burger = (props: any) => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const burgerClickHandler = () => {
    if (isBurgerActive) {
      setIsBurgerActive(false);
      props.toggleMenu(false);
    } else {
      setIsBurgerActive(true);
      props.toggleMenu(true);
    }
  };

  useEffect(() => {
    window.matchMedia("(min-width: 768px)").addEventListener("change", function (e: any) {
      if (e.matches === false) {
        setIsBurgerActive(false);
        props.toggleMenu(false);
      }
    });
  }, []);

  return (
    <div className={`burger ${isBurgerActive ? "burger--active" : ""}`} onClick={burgerClickHandler}>
      <div className="burger__wrapper">
        <div className="burger__line">&nbsp;</div>
        <div className="burger__line">&nbsp;</div>
        <div className="burger__line">&nbsp;</div>
      </div>
    </div>
  );
};

export default Burger;
