import { Trans } from "react-i18next";
import "../styles/headerPage.scss";
import headerImages from "../helpers/bannerImages.js";
import { iconLinks, navLinks } from "../config/constants.js";

export default function Header() {
  return (
    <div className="header-box">
      <div className="header-box__items">
        <div className="header-box__logo">
          <img src={headerImages.meubelHouseLogo} alt="Meubel House" />
          <img src={headerImages.skinClinicLogo} alt="Skin Clinic" />
        </div>
        <div className="header-box__text">
          {navLinks.map((link) => (
            <a
              key={link.key}
              className="header-box__text--link"
              href={link.href}
            >
              <Trans i18nKey={link.key}>{link.defaultText}</Trans>
            </a>
          ))}
        </div>
        <div className="header-box__icons">
          {iconLinks.map((icon, index) => (
            <a key={index} href={icon.href}>
              <img
                className="header-box__img"
                width={24}
                height={24}
                src={icon.src}
                alt={icon.alt}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
