import "./App.scss";
import peopleMeeting from "../img/image-header-desktop.jpg";

function App() {
  return (
    <section className="App">
      <div className="card">
        <div className="card__content">
          <h1 className="card__lead">
            Get <span>insights</span> that help your business grow.
          </h1>
          <p className="card__details">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div className="card__stats">
            <div className="card__stats-item">
              <span>10k+</span>
              <span>COMPANIES</span>
            </div>
            <div className="card__stats-item">
              <span>314</span>
              <span>TEMPLATES</span>
            </div>
            <div className="card__stats-item">
              <span>12M+</span>
              <span>QUERIES</span>
            </div>
          </div>
        </div>
        <div className="card__thumbnail">
          <img src={peopleMeeting} alt="People in meeting" />
        </div>
      </div>
    </section>
  );
}

export default App;
