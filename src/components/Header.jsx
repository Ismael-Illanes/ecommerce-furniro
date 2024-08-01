import React from "react";
import "../styles/headerPage.scss";
import headerImages from "../helpers/bannerImages.js";

export default function header() {
  return (
    <div className="header-box">
      <div className="header-items-box">
        <div className="header-logo-box">
          <img src={headerImages.meubelHouseLogo}></img>
          <img src={headerImages.skinClinicLogo}></img>
        </div>
        <div className="header-text-box">
          <a>Home</a>
          <a>Shop</a>
          <a>About</a>
          <a>Contact</a>
        </div>
        <div className="header-icons-box">
          <a>
            <img src={headerImages.alertsIcon}></img>
          </a>
          <a>
            <img src={headerImages.searchIcon}></img>
          </a>
          <a>
            <img src={headerImages.heartIcon}></img>
          </a>
          <a>
            <img src={headerImages.cartIcon}></img>
          </a>
        </div>
      </div>
    </div>
  );
}
