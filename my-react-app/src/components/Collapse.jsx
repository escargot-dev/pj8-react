import React, { useState } from 'react';

const Collapse = ({ title, children, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bar-item">
      <button className="bar-header" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <img src={icon} alt="Toggle" className={`a-cart-icon ${isOpen ? "rotate" : ""}`} />
      </button>
      {isOpen && <div className="icone-content">{children}</div>}
    </div>
  );
};

export default Collapse;
