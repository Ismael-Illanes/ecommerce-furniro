import React from "react";
import { useTranslation, Trans } from "react-i18next";
import "../styles/headerPage.scss";
import headerImages from "../helpers/bannerImages.js";

export default function Header() {
  const { t } = useTranslation();

  return (
    <div className="header-box">
      <div className="header-items-box">
        <div className="header-logo-box">
          <img src={headerImages.meubelHouseLogo} alt="Meubel House" />
          <img src={headerImages.skinClinicLogo} alt="Skin Clinic" />
        </div>
        <div className="header-text-box">
          <a>
            <Trans i18nKey="nav.home">{t("nav.home")}</Trans>
          </a>
          <a>
            <Trans i18nKey="nav.shop">{t("nav.shop")}</Trans>
          </a>
          <a>
            <Trans i18nKey="nav.about">{t("nav.about")}</Trans>
          </a>
          <a>
            <Trans i18nKey="nav.contact">{t("nav.contact")}</Trans>
          </a>
        </div>
        <div className="header-icons-box">
          <a>
            <img src={headerImages.alertsIcon} alt="Alerts" />
          </a>
          <a>
            <img src={headerImages.searchIcon} alt="Search" />
          </a>
          <a>
            <img src={headerImages.heartIcon} alt="Heart" />
          </a>
          <a>
            <img src={headerImages.cartIcon} alt="Cart" />
          </a>
        </div>
      </div>
    </div>
  );
}
