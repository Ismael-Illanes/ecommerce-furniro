import React from "react";
import "../styles/range.scss";
import { Trans, useTranslation } from "react-i18next";

export default function Range({ children }) {
  const { t } = useTranslation();

  return (
    <div className="range-box">
      <div className="range-box-text">
        <h1>
          <Trans i18nKey="titles.part2">{t()}Browse the Range</Trans>
        </h1>
        <p>
          {" "}
          <Trans i18nKey="titles.part3">
            {t()}We treat the skin with care.
          </Trans>
        </p>
      </div>
      <div className="room-box">{children}</div>
    </div>
  );
}
