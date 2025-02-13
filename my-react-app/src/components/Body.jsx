import "./Body"
import mainImage from '../assets/images/main-photo.jpeg'

const Body = () => {
  return (
    <div className="cart-container">
      <div className="banner">
        <img src={mainImage} alt="Bannière" className="banner-img" />
        <h1 className="banner-text">Chez vous, partout et ailleurs</h1>
      </div>

      {/* Galerie des logements */}
      <div className="gallery">
       {/* {logements.map((logement) => (
          <div key={logement.id} className="card">
            <img src={logement.image} alt={logement.title} className="card-img" />
            <h2 className="card-title">{logement.title}</h2>
          </div>
        ))}*/}
      </div>
    </div>
  );
};

export default Body;
