import React from "react";
import "../styles/catalogue.scss";
import { Trans } from "react-i18next";

export default function Catalogue({ children }) {
  return (
    <div className="catalogue-box">
      <h1 className="catalogue-title">
        <Trans i18nKey="titles.part1">Our Products</Trans>
      </h1>
      <div className="products-box">{children}</div>
    </div>
  );
}
