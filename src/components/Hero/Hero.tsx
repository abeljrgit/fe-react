import arrDown from "../../img/icon-arrow-down.svg";

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero__intro">
        WE ARE
        <br /> CREATIVES
      </h1>
      <div className="hero__arrow">
        <img src={arrDown} alt="Arrow Down" />
      </div>
    </section>
  );
};

export default Hero;
