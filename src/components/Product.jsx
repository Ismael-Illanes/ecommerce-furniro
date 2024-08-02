import React from "react";
import PropTypes from "prop-types";
import "../styles/product.scss";

function Product({ id, name, description, price, image }) {
  return (
    <div className="product-box" id={id}>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <h4>{description}</h4>
      <h3>{price}</h3>
    </div>
  );
}

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default Product;
