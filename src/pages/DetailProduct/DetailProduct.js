import {FormControlLabel, Radio, RadioGroup, Rating} from "@mui/material";
import {Icon} from "@iconify/react";
import "./DetailProduct.scss";
import CarouselDetailProduct from "./CarouselDetailProduct/CarouselDetailProduct";
import {Link} from "react-router-dom";
import {formatCurrency} from "../../util/formatCurency";
import {useState} from "react";
import CustomRadio from "./CustomRadio/CustomRadio";
import Policy from "./Policy/Policy";
import BasicInfo from "./BasicInfo/BasicInfo";
import RatingProduct from "./RatingProduct/RatingProduct";
import Comment from "./Comment/Comment";
import AboutProduct from "./AboutProduct/AboutProduct";
import BlogContent from "./BlogProduct/BlogProduct";
function DetailProduct() {
  const [check, setChecked] = useState(true);

  function handleAddProduct(product) {
    console.log(1);
  }

  return (
    <>
      <div className="header-product-detail">
        <div className="header-product-detail__name">
          Laptop Asus TUF Gaming FX506LHB-HN188W i5
          10300H/8GB/512GB/15.6"FHD/GTX 1650 4GB/Win11
        </div>
        <div className="header-product-detail__right">
          <Rating readOnly size="small" name="simple-controlled" value={5} />
          <Link>237 đánh giá</Link>
          <Link>514 Hỏi & đáp</Link>
        </div>
      </div>
      <div className="divider"></div>
      <div className="row body-product-detail-container">
        <div className="col-6">
          <div className="body-product-detail-right">
            <div className="body-product-detail-right__image">
              <CarouselDetailProduct />
            </div>
            <BasicInfo />
            <Policy />
          </div>
        </div>
        <div className="col-6">
          <div className="body-product-detail-left">
            <div className="body-product-detail-left__price">
              <div className="body-product-detail-left__price__left">
                <span className="body-product-detail-left__price__left__current">
                  {formatCurrency(12000000)}
                </span>
                <span className="body-product-detail-left__price__left__past">
                  {formatCurrency(22000000)}
                </span>
              </div>
              <div className="body-product-detail-left__price__right">
                <span>Trả góp chỉ từ</span>
                <span>
                  <strong>{formatCurrency(1920000)}</strong> /tháng
                </span>
              </div>
            </div>
            <div className="body-product-detail-left__option">
              <CustomRadio type={1} />
              <CustomRadio type={2} />
            </div>
            <div className="body-product-detail-left__store"></div>
            <div className="body-product-detail-left__promotion">adwda</div>
            <div className="body-product-detail-left__button">
              <div className="body-product-detail-left__button__buynow">
                <Link to="/cart" onClick={() => handleAddProduct(1)}>
                  <strong>MUA NGAY</strong>
                  <br></br>
                  <span>(Giao tận nơi hoặc lấy tại cửa hàng)</span>
                </Link>
              </div>
              <div className="body-product-detail-left__button__installment">
                <a href="">
                  <strong>TRẢ GÓP 0%</strong>
                  <br></br>
                  <span>(Xét duyệt qua điện thoại)</span>
                </a>
                <a href="">
                  <strong>TRẢ GÓP QUA THẺ</strong>
                  <br></br>
                  <span>(Visa, Master, JCB)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="more-product-detail-left">
            <BlogContent />
          </div>
        </div>

        <div className="col-4">
          <div className="more-product-detail-right">
            <AboutProduct />
          </div>
        </div>

        <div className="col-12">
          <div className="rating-product-detail">
            <RatingProduct />
          </div>
        </div>

        <div className="col-12">
          <div className="qa-product-detail">
            <Comment />
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailProduct;
