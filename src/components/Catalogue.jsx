import React from "react";
import "../styles/catalogue.scss";

export default function Catalogue({ children }) {
  return (
    <div className="catalogue-box">
      <h1>Our Products</h1>
      <div className="products-box">{children}</div>
    </div>
  );
}
