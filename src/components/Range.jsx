import React from "react";
import "../styles/range.scss";
import { Trans } from "react-i18next";

export default function Range({ children }) {
  return (
    <div className="range-box">
      <div className="range-box-text">
        <h1 className="range-box-text__info">
          <Trans i18nKey="titles.part2">Browse the Range</Trans>
        </h1>
        <p className="range-box-text__info">
          {" "}
          <Trans i18nKey="titles.part3">We treat the skin with care.</Trans>
        </p>
      </div>
      <div className="room-box">{children}</div>
    </div>
  );
}
