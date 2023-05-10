import {
  Backdrop,
  CircularProgress,
  FormControlLabel,
  Radio,
  RadioGroup,
  Rating,
} from "@mui/material";
import {Icon} from "@iconify/react";
import "./DetailProduct.scss";
import CarouselDetailProduct from "./CarouselDetailProduct/CarouselDetailProduct";
import {Link, useParams} from "react-router-dom";
import {formatCurrency} from "../../util/formatCurency";
import {useEffect, useState} from "react";
import CustomRadio from "./CustomRadio/CustomRadio";
import Policy from "./Policy/Policy";
import BasicInfo from "./BasicInfo/BasicInfo";
import RatingProduct from "./RatingProduct/RatingProduct";
import Comment from "./Comment/Comment";
import AboutProduct from "./AboutProduct/AboutProduct";
import BlogContent from "./BlogProduct/BlogProduct";
import {AddToCart} from "../../actions/CartAction";
import {useDispatch, useSelector} from "react-redux";
import {getproductById} from "../../actions/ProductAction";
function DetailProduct(props) {
  const [check, setChecked] = useState(true);
  const dispatch = useDispatch();
  const {product} = props;
  const {id} = useParams();

  const [optionNumber, setOptionNumber] = useState(0);
  function handleAddProduct() {
    const productOptionChoose = detailProduct.productOptions[optionNumber];
    console.log(productOptionChoose);
    const productChoose = {
      entityId: detailProduct.id,
      option: productOptionChoose,
    };
    const action = AddToCart(productChoose);
    dispatch(action);
  }
  const detailProduct = useSelector((state) => state.getProductById.product);

  useEffect(() => {
    dispatch(getproductById(id));
  }, [dispatch, id]);

  return (
    <>
      {detailProduct ? (
        <>
          <div className="header-product-detail">
            <div className="header-product-detail__name">
              {detailProduct.productOptions[optionNumber].fullName}
            </div>
            <div className="header-product-detail__right">
              <Rating
                readOnly
                size="small"
                name="simple-controlled"
                value={detailProduct.rate}
              />
              <Link>{detailProduct.countRate} đánh giá</Link>
              <Link>{detailProduct.comments.length} Hỏi & đáp</Link>
            </div>
          </div>
          <div className="divider"></div>
          <div className="row body-product-detail-container">
            <div className="col-6">
              <div className="body-product-detail-right">
                <div className="body-product-detail-right__image">
                  <CarouselDetailProduct
                    images={detailProduct.productOptions[optionNumber].pictures}
                  />
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
                      {formatCurrency(
                        detailProduct.productOptions[optionNumber].salePrice
                      )}
                    </span>
                    <span className="body-product-detail-left__price__left__past">
                      {formatCurrency(
                        detailProduct.productOptions[optionNumber].marketPrice
                      )}
                    </span>
                  </div>
                  <div className="body-product-detail-left__price__right">
                    <span>Trả góp chỉ từ</span>
                    <span>
                      <strong>
                        {formatCurrency(
                          detailProduct.productOptions[optionNumber].salePrice /
                            6
                        )}
                      </strong>{" "}
                      /tháng
                    </span>
                  </div>
                </div>
                <div className="body-product-detail-left__option">
                  <CustomRadio
                    data={detailProduct.productOptions}
                    optionNumber={optionNumber}
                    setOptionNumber={setOptionNumber}
                  />
                </div>
                {/* <div className="body-product-detail-left__store"></div> */}
                {/* <div className="body-product-detail-left__promotion">adwda</div> */}
                <div className="body-product-detail-left__button">
                  <div className="body-product-detail-left__button__buynow">
                    <Link to="/cart" onClick={handleAddProduct}>
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
                <BlogContent content={detailProduct.description} />
              </div>
            </div>

            <div className="col-4">
              <div className="more-product-detail-right">
                <AboutProduct data={detailProduct.specifications} />
              </div>
            </div>

            <div className="col-12">
              <div className="rating-product-detail">
                <RatingProduct data={detailProduct.countRate} />
              </div>
            </div>

            <div className="col-12">
              <div className="qa-product-detail">
                <Comment data={detailProduct.comments} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <Backdrop
          sx={{color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1}}
          open={!detailProduct}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
}

export default DetailProduct;
