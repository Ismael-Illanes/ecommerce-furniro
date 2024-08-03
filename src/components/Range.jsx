import React from "react";
import "../styles/range.scss";
import { Trans } from "react-i18next";

export default function Range({ children }) {
  return (
    <div className="range-box">
      <div className="range-box-text">
        <h1>
          <Trans i18nKey="tittles.part2">Browse the Range</Trans>
        </h1>
        <p>
          {" "}
          <Trans i18nKey="tittles.part3">We treat the skin with care.</Trans>
        </p>
      </div>
      <div className="room-box">{children}</div>
    </div>
  );
}
