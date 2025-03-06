import React, { useState } from "react";
import Collapse from './Collapse';
import "../components/A-cart.css"
import  ChevronDown  from "../assets/icones/dropdown-icone.svg";
import  cartImage  from "../assets/images/AproposImage.svg";
import collapsibleData from "../data/collapsibleData.json";
import Banner from "./Banner";

const ACart = () => {
  return (
    <div className="a-cart-container">
      {/* Image */}
      <Banner imageSrc={cartImage} />

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
