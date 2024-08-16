import { useEffect, useState } from "react";
import "./ProductGallery.css";
import LightBox from "../LightBox/LightBox";

function ProductGallery({ product }) {
  const [showLightBox, setShowLightBox] = useState(false);
  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    if (product.productImages && product.productImages.length) {
      setActiveImage(product.productImages[0]);
    }
  }, [product.productImages]);

  function toggleLightBox() {
    setShowLightBox(!showLightBox);
  }

  function changeImage(newImage) {
    setActiveImage(newImage);
  }

  return (
    <>
      {showLightBox && <LightBox toggleLightBox={toggleLightBox} product={product}/>}
      <section className="product-gallery">
        <div className="product-img">
          <img src={activeImage} alt="Product" onClick={toggleLightBox} />
        </div>
        <div className="thumbnails">
          {product.thumbnails?.map((thumbnail, index) => (
            <div
              key={index}
              className={`thumbnail-img ${
                activeImage === product.productImages[index] ? "active" : ""
              }`}
              onClick={() => changeImage(product.productImages[index])}
            >
              <img src={thumbnail} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default ProductGallery;
