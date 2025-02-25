import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../components/Cart.css"
import mainImage from '../assets/images/main-photo.jpeg'

const Body = () => {
  const [logements, setLogements] = useState([]);
  const navigate = useNavigate();

  //  ce bloc pour tester avec l'API réelle
    /*
  useEffect(() => {
    // Simule une API avec des données statiques
    const fakeData = [
      { id: 1, title: "Appartement cosy", cover: "https://picsum.photos/300" },
      { id: 2, title: "Villa avec piscine", cover: "https://picsum.photos/300" }
    ];

    console.log("Données mockées :", fakeData); // Vérifier dans la console
    setLogements(fakeData);
*/
  
  useEffect(() => {
    fetch(" http://localhost:8080/api/properties") // Appel API
      .then((response) => response.json())
      .then((data) => setLogements(data))
      .catch((error) => console.error("Erreur de chargement :", error)); 
  }, []);

  return (
    <div className="cart-container">
      <div className="banner">
        <img src={mainImage} alt="Bannière" className="banner-img" />
        <h1 className="banner-text">Chez vous, partout et ailleurs</h1>
      </div>

      {/* Galerie des logements */}
      <div className="gallery">
        {logements.map((logement) => (
          <div key={logement.id} className="card" onClick={() => navigate(`/logement/${logement.id}`)}>
            <img src={logement.cover} alt={logement.title} className="card-img" />
            <h2 className="card-title">{logement.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
