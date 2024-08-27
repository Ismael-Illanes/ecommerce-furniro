import React, { useEffect, useState, useRef } from "react";

import "../styles/modal.scss";
import { FaArrowUp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import headerImages from "../helpers/bannerImages.js";
import { useTranslation } from "react-i18next";
import {
  getColorFromRootStyles,
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
    setPrimaryColor(getColorFromRootStyles("--primary"));
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
        <div className="modal-box__sections" onClick={toggleHeader}>
          <GiHamburgerMenu color={primaryColor} size={30} />
        </div>
        {showArrow && (
          <div onClick={scrollToTop} className="modal-box__arrow">
            <FaArrowUp
              color={primaryColor}
              className="modal-box-__arrow-img"
              size={30}
            />
          </div>
        )}
      </div>
      {showHeader && (
        <div className="header-overlay" ref={overlayRef}>
          <div className="header-overlay__img">
            <img src={headerImages.meubelHouseLogo} alt="Meubel House Logo" />
            <img src={headerImages.skinClinicLogo} alt="Skin Clinic Logo" />
          </div>
          <div className="header-overlay__textbox">
            <a className="heaver-overlay__links" href="#">
              <h1>{t("nav.home")}</h1>
            </a>
            <a className="heaver-overlay__links" href="#">
              <h1>{t("nav.shop")}</h1>
            </a>
            <a className="heaver-overlay__links" href="#">
              <h1>{t("nav.about")}</h1>
            </a>
            <a className="heaver-overlay__links" href="#">
              <h1>{t("nav.contact")}</h1>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
