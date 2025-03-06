import React from 'react';
import "../components/Cart.css"

const Banner = ({ imageSrc, text }) => {
  return (
    <div className="banner">
      <img src={imageSrc} alt="Bannière" className="banner-img" />
      {text && <h1 className="banner-text">{text}</h1>}
    </div>
  );
};

export default Banner;