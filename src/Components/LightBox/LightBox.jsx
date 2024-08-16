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
      <section className="product-gallery">
        <div className="current-img">
          <button className="arrows left" onClick={handlePrevious}>
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 1 3 9l8 8"
                stroke="#1D2026"
                strokeWidth="4"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <div className="product-img">
            <img src={product.productImages[currentIndex]} />
          </div>
          <button className="arrows right" onClick={handleNext}>
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m2 1 8 8-8 8"
                stroke="#1D2026"
                strokeWidth="4"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
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
