import "./App.scss";
import luxuryIcon from "../img/icon-luxury.svg";
import sedanIcon from "../img/icon-sedans.svg";
import suvsIcon from "../img/icon-suvs.svg";

function App() {
  return (
    <section className="App">
      <div className="card">
        <div className="card__item card__item--bright-orange">
          <div className="card__logo">
            <img src={sedanIcon} alt="Luxury Icon" />
          </div>
          <h1 className="card__title">SEDANS</h1>
          <p className="card__details">
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </p>
          <a href="#" className="card__learn-more">
            Learn More
          </a>
        </div>
        <div className="card__item card__item--dark-cyan">
          <div className="card__logo">
            <img src={suvsIcon} alt="Luxury Icon" />
          </div>
          <h1 className="card__title">SUVS</h1>
          <p className="card__details">
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </p>
          <a href="#" className="card__learn-more">
            Learn More
          </a>
        </div>
        <div className="card__item card__item--very-dark-cyan">
          <div className="card__logo">
            <img src={luxuryIcon} alt="Luxury Icon" />
          </div>
          <h1 className="card__title">LUXURY</h1>
          <p className="card__details">
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </p>
          <a href="#" className="card__learn-more">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default App;
