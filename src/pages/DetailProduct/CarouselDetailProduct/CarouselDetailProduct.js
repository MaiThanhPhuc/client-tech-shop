import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./CarouselDetailProduct.scss";
import {Navigation} from "swiper";
import imagePath from "../../../assets/imagePath";
function CarouselDetailProduct(props) {
  const {images} = props;
  const ListImg = [
    {
      name: "hero-2",
      src: "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/1/26/637788079927538825_asus-tuf-gaming-fx506lh-den-2022-1.jpg",
    },
    {
      name: "hero-1",
      src: "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/1/26/637788079927538825_asus-tuf-gaming-fx506lh-den-2022-2.jpg",
    },
    {
      name: "hero-3",
      src: "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/1/26/637788079926445424_asus-tuf-gaming-fx506lh-den-2022-3.jpg",
    },
    {
      name: "hero-2",
      src: "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/1/26/637788079927226319_asus-tuf-gaming-fx506lh-den-2022-4.jpg",
    },
    {
      name: "hero-1",
      src: "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/1/26/637788079926757565_asus-tuf-gaming-fx506lh-den-2022-5.jpg",
    },
    {
      name: "hero-3",
      src: "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/1/26/637788079925976574_asus-tuf-gaming-fx506lh-den-2022-6.jpg",
    },
  ];
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {images && images.length > 0 ? (
          images.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="image-wrapper">
                <div className="image-wrapper-item">
                  <img src={item} alt={index} />
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <>Khoong cos anh</>
        )}
      </Swiper>
    </>
  );
}

export default CarouselDetailProduct;
