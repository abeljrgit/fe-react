import { Fragment } from "react";
import "./App.scss";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Portfolio from "./Portfolio/Portfolio";
import egg from "../img/desktop/image-transform.jpg";
import pinkCup from "../img/desktop/image-stand-out.jpg";
import Portfolio2 from "./Portfolio/Portfolio2";
import Testimonials from "./Testimonials/Testimonials";
import Gallery from "./Gallery/Gallery";
import Footer from "./Footer/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Portfolio
        image={egg}
        title="Transform your brand"
        paragraph="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
      />
      <Portfolio
        image={pinkCup}
        title="Stand out to the right audience"
        paragraph="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
        className="portfolio--row-reverse"
        button="pink"
      />
      <Portfolio2 />
      <Testimonials />
      <Gallery />
      <Footer />
    </Fragment>
  );
}

export default App;
