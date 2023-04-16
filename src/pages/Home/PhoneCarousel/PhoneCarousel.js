import "./PhoneCarousel.scss";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper";

import {ListProduct} from "../../../dummyData/index";
import ProductItem from "../../../components/ProductItem/ProductItem";

function PhoneCarousel() {
  return (
    <>
      <div className="phone-seller-container">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={4}
          spaceBetween={20}
          className="mySwiper"
        >
          {ListProduct.map((item, index) => (
            <SwiperSlide key={index}>
              <ProductItem item={item}></ProductItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default PhoneCarousel;
