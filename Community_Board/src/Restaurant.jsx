import React from "react";
import "./Restaurant.css";

const Restaurant = ({ image, title, buttonLink }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <a href={buttonLink} className="card-button">
          Click Me
        </a>
      </div>
    </div>
  );
};

export default Restaurant;
