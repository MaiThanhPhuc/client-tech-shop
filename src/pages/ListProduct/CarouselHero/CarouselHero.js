import "./CarouselHero.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation, Pagination, Autoplay} from "swiper";
import imagePath from "../../../assets/imagePath";

function CarouselHero() {
  const ListHeroProduct = [
    {
      name: "test",
      img: imagePath.iphone_vang_14,
    },
    {
      name: "test",
      img: imagePath.iphone11,
    },
  ];
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {ListHeroProduct.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.img} alt={item.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default CarouselHero;
