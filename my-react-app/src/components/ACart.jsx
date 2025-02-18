import "../components/A-cart.css"
import  ChevronDown  from "../assets/icones/dropdown-icone.svg";
import  cartImage  from "../assets/images/a-props-photo.jpeg";

const ACart = () => {
  console.log("ACart est rendu");

  return (
    <div className="a-cart-container">
      {/* Image */}
      <img
        src={cartImage}
        alt="À propos"
        className="a-cart-image"
      />

      {/* Groupe de barres */}
      <div className="a-cart-bars">
        {["Fiabilité", "Respect", "Service", "Sécurité"].map((title, index) => (
          <div key={index} className="a-cart-bar">
            <span className="a-cart-title">{title}</span>
            <img src={ChevronDown} alt="Icône dropdown" className="a-cart-icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ACart;
