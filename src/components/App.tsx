import { useState } from "react";
import "./App.scss";
import drawer from "../img/drawers.jpg";
import avatarMichelle from "../img/avatar-michelle.jpg";
import facebookIcon from "../img/icon-facebook.svg";
import twitterIcon from "../img/icon-twitter.svg";
import pinterestIcon from "../img/icon-pinterest.svg";

function App() {
  const [isShareButtonActive, setShareButtonActive] = useState(false);
  const shareBtnClickHandler = (e: any) => {
    setShareButtonActive(!isShareButtonActive);
  };

  return (
    <section className="App">
      <div className="card">
        <div className="card__wrapper">
          <div className="card__thumbnail">
            <img src={drawer} alt="Drawer" />
          </div>
          <div className="card__content">
            <h1 className="card__content-title">
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h1>
            <p className="card__content-paragraph">
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips to
              help you make any room feel complete.
            </p>
            <div className="card__last-row">
              <div className="card__profile">
                <div className="card__profile-image">
                  <img src={avatarMichelle} alt="Avatar" />
                </div>
                <div className="card__profile-info">
                  <span className="card__profile-name">Michelle Appleton</span>
                  <span className="card__profile-date">28 Jun 2020</span>
                </div>
              </div>
              <div
                className={`card__share-btn ${
                  isShareButtonActive ? "card__share-btn--active" : ""
                }`}
                onClick={shareBtnClickHandler}
              >
                <div className="card__share-btn-wrapper">&nbsp;</div>
              </div>
            </div>
          </div>
          <div
            className={`card__social ${
              isShareButtonActive ? "card__social--active" : ""
            }`}
          >
            <div className="card__social-wrapper">
              <a href="#">
                <span className="card__social-content-text">SHARE</span>
              </a>
              <a href="#">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="#">
                <img src={twitterIcon} alt="Twitter" />
              </a>
              <a href="#">
                <img src={pinterestIcon} alt="Pinterest" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
