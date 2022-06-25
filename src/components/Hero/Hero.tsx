import databizLogo from "../../img/client-databiz.svg";
import audiophileLogo from "../../img/client-audiophile.svg";
import meetLogo from "../../img/client-meet.svg";
import makeLogo from "../../img/client-maker.svg";
import heroImagePc from "../../img/image-hero-desktop.png";
import heroImageSp from "../../img/image-hero-mobile.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__wrapper">
          <div className="hero__left">
            <h1 className="hero__title">
              Make <br />
              remote work
            </h1>
            <p className="hero__paragraph">
              {" "}
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <a href="#" className="hero__button">
              Learn more
            </a>
            <div className="hero__brands">
              <img src={databizLogo} alt="Databiz Logo" />
              <img src={audiophileLogo} alt="Audiophile Logo" />
              <img src={meetLogo} alt="Meet Logo" />
              <img src={makeLogo} alt="Make Logo" />
            </div>
          </div>
          <div className="hero__right">
            <img
              src={heroImagePc}
              alt="Hero Main Image"
              className="hero__mv-pc"
            />
            <img
              src={heroImageSp}
              alt="Hero Main Image"
              className="hero__mv-sp"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
