import egg from "../../img/desktop/image-transform.jpg";

const Portfolio = (props: any) => {
  return (
    <section className={`portfolio ${props.className}`}>
      <div className="portfolio__text">
        <div className="portfolio__text-wrapper">
          <h2 className="portfolio__title">{props.title}</h2>
          <p className="portfolio__paragraph">{props.paragraph}</p>
          <a href="#" className={`portfolio__button ${props.button === "pink" ? "portfolio__button--pink" : ""}`}>
            LEARN MORE
          </a>
        </div>
      </div>
      <div className="portfolio__thumbnail">
        <img src={props.image} alt="Portfolio Thumbnail" />
      </div>
    </section>
  );
};
export default Portfolio;
