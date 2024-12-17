import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ image, altText, title, description, link }) => {
  return (
    <div className="product">
      <img src={image} alt={altText} />
      <h3>{title}</h3>
      <p className="product-description">{description}</p>
      <Link to={link} className="btn">
        Læs mere
      </Link>
    </div>
  );
};

export default ProductCard;