import React from "react";
import "./ShoppingCart.scss";
import ListProduct from "./ListProduct";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {formatCurrency} from "../../../util/formatCurency";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
function Cart(props) {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  var userInfo = useSelector((state) => state.userSignin.userInfo);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.salePrice,
    0
  );

  const Order = () => {
    // if (userInfo) {
    //   navigate("/order");
    // } else {
    //   alert("ban can dang nhap");
    //   navigate("/login");
    // }
    navigate("/order");
  };

  return (
    <section id="shopping-cart">
      <div className="shopping-cart">
        <div className="shopping-cart-header">
          <Link to="/" className="back">
            <ArrowBackIosIcon></ArrowBackIosIcon>
            Trở lại
          </Link>
          <h2 className="shopping-cart-title">Giỏ hàng</h2>
        </div>

        {cartItems ? <ListProduct products={cartItems}></ListProduct> : ""}

        <div className="bottom-button">
          <div className="total-price">
            <span className="left">Tổng tiền tạm tính</span>
            <span className="right">{formatCurrency(totalPrice)}</span>
          </div>
          {totalPrice <= 0 ? (
            ""
          ) : (
            <div className="order">
              <button onClick={Order}> Đặt Hàng </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Cart;
