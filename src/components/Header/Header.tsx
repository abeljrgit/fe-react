import { useState } from "react";
import logo from "../../img/logo.svg";
import Burger from "./Burger";

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const menuStateHandler = (val: boolean) => {
    setIsMenuActive(val);
  };

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <img src={logo} alt="Sunnyside Logo" />
        </div>
        <div className={`header__links ${isMenuActive ? "header__links--active" : ""}`}>
          <a href="#" className="header__link">
            About
          </a>
          <a href="#" className="header__link">
            Service
          </a>
          <a href="#" className="header__link">
            Projects
          </a>
          <a href="#" className="header__link header__link--contact">
            Contact
          </a>
        </div>
        <Burger toggleMenu={menuStateHandler} />
      </div>
    </header>
  );
};

export default Header;
