import React from "react";
import { Trans } from "react-i18next";
import "../styles/headerPage.scss";
import headerImages from "../helpers/bannerImages.js";
import { iconLinks, navLinks } from "../config/constants.js";

export default function Header() {
  return (
    <div className="header-box">
      <div className="header-items-box">
        <div className="header-logo-box">
          <img src={headerImages.meubelHouseLogo} alt="Meubel House" />
          <img src={headerImages.skinClinicLogo} alt="Skin Clinic" />
        </div>
        <div className="header-text-box">
          {navLinks.map((link) => (
            <a
              key={link.key}
              className="header-text-box__link"
              href={link.href}
            >
              <Trans i18nKey={link.key}>{link.defaultText}</Trans>
            </a>
          ))}
        </div>
        <div className="header-icons-box">
          {iconLinks.map((icon, index) => (
            <a key={index} href={icon.href}>
              <img width={24} height={24} src={icon.src} alt={icon.alt} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
