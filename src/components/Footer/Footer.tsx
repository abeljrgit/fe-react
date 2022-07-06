import logoGreen from "../../img/logo-green.svg";
import FacebookLogo from "../Svg/FacebookLogo";
import InstagramLogo from "../Svg/InstagramLogo";
import PinterestLogo from "../Svg/PinterestLogo";
import TwitterLogo from "../Svg/TwitterLogo";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__wrapper">
        <div className="footer__logo">
          <img src={logoGreen} alt="Sunnyside Logo" />
        </div>
        <div className="footer__links">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
        </div>
        <div className="footer__social">
          <a href="#">
            <FacebookLogo />
          </a>
          <a href="#">
            <InstagramLogo />
          </a>
          <a href="#">
            <TwitterLogo />
          </a>
          <a href="#">
            <PinterestLogo />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
