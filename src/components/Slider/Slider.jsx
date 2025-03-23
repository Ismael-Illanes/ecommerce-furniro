import Slider from "react-slick";
import carouselImages from "../../helpers/carouselImages";
import "./Slider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true
      };
    return (
        <div style={{ width: "370px", backgroundColor: "black", height: "500px" }}>
        <Slider {...settings}>

            <div>
                <img height={500} width={370} src={carouselImages.carousel1} alt="1" />
            </div>
            <div>
                <img height={500} width={370} src={carouselImages.carousel1} alt="1" />
            </div>
            <div>
                <img height={500} width={370} src={carouselImages.carousel1} alt="1" />
            </div>

        </Slider>
        </div>
    );
}