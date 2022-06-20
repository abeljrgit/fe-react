import { useState, useRef } from "react";
import "./App.scss";
import pingLogo from "../img/logo.svg";
import dashboardIllustration from "../img/illustration-dashboard.png";
import facebookLogo from "../img/facebook-logo.svg";
import twitterLogo from "../img/twitter-logo.svg";
import instagramLogo from "../img/instagram-logo.svg";

function App() {
  const emailInput = useRef<any>(null);

  const [isEmailValid, setIsEmailValid] = useState(true);

  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const checkEmailValidity = () => {
    emailRegex.test(emailInput.current.value)
      ? setIsEmailValid(true)
      : setIsEmailValid(false);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    checkEmailValidity();
  };

  return (
    <section className="App">
      <div className="App__container">
        <div className="App__wrapper">
          <div className="ping">
            <div className="ping__logo">
              <img src={pingLogo} alt="Ping Logo" />
            </div>
            <h1 className="ping__title">
              We are launching <span>soon!</span>
            </h1>
            <h2 className="ping__lead">Subscribe and get notified</h2>
            <form className="ping__email" onSubmit={submitHandler}>
              <div className="ping__email-input">
                <input
                  type="email"
                  placeholder="Your email address..."
                  ref={emailInput}
                  onChange={checkEmailValidity}
                />
                <span
                  className={`ping__email-warning ${
                    isEmailValid ? "" : "ping__email-warning--show"
                  }`}
                >
                  Please provide a valid email address
                </span>
              </div>
              <button className="ping__email-btn">Notify Me</button>
            </form>
            <div className="ping__dashboard-illustration">
              <img src={dashboardIllustration} alt="Dashboard Illustration" />
            </div>
            <div className="ping__socials">
              <a href="#" className="ping__social-link">
                <img src={facebookLogo} alt="Facebook Logo" />
              </a>
              <a href="#" className="ping__social-link">
                <img src={twitterLogo} alt="Twitter Logo" />
              </a>
              <a href="#" className="ping__social-link">
                <img src={instagramLogo} alt="Instagram Logo" />
              </a>
            </div>
            <span className="ping__copyright">
              &copy; Copyright Ping. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
