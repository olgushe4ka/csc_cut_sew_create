import styles from "./slider.module.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from "../../images/slider/Гостиная 1 (1).jpg";
import slide2 from "../../images/slider/Гостиная 1 (4).jpg";
import slide3 from "../../images/slider/Гостиная 1 (5).jpg";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function SliderMain() {
  return (
    <div className={`${styles.sliderContainer} slider-container `}>
      <Slider {...settings}>
        <div className={styles.slickSlider}>
          <div className={styles.imageContainer}>
            <img className={styles.slickSlide} src={require("../../images/slide1.jpg")} alt="Slide 1" />
            <img className={styles.slickSlide} src={require("../../images/slide2.jpg")} alt="Slide 1" />
          </div>
        </div>
        <div className={styles.slickSlider}>
        <div className={styles.imageContainer}>
        <img className={styles.slickSlide} src={require("../../images/slide2.jpg")} alt="Slide 1" />
        <img className={styles.slickSlide} src={require("../../images/slide3.jpg")} alt="Slide 1" />
          </div>
        </div>
        <div className={styles.slickSlider}>
        <div className={styles.imageContainer}>
        <img className={styles.slickSlide} src={require("../../images/slide3.jpg")} alt="Slide 1" />
        <img className={styles.slickSlide} src={require("../../images/slide1.jpg")} alt="Slide 1" />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SliderMain;
