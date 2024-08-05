import React, { useEffect, useState, useRef } from "react";

import "../styles/modal.scss";
import { FaArrowUp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import headerImages from "../helpers/bannerImages.js";
import { useTranslation } from "react-i18next";
import {
  getColor,
  handleScroll,
  handleClickOutside,
  scrollToTop,
  useEventListener,
} from "../helpers/modalHelpers.js";

export default function Modal() {
  const [primaryColor, setPrimaryColor] = useState("");
  const [showArrow, setShowArrow] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const overlayRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    setPrimaryColor(getColor("--primary"));
    const scrollHandler = () => handleScroll(setShowArrow);

    /* Every time user moves through page 'scrollHandler'' ejecutes */
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  useEventListener("mousedown", (event) =>
    handleClickOutside(event, overlayRef, setShowHeader),
  );

  const toggleHeader = () => {
    setShowHeader((prev) => !prev);
  };

  return (
    <>
      <div className="modal-box">
        <div className="modal-box-sections" onClick={toggleHeader}>
          <GiHamburgerMenu color={primaryColor} size={30} />
        </div>
        {showArrow && (
          <div onClick={scrollToTop} className="modal-box-arrow">
            <FaArrowUp
              color={primaryColor}
              className="modal-box-arrow__img"
              size={30}
            />
          </div>
        )}
      </div>
      {showHeader && (
        <div className="header-overlay" ref={overlayRef}>
          <div className="header-overlay-container__img">
            <img src={headerImages.meubelHouseLogo} alt="Meubel House Logo" />
            <img src={headerImages.skinClinicLogo} alt="Skin Clinic Logo" />
          </div>
          <div className="header-overlay-container__text">
            <a className="heaver-overlay-links" href="#">
              <h1>{t("nav.home")}</h1>
            </a>
            <a className="heaver-overlay-links" href="#">
              <h1>{t("nav.shop")}</h1>
            </a>
            <a className="heaver-overlay-links" href="#">
              <h1>{t("nav.about")}</h1>
            </a>
            <a className="heaver-overlay-links" href="#">
              <h1>{t("nav.contact")}</h1>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
