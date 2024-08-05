import React from "react";
import "../styles/idioms.scss";

import { useTranslation } from "react-i18next";

export default function Idioms() {
  const lngs = {
    en: { nativeName: "EN" },
    es: { nativeName: " ES" },
  };
  const { i18n } = useTranslation();

  return (
    <div className="idioms-box">
      {Object.keys(lngs).map((lng) => (
        <button
          key={lng}
          className="idioms-button"
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
