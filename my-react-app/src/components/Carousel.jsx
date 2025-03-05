import React, { useState, useEffect } from "react";
import arrowBack from "../assets/icones/arrow-back.svg";
import arrowRight from "../assets/icones/arrow-droit.svg";
import "../components/logCarousel.css";

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = pictures.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      {totalImages > 0 && (
        <img
          src={pictures[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
        />
      )}
      {totalImages > 1 && (
        <button className="carousel-button left" onClick={prevSlide}>
          <img src={arrowBack} alt="Previous" className="arrow-icon" />
        </button>
      )}
      {totalImages > 1 && (
        <button className="carousel-button right" onClick={nextSlide}>
          <img src={arrowRight} alt="Next" className="arrow-icon" />
        </button>
      )}
      <div className="carousel-indicator">
        {totalImages > 0 ? `${currentIndex + 1} / ${totalImages}` : "0 / 0"}
      </div>
    </div>
  );
};

export default Carousel;
