import "./App.scss";
import Intro from "./Intro";
import Ratings from "./Ratings";
import Testimonials from "./Testimonials";

function App() {
  return (
    <section className="social-proof">
      <div className="social-proof__row">
        <Intro />
        <Ratings />
      </div>

      <Testimonials />
    </section>
  );
}

export default App;
