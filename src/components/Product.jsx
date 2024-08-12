import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useTranslation, Trans } from "react-i18next";

import "../styles/product.scss";

import { overlayLinks } from "../config/constants.js";

function Product({ id, name, description, price, image }) {
  const { t, i18n } = useTranslation();
  const [isSpanish, setIsSpanish] = useState(false);

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setIsSpanish(lng === "es");
    };
    handleLanguageChange(i18n.language);

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

  return (
    <div className="product-box" id={id}>
      <picture>
        <source width={285} height={301} srcSet={image} />
        <img
          width={285}
          height={301}
          className="product-box__image"
          loading="lazy"
          src={image}
          alt={name}
        />
      </picture>
      <h1 className="product-box__title">{name}</h1>
      <p className="product-box__description">{t(description)}</p>
      <h3 className="product-box__price">
        {price !== null ? price : "Price not available"}
      </h3>
      <div className="product-box__overlay">
        <div
          className={`product-box__CTA ${isSpanish ? "product-box__CTA--es" : ""}`}
        >
          <button className="product-box__CTA-btn">
            <Trans i18nKey="CTA.action1">Add to cart</Trans>
          </button>
          <ul className="product-box__CTA-list">
            {overlayLinks.map((CTA, index) => (
              <li className="product-box__CTA-item" key={index}>
                <span>
                  <a href={CTA.href} className="product-box__CTA-link">
                    <picture>
                      <source srcSet={CTA.imgSrc} />
                      <img
                        className="product-box__CTA-icon"
                        src={CTA.imgSrc}
                        alt={CTA.alt}
                      />
                    </picture>
                    {t(CTA.text)}
                  </a>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
};

Product.defaultProps = {
  name: "Unnamed Product",
  description: "default.description",
  price: null,
  image: "/public/catalogue/Default.webp",
};

export default Product;
