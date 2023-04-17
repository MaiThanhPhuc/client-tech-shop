import {FormControlLabel, Radio, RadioGroup, Rating} from "@mui/material";
import {Icon} from "@iconify/react";
import "./DetailProduct.scss";
import CarouselDetailProduct from "./CarouselDetailProduct/CarouselDetailProduct";
import {Link} from "react-router-dom";
import {formatCurrency} from "../../util/formatCurency";
import {useState} from "react";
function DetailProduct() {
  const [check, setChecked] = useState(true);
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
            <div className="body-product-detail-right__basic__product__info">
              <ul>
                <li>
                  <p>
                    15.6 inch, 1920 x 1080 Pixels, IPS, 144 Hz, Anti-glare
                    LED-backlit
                  </p>
                </li>
                <li>
                  <p>Intel, Core i5, 10300H</p>
                </li>
                <li>
                  <p>Intel, Core i5, 10300H</p>
                </li>
                <li>
                  <p>Intel, Core i5, 10300H</p>
                </li>
                <li>
                  <p>Intel, Core i5, 10300H</p>
                </li>
                <li>
                  <span>Nhấn để xem chi tiết thông số kỹ thuật</span>
                </li>
              </ul>
            </div>
            <div className="body-product-detail-right__policy">
              <div className="row">
                <span className="col-6">
                  <Icon
                    icon="solar:medal-ribbons-star-outline"
                    width="24"
                    height="24"
                  />
                  <p>Hàng chính hãng</p>
                </span>
                <span className="col-6">
                  <Icon
                    icon="solar:shield-check-bold-duotone"
                    width="24"
                    height="24"
                  />
                  <p>Bảo hành 24 Tháng</p>
                </span>
                <span className="col-6">
                  <Icon icon="tabler:exchange" width="24" height="24" />
                  <p>Chính sách đổi trả</p>
                </span>
                <span className="col-6">
                  <Icon
                    icon="icon-park-twotone:setting-laptop"
                    width="24"
                    height="24"
                  />
                  <p>Hỗ trợ cài đặt miễn phí</p>
                </span>
              </div>
            </div>
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
              <RadioGroup>
                <div className="row body-product-detail-left__option__fisrt">
                  <div className="col-4 body-product-detail-left__option__fisrt__radio">
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      sx={[
                        check && {
                          border: "1px solid #cb1c22",
                        },
                        {
                          borderRadius: 2,
                          display: "flex",
                          textAlign: "center",
                          padding: "0 8px",
                        },
                      ]}
                      label={
                        <>
                          <div className="body-product-detail-left__option__fisrt__radio__name">
                            Ryzen 7 4800H 16GB - 512GB <br /> RTX 3060
                          </div>
                          <div className="body-product-detail-left__option__fisrt__radio__price">
                            {formatCurrency(27990000)}
                          </div>
                        </>
                      }
                      labelPlacement="top"
                    />
                  </div>
                </div>
              </RadioGroup>

              <RadioGroup>
                <div className="body-product-detail-left__option__second">
                  <FormControlLabel
                    value="female"
                    control={<Radio hidden />}
                    sx={[
                      false && {
                        borderColor: "#cb1c22",
                      },
                      {
                        borderRadius: 2,
                        display: "flex",
                        textAlign: "center",
                        padding: "4px 4px",
                        boxShadow: "0 0 3px 0",
                        border: "1px solid #fff",
                        margin: 0,
                        ":hover": {border: "1px solid #cb1c22"},
                      },
                    ]}
                    label={
                      <>
                        <img
                          src="https://cdn2.cellphones.com.vn/50x50,webp,q100/media/catalog/product/2/_/2_64_38.jpg"
                          alt="test"
                        />
                        <div>Đen</div>
                      </>
                    }
                    labelPlacement="top"
                  />
                </div>
              </RadioGroup>
            </div>
            <div className="body-product-detail-left__store">
              <div className="body-product-detail-left__store"></div>
            </div>
            <div className="body-product-detail-left__promotion"></div>
            <div className="body-product-detail-left__button"></div>
          </div>
        </div>
        <div className="col-8">
          <div className="more-product-detail-left">asd</div>
        </div>

        <div className="col-4">
          <div className="more-product-detail-right">daad</div>
        </div>

        <div className="col-12">
          <div className="rating-product-detail">daad</div>
        </div>

        <div className="col-12">
          <div className="qa-product-detail">daad</div>
        </div>
      </div>
    </>
  );
}

export default DetailProduct;
