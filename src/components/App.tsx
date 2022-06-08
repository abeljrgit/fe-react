import "./App.scss";
import baLogo from "../img/logo.svg";
import errorIcon from "../img/icon-error.svg";
import arrowIcon from "../img/icon-arrow.svg";
import heroDesktop from "../img/hero-desktop.jpg";
import heroMobile from "../img/hero-mobile.jpg";

function App() {
  return (
    <section className="App">
      <div className="cs">
        <div className="cs__logo-sp">
          <img src={baLogo} alt="Base Apparel Logo" />
        </div>
        <div className="cs__content">
          <div className="cs__logo">
            <img src={baLogo} alt="Base Apparel Logo" />
          </div>
          <h1 className="cs__title">
            WE'RE <br />{" "}
            <span>
              COMING
              <br /> SOON
            </span>
          </h1>
          <p className="cs__paragraph">
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <form className="cs__email">
            <div className="cs__wrapper">
              <input
                type="email"
                className="cs__email-input"
                placeholder="Email Address"
                required
              />
              <div className="cs__email-error">
                <img src={errorIcon} alt="" />
              </div>
              <span className="cs__email-error-text">
                Please provide a valid email
              </span>
              <button type="submit" className="cs__email-submit-btn">
                <img src={arrowIcon} alt="Carret" />
              </button>
            </div>
          </form>
        </div>
        <div className="cs__thumbnail">
          <img src={heroDesktop} alt="Hero Desktop" />
        </div>
        <div className="cs__thumbnail-sp">
          <img src={heroMobile} alt="Hero Desktop" />
        </div>
      </div>
    </section>
  );
}

export default App;
