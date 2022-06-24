import huddleLogo from "../img/logo.svg";
import heroIllustration from "../img/illustration-mockups.svg";
import Facebook from "./Svg/Facebook";
import Twitter from "./Svg/Twitter";
import Instagram from "./Svg/Instagram";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__wrapper">
          <div className="hero__logo">
            <img src={huddleLogo} alt="Huddle Logo" />
          </div>
          <div className="hero__content">
            <div className="hero__illustration">
              <img src={heroIllustration} alt="Illustration" />
            </div>
            <div className="hero__right">
              <h1>Build The Community Your Fans Will Love</h1>
              <p>
                Huddle re-imagines the way we build communities. You have a
                voice, but so does your audience. Create connections with your
                users as you engage in genuine discussion.
              </p>
              <a href="#">Register</a>
            </div>
          </div>
          <div className="hero__social">
            <div className="hero__social-fb">
              <Facebook />
            </div>
            <div className="hero__social-fb">
              <Twitter />
            </div>
            <div className="hero__social-fb">
              <Instagram />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
