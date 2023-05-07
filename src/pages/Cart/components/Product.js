import React from "react";
import {useDispatch} from "react-redux";
import {
  AddToCart,
  DeleteToCart,
  DeleteQtyProduct,
} from "../../../actions/CartAction";
import {formatCurrency} from "../../../util/formatCurency";
import {Link} from "react-router-dom";
import imagePath from "../../../assets/imagePath";
Product.propTypes = {};

function Product(props) {
  const {product} = props;
  const dispatch = useDispatch();

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

  return (
    <div className="shopping-cart-list-product">
      <div className="shopping-cart-list-product-block">
        <div className="shopping-cart-list-product-block-left">
          {/* <img src={product.image}></img> */}
          <div className="product-image">
            <img src={imagePath.ip14} />
          </div>
        </div>
        <div className="shopping-cart-list-product-block-right">
          <Link className="product-name">
            {product.name}
            iPad 10.2 2021 64GB | Chính hãng Apple Việt Nam-Xám iPad 10.2 2021
            64GB | Chính hãng Apple Việt Nam-Xám
          </Link>
          <div className="product-box">
            <p className="product-price">
              {formatCurrency(product.salePrice)}6.990.000 ₫
            </p>
            <p className="product-price-old">
              {formatCurrency(product.salePrice)}6.990.000 ₫
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
  );
}

export default Product;
