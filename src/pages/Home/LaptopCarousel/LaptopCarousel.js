import {Swiper, SwiperSlide} from "swiper/react";
import "./LaptopCarousel.scss";
import {ListLatopProduct} from "../../../dummyData";
import {Navigation} from "swiper";
import ProductItem from "../../../components/ProductItem/ProductItem";
function LaptopCarousel() {
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
          {ListLatopProduct.map((item, index) => (
            <SwiperSlide key={index}>
              <ProductItem item={item}></ProductItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default LaptopCarousel;
