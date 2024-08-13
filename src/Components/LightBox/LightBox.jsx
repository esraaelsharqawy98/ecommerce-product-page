import { useState } from "react";
import CloseIcon from "/images/icon-close.svg";
import PreviousIcon from "/images/icon-previous.svg";
import NextIcon from "/images/icon-next.svg";

import "./LightBox.css";

function LightBox({ toggleLightBox, product }) {
  const [currentIndex, setCurrentIndex] = useState(0);


  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? product.productImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === product.productImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="wrapper light-box">
      <img
        src={CloseIcon}
        alt="close icon"
        className="close-btn"
        onClick={toggleLightBox}
      />
      <section id="product-gallery">
        <div className="current-img">
          <img
            src={PreviousIcon}
            className="arrows left"
            alt="previous"
            onClick={handlePrevious}
          />
          <div className="product-img">
            <img
              src={
                    product.productImages[currentIndex]
                
              }
            />
          </div>
          <img
            src={NextIcon}
            className="arrows right"
            alt="next"
            onClick={handleNext}
          />
        </div>
        <div className="thumbnails">
          {product.thumbnails.map((thumbnail, index) => (
            <div
              key={index}
              className={`thumbnail-img ${
                currentIndex === index ? "active" : ""
              }`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img src={thumbnail} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default LightBox;
