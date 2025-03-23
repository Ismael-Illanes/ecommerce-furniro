import "../styles/exploreSection.scss";
import SimpleSlider from "./Slider/Slider";

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
          <SimpleSlider />
        </div>
      </div>
    </div>
  )
}
