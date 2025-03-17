import carouselImages from "../helpers/carouselImages";
import "../styles/exploreSection.scss";

export default function ExploreMoreSection() {
  return (
    <div className="explore-section">
      <div className="explore-section__content">
        <div className="explore-section__content__text">
          <div className="explore-section__content__text__title">
            <h2>50+ Beautiful rooms inspiration</h2>
          </div>
          <div className="explore-section__content__text__description">
            <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
          </div>
          <button className="explore-section__content__text__btn">Explore More</button>
        </div>
        <div className="explore-section__content__images">
          <picture>
            <source srcSet={carouselImages.carousel1} width={"375px"} height={"500px"} />
            <img
              src={carouselImages.carousel1}
              width="100%"
              height="100%"
              alt="Banner"
            />
          </picture>
        </div>
      </div>
    </div>
  )
}
