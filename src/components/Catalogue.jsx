import React from "react";
import "../styles/catalogue.scss";
import { Trans, useTranslation } from "react-i18next";

export default function Catalogue({ children }) {
  const { t } = useTranslation();

  return (
    <div className="catalogue-box">
      <h1 className="catalogue-box__title">
        <Trans i18nKey="titles.part1">{t()} Our Products</Trans>
      </h1>
      <div className="products-box">{children}</div>
    </div>
  );
}
