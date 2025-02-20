import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import arrowBack from "../assets/icones/arrow-back.svg";
import arrowRight from "../assets/icones/arrow-droit.svg";
import "../components/logCarousel.css";

const Carousel = () => {
  const { id } = useParams();
  const [pictures, setPictures] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = pictures.length;

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((response) => response.json())
      .then((data) => {
        const logement = data.find((log) => log.id === id); // 🔹 Trouver le logement avec l'ID correspondant
        if (logement) {
          setPictures(logement.pictures || []);
        } else {
          console.error("Logement non trouvé");
        }
      })
      .catch((error) => console.error("Error fetching pictures:", error));
  }, [id]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  return (
    <div className="fiche-log-content">
      <div className="carousel-container">
        {totalImages > 0 && (
          <img
            src={pictures[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="carousel-image"
          />
        )}
        <button className="carousel-button left" onClick={prevSlide}>
          <img src={arrowBack} alt="Previous" className="arrow-icon" />
        </button>
        <button className="carousel-button right" onClick={nextSlide}>
          <img src={arrowRight} alt="Next" className="arrow-icon" />
        </button>
        <div className="carousel-indicator">
          {totalImages > 0 ? `${currentIndex + 1} / ${totalImages}` : "0 / 0"}
        </div>
      </div>

    </div>
  );
};

export default Carousel;
