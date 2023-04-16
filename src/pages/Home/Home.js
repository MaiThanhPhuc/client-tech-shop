import CarouselHome from "./Carousel/CarouselHome";
import "./Home.scss";
import LaptopCarousel from "./LaptopCarousel/LaptopCarousel";
import PhoneCarousel from "./PhoneCarousel/PhoneCarousel";
import ProductSeller from "./ProductSeller/ProductSeller";
function Home() {
  return (
    <>
      <div className="home-container">
        <div className="carousel-wrapper my-2">
          <CarouselHome></CarouselHome>
        </div>
        <div className="best-product-seller">
          <h4 className="header-carousel">sản phẩm bán chạy nhất</h4>
          <ProductSeller></ProductSeller>
        </div>
        <div className="phone-seller">
          <h4 className="header-carousel">điện thoại nổi bật nhất</h4>
          <PhoneCarousel></PhoneCarousel>
        </div>
        <div className="phone-seller">
          <h4 className="header-carousel">lap top nổi bật nhất</h4>
          <LaptopCarousel></LaptopCarousel>
        </div>
      </div>
    </>
  );
}

export default Home;
