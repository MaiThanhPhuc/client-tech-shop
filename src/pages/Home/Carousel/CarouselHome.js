import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./CarouselHome.scss";
import {Navigation} from "swiper";
import imagePath from "../../../assets/imagePath";
function CarouselHome() {
  const ListImg = [
    {
      name: "hero-2",
      src: imagePath.hero_iphone14pro,
    },
    {
      name: "hero-1",
      src: imagePath.hero_iphone14,
    },
    {
      name: "hero-3",
      src: imagePath.macbook_pro_14,
    },
  ];
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {ListImg.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.src} alt={item.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default CarouselHome;
