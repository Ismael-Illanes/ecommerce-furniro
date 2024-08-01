import React from "react";
import "../styles/banner.scss";
import images from "../helpers/bannerImages.js";

export default function Banner({ children }) {
  return (
    <div className="banner-box">
      {children}
      <img src={images.bannerPicture}></img>
    </div>
  );
}
