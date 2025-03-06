import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import dropdownIcon from "../assets/icones/dropdown-icone.svg";
import "../components/logCarousel.css";
import Collapse from './Collapse';
import Carousel from './Carousel';
import activeStar from "../assets/images/star-active 1.svg"
import inactiveStar from "../assets/images/star-inactive 1.svg"

const LogCarousel = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null);
  const [pictures, setPictures] = useState([]);

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


  if (!logement) { return <p>Chargement...</p>; }

  const rating = Number(logement.rating);

  return (
    <div className="fiche-log-content">
      <Carousel pictures={pictures} />

      <div className="infos-container">
        <div className="logement-info">
          {/* Titre et localisation */}
          <div className="logement-title">
            <h2>{logement.title}</h2>
            <p>{logement.location}</p>
            {/* Tags */}
            <div className="tags-container">
              {logement.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
             ))}
            </div>
          </div>
          <div className="logement-host-rating">
            {/* Hôte */}
            <div className="logement-host">
              <p className="host-name">{logement.host.name}</p>
              <img className="host-picture" src={logement.host.picture} alt={logement.host.name} />
            </div>

            {/* Rating */}
            <div className="rating-container">
              {[1, 2, 3, 4, 5].map((star) => (
                <img
                key={star}
                src={star <= rating ? activeStar : inactiveStar}
                alt={star <= rating ? "Active star" : "Inactive star"}
                className="star"
              />
              ))}
            </div>
          </div>
        </div>

        <div className="accordion-container">
          {/* Description */}
          <Collapse key="description" title="Description" icon={dropdownIcon}>
            <p>{logement.description}</p>
          </Collapse>

          {/* Équipements */}
          <Collapse key="equipments" title="Équipements" icon={dropdownIcon}>
            <ul>
              {logement.equipments.map((equip, index) => (
                <li key={index}>{equip}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </div>  
  );
};

export default LogCarousel;
