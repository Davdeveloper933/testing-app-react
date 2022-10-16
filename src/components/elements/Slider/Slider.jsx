import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { swiperData } from "../../../data";
import arrowLeft from "../../../img/icons/arrow-left.svg"
import arrowRight from "../../../img/icons/arrow-right.svg"


import 'swiper/swiper-bundle.css';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import styles from './Slider.module.scss'
// import required modules
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper";

const Slider = () => {
    const [swiper, setSwiper] = React.useState(null);

    const nexto = () => {
      swiper.slideNext();
    };
    const prevto = () => {
        swiper.slidePrev();
      };
    return (
        <div className={styles.Slider}>
                  <Swiper
        onSwiper={(s) => {
            console.log("initialize swiper", s);
            setSwiper(s);
          }}          
        effect="fade"
        autoplay={{
            delay: 1500,
            disableOnInteraction: false
        }}
        loop={true}
        fadeEffect={{
            crossFade: true // enables slides to cross fade
          }}                  
        pagination={true}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        className="mySwiper"
      >
                {swiperData.map((data, key) => {
          return (
            <SwiperSlide key={key}>
              <div className={styles.sliderItem}>
                <img src={data.src} alt="" />
                <button className={styles.swipePrev} onClick={prevto}>
                                <img src={arrowLeft} alt="swipe-prev" />
                        </button>
                        <button className={styles.swipeNext} onClick={nexto}>
                                <img src={arrowRight} alt="swipe-next" />
                        </button>
                <div className={styles.sliderItem__text}>
                    <div className="container">
                        <div className="d-flex align-center">
                            <div className={styles.sliderItem__inner}>
                                <h2 className={styles.subtitle}>{data.subtitle}</h2>
                                <h1 className={styles.title}>{data.title}</h1>
                            </div>
                        </div>
                    </div>
                </div>
              </div>  
            </SwiperSlide>
          );
        })}
      </Swiper>
        </div>
    )
}

export default Slider;