import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import arrowBack from "../assets/icones/arrow-back.svg";
import arrowRight from "../assets/icones/arrow-droit.svg";
import "../components/logCarousel.css";

const Carousel = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null);
  const [pictures, setPictures] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = pictures.length;

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((response) => response.json())
      .then((data) => {
        const foundLogement = data.find((log) => log.id === id);
        if (foundLogement) {
          setLogement(foundLogement); 
          setPictures(foundLogement.pictures || []);
        } else {
          navigate("/not-found");
        }
      })
      .catch((error) => console.error("Error fetching pictures:", error));
  }, [id,navigate]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };
  if (!logement) { return <p>Chargement...</p>; }
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

      <div className="logement-info">
        {/* Titre et localisation */}
        <div className="logement-title">
          <h2>{logement.title}</h2>
          <p>{logement.location}</p>
        </div>

        {/* Hôte */}
        <div className="logement-host">
          <p className="host-name">{logement.host.name}</p>
          <img className="host-picture" src={logement.host.picture} alt={logement.host.name} />
        </div>
      </div>

    </div>
  );
};

export default Carousel;
