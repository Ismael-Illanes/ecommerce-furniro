import "../styles/banner.scss";
import images from "../helpers/bannerImages.js";

export default function Banner({ children }) {
  return (
    <div className="banner-box">
      {children}
      <picture>
        <source srcSet={images.bannerPicture} width={"100%"} height={"auto"} />
        <img
          src={images.bannerPicture}
          width="100%"
          height="auto"
          alt="Banner"
        />
      </picture>
    </div>
  );
}
