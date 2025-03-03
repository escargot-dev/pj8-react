import React, { useState } from "react";
import Collapse from './Collapse';
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
          <Collapse key={index} title={section.title} icon={ChevronDown}>
            <p>{section.content}</p>
          </Collapse>
        ))}
       </div>
    </div>
  );
};

export default ACart;
