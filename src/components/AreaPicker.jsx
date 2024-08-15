import React from "react";
import "../styles/areaPicker.scss";
import { Trans } from "react-i18next";

export default function AreaPicker({ children }) {
  return (
    <div className="areaPicker-box">
      <div className="areaPicker-box__text">
        <h1 className="areaPicker-box__text--info">
          <Trans i18nKey="titles.part2"></Trans>
        </h1>
        <p className="areaPicker-box__text--info">
          {" "}
          <Trans i18nKey="titles.part3">We treat the skin with care.</Trans>
        </p>
      </div>
      <div className="room-box">{children}</div>
    </div>
  );
}
