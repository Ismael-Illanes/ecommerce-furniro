import React from "react";
import "../styles/languages.scss";

import { useTranslation } from "react-i18next";

export default function Languages() {
  const lngs = {
    en: { nativeName: "EN" },
    es: { nativeName: " ES" },
  };
  const { i18n } = useTranslation();

  return (
    <div className="languages-box">
      {Object.keys(lngs).map((lng) => (
        <button
          key={lng}
          className="languages-box__btn"
          style={{
            fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
          }}
          type="submit"
          onClick={() => i18n.changeLanguage(lng)}
        >
          {lngs[lng].nativeName}
        </button>
      ))}
    </div>
  );
}
