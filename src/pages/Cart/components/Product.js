import React from "react";
import {useDispatch} from "react-redux";
import {
  AddToCart,
  DeleteToCart,
  DeleteQtyProduct,
} from "../../../actions/CartAction";
import {formatCurrency} from "../../../util/formatCurency";
import {Link, useNavigate} from "react-router-dom";
import {Backdrop, CircularProgress} from "@mui/material";
Product.propTypes = {};

function Product(props) {
  const {product} = props;
  const dataOption = product.option;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleDeleteProduct(product) {
    const action = DeleteToCart(product);
    dispatch(action);
  }

  function handleAddProduct(product) {
    const action = AddToCart(product);
    dispatch(action);
  }

  function handleProductOut(product) {
    const action = DeleteQtyProduct(product);
    dispatch(action);
  }

  const handleNavigateDetail = () => {
    navigate(`/detail/${product.entityId}`);
  };

  return (
    <>
      {product && dataOption && (
        <div className="shopping-cart-list-product">
          <div className="shopping-cart-list-product-block">
            <div
              onClick={handleNavigateDetail}
              className="shopping-cart-list-product-block-left"
            >
              {/* <img src={product.image}></img> */}
              <div className="product-image">
                <img
                  src={dataOption.pictures.length > 0 && dataOption.pictures[0]}
                  alt={dataOption.fullName}
                />
              </div>
            </div>
            <div className="shopping-cart-list-product-block-right">
              <Link className="product-name">{dataOption.fullName}</Link>
              <div className="product-box">
                <p className="product-price">
                  {formatCurrency(dataOption.salePrice)}
                </p>
                <p className="product-price-old">
                  {formatCurrency(dataOption.marketPrice)}
                </p>
              </div>
              <div className="shopping-cart-list-product-bottom">
                <ul className="button-event">
                  <li onClick={() => handleDeleteProduct(product)}>-</li>
                  <li>{product.qty}</li>
                  <li onClick={() => handleAddProduct(product)}>+</li>
                </ul>
                <button
                  className="delete-product"
                  onClick={() => handleProductOut(product)}
                >
                  Xóa khỏi giỏ hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Backdrop
        sx={{color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1}}
        open={!product}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default Product;
