import "./App.scss";
import coverPhoto from "../img/bg-pattern-card.svg";
import profilePhoto from "../img/image-victor.jpg";

function App() {
  return (
    <section className="App">
      <div className="card">
        <div className="card__cover">
          <img src={coverPhoto} alt="Cover Photo" />
        </div>
        <div className="card__profile">
          <div className="card__profile-photo">
            <img src={profilePhoto} alt="Profile Photo" />
          </div>
          <h1 className="card__profile-personal">
            Victor Crest <span>26</span>
          </h1>
          <span className="card__profile-address">London</span>
        </div>
        <div className="card__stats">
          <div className="card__stats-item">
            <span>80K</span>
            <span>Followers</span>
          </div>
          <div className="card__stats-item">
            <span>803K</span>
            <span>Likes</span>
          </div>
          <div className="card__stats-item">
            <span>1.4K</span>
            <span>Photos</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
