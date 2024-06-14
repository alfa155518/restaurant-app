// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow } from "swiper/modules";

import LazyLoad from "react-lazyload";

function SwipperSlider({ arrayImages }) {
  return (
    <>
      <LazyLoad height={200} once={true}>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow]}>
          {arrayImages?.map((imgSrc, i) => {
            return (
              <SwiperSlide key={i}>
                <img src={imgSrc} alt="img" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </LazyLoad>
    </>
  );
}

export default SwipperSlider;
