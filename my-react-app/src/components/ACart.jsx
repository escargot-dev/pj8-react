import React, { useState } from "react";
import "../components/A-cart.css"
import  ChevronDown  from "../assets/icones/dropdown-icone.svg";
import  cartImage  from "../assets/images/a-props-photo.jpeg";
import collapsibleData from "../data/collapsibleData.json";

const ACart = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCollapse = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="a-cart-container">
      {/* Image */}
      <img src={cartImage} alt="À propos" className="a-cart-image" />

      {/* Groupe de barres */}
      <div className="a-cart-bars">
        {collapsibleData.map((section, index) => (
          <div key={index} className="bar-item">
            <button className="bar-header" onClick={() => toggleCollapse(index)}>{section.title}
              <img src={ChevronDown} alt="Icône dropdown" className={`a-cart-icon ${openIndex === index ? "rotate" : ""}`} />
            </button>
            {openIndex === index && <p className="icone-content">{section.content}</p>}
          
          </div>
        ))}
       </div>
    </div>
  );
};

export default ACart;
