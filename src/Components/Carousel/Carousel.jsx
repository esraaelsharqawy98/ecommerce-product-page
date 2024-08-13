import { useState } from "react";
import "./Carousel.css";

function Carousel({product}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const productImages = product?.productImages || [];
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="product-carousel">
      <img
        src="/images/icon-previous.svg"
        className="arrows left"
        alt="previous"
        onClick={handlePrevious}
      />
      <div className="product-carousel-item">
        <img src={productImages[currentIndex]} />
      </div>
      <img
        src="/images/icon-next.svg"
        className="arrows right"
        alt="next"
        onClick={handleNext}
      />
    </div>
  );
}

export default Carousel;
