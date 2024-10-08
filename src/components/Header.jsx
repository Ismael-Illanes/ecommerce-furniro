import { Trans } from "react-i18next";
import "../styles/headerPage.scss";
import headerImages from "../helpers/bannerImages.js";
import { iconLinks, navLinks } from "../config/constants.js";

export default function Header() {
  return (
    <div className="header-box">
      <div className="header-box__items">
        <div className="header-box__logo">
          <picture>
            <source srcSet={headerImages.meubelHouseLogo} />
            <img
              src={headerImages.meubelHouseLogo}
              width={50}
              height={33}
              alt="House logo"
              title="Icon logo"
            />
          </picture>
          <picture>
            <source srcSet={headerImages.skinClinicLogo} />
            <img
              src={headerImages.skinClinicLogo}
              width={127}
              height={28}
              alt="Text Logo"
              title="Logo"
            />
          </picture>
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
