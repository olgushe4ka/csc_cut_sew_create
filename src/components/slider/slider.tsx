import styles from "./slider.module.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

function SliderMain() {
  return (
    <div className={`${styles.sliderContainer} slider-container `}>
      <Slider {...settings}>
        <div className={styles.slickSlider}>
          <div className={styles.imageContainer}>
            <img
              className={styles.slickSlide}
              src={require("../../images/slide1.jpg")}
              alt="Slide 1"
            />
            <img
              className={styles.slickSlide}
              src={require("../../images/slide2.jpg")}
              alt="Slide 1"
            />
          </div>
        </div>
        <div className={styles.slickSlider}>
          <div className={styles.imageContainer}>
            <img
              className={styles.slickSlide}
              src={require("../../images/slide2.jpg")}
              alt="Slide 1"
            />
            <img
              className={styles.slickSlide}
              src={require("../../images/slide3.jpg")}
              alt="Slide 1"
            />
          </div>
        </div>
        <div className={styles.slickSlider}>
          <div className={styles.imageContainer}>
            <img
              className={styles.slickSlide}
              src={require("../../images/slide3.jpg")}
              alt="Slide 1"
            />
            <img
              className={styles.slickSlide}
              src={require("../../images/slide1.jpg")}
              alt="Slide 1"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SliderMain;
