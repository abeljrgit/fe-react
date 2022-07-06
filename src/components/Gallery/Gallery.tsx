import milkBottles from "../../img/desktop/image-gallery-milkbottles.jpg";
import orange from "../../img/desktop/image-gallery-orange.jpg";
import cone from "../../img/desktop/image-gallery-cone.jpg";
import sugarCubes from "../../img/desktop/image-gallery-sugarcubes.jpg";
import milkBottlesSp from "../../img/mobile/image-gallery-milkbottles.jpg";
import orangeSp from "../../img/mobile/image-gallery-orange.jpg";
import coneSp from "../../img/mobile/image-gallery-cone.jpg";
import sugarCubesSp from "../../img/mobile/image-gallery-sugar-cubes.jpg";

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="gallery__image">
        <img src={milkBottles} alt="Milk Bottles" />
        <img src={milkBottlesSp} alt="Milk Bottles" />
      </div>
      <div className="gallery__image">
        <img src={orange} alt="Orange" />
        <img src={orangeSp} alt="Orange" />
      </div>
      <div className="gallery__image">
        <img src={cone} alt="Cone" />
        <img src={coneSp} alt="Cone" />
      </div>
      <div className="gallery__image">
        <img src={sugarCubes} alt="Sugar Cubes" />
        <img src={sugarCubesSp} alt="Sugar Cubes" />
      </div>
    </section>
  );
};

export default Gallery;
