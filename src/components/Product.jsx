import React from "react";
import PropTypes from "prop-types";
import "../styles/product.scss";
import { useTranslation } from "react-i18next";

function Product({ id, name, description, price, image }) {
  const { t } = useTranslation();

  return (
    <div className="product-box" id={id}>
      <picture>
        <source srcSet={image} />
        <img className="product-image" loading="lazy" src={image} alt={name} />
      </picture>
      <h1 className="product-title">{name}</h1>
      <p className="product-description">{t(description)}</p>
      <h3 className="product-price">{price !== null ? price : 'Price not available'}</h3>
    </div>
  );
}

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string
};

Product.defaultProps = {
  name: 'Unnamed Product',
  description: 'default.description',
  price: null,
  image: '/public/catalogue/Default.webp' 
};

export default Product;
