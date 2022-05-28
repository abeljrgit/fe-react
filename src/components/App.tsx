import "./App.scss";
import FaqAccordion from "./FaqAccordion";
import cube from "../img/illustration-box-desktop.svg";
import womanMobile from "../img/illustration-woman-online-mobile.svg";

function App() {
  return (
    <section className="App">
      <div className="card">
        <div className="card__thumbnail">
          <img src={cube} alt="cube" />
          <img src={womanMobile} alt="cube" />
        </div>
        <div className="card__faq">
          <h1 className="card__faq-title">FAQ</h1>
          <FaqAccordion />
        </div>
      </div>
    </section>
  );
}

export default App;
