import thumbnailDesktop from "../img/image-product-desktop.jpg";
import thumbnailMobile from "../img/image-product-mobile.jpg";
import cartIcon from "../img/icon-cart.svg";

function ProductCard() {
  return (
    <div className="pCard">
      <div className="pCard__left">
        <img src={thumbnailDesktop} alt="Thumbnail" />
        <img src={thumbnailMobile} alt="Thumbnail" />
      </div>
      <div className="pCard__right">
        <span className="pCard__type">PERFUME</span>
        <h1 className="pCard__title">Gabrielle Essence Eau De Parfum</h1>
        <p className="pCard__paragraph">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="pCard__rate">
          <span>$149.99</span>
          <span>$169.99</span>
        </div>
        <a href="#" className="pCard__aoc">
          <img src={cartIcon} alt="Cart Icon" />
          <span>Add to Cart</span>
        </a>
      </div>
    </div>
  );
}
export default ProductCard;
