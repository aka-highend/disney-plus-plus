import styles from "./ReactSlider.module.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ReactSlider = (props) => {
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 10000,
    autoplaySpeed: 0,
    cssEase: "linear",
    rtl: props.rtl,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className={styles.reactSliderItem}>
        <img src={props.img.img1} alt="" />
      </div>
      <div className={styles.reactSliderItem}>
        <img src={props.img.img2} alt="" />
      </div>
      <div className={styles.reactSliderItem}>
        <img src={props.img.img3} alt="" />
      </div>
      <div className={styles.reactSliderItem}>
        <img src={props.img.img4} alt="" />
      </div>
      <div className={styles.reactSliderItem}>
        <img src={props.img.img5} alt="" />
      </div>
      <div className={styles.reactSliderItem}>
        <img src={props.img.img6} alt="" />
      </div>
    </Slider>
  );
};
