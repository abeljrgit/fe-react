import berry from "../../img/desktop/image-graphic-design.jpg";
import orange from "../../img/desktop/image-photography.jpg";
import berrySp from "../../img/mobile/image-graphic-design.jpg";
import orangeSp from "../../img/mobile/image-photography.jpg";

const Portfolio2 = () => {
  return (
    <section className="portfolio2">
      <div className="portfolio2__left">
        <div className="portfolio2__left-text">
          <h3 className="portfolio2__left-title">Graphic design</h3>
          <p className="portfolio2__left-paragraph">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
        </div>
        <div className="portfolio2__left-image">
          <img src={berry} alt="Berry" />
          <img src={berrySp} alt="Berry" />
        </div>
      </div>
      <div className="portfolio2__right">
        <div className="portfolio2__right-text">
          <h3 className="portfolio2__right-title">Photography</h3>
          <p className="portfolio2__right-paragraph">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
        </div>
        <div className="portfolio2__right-image">
          <img src={orange} alt="Orange" />
          <img src={orangeSp} alt="Orange" />
        </div>
      </div>
    </section>
  );
};
export default Portfolio2;
