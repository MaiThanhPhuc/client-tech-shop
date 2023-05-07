import React, {useEffect, useState} from "react";
import "./Order.scss";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {
  GetAllDistrict,
  GetAllProvince,
  GetAllWard,
  OrderInfo,
} from "../../actions/OrderAction";
import {useNavigate} from "react-router-dom";
import Payment from "./components/Payment";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

function Order() {
  const dispatch = useDispatch();
  const {register, handleSubmit} = useForm();

  const allProvince = useSelector((state) => state.address.province);
  const allDistrict = useSelector((state) => state.address.district);
  const allWard = useSelector((state) => state.address.ward);

  const [listProvince, setListProvince] = useState(false);
  const [listDistrict, setListDistrict] = useState(false);
  const [listWard, setListWard] = useState(false);

  const [chooseProvince, setChooseProvince] = useState({name: "Tỉnh"});
  const [chooseDistrict, setChooseDistrict] = useState({name: "Quận / Huyện"});
  const [chooseWard, setChooseWard] = useState({name: "Phường / Xã"});

  const handleListProvince = (e) => {
    e.preventDefault();
    setListProvince(!listProvince);
  };
  const handleListDistrict = (e) => {
    e.preventDefault();
    setListDistrict(!listDistrict);
  };
  const handleListWard = (e) => {
    e.preventDefault();
    setListWard(!listWard);
  };

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.salePrice,
    0
  );
  const userInfo = useSelector((state) => state.userSignin.userInfo);

  const onSubmit = async (data) => {
    if (!data) {
      alert("Bạn hãy nhập đầy đủ thông tin");
      return;
    }
    const Order = {
      to_ward_code: chooseWard.id,
      to_district_id: chooseDistrict.id,

      orderItems: [...cartItems],
      shippingAddress: {
        ...data,
        province: chooseProvince.name,
        district: chooseDistrict.name,
        ward: chooseWard.name,
      },
      totalPrice: totalPrice,
      name: userInfo.name,
      user: userInfo,
    };

    await dispatch(OrderInfo(Order));
  };

  useEffect(() => {
    dispatch(GetAllProvince());
  }, []);

  const handleSelectProvince = (name, id) => {
    setChooseProvince({name, id});
    setListProvince(!listProvince);
    setChooseDistrict({name: "Quận / Huyện"});
    setChooseWard({name: "Phường / Xã"});
    dispatch(GetAllDistrict(id));
  };

  const handleSelectDistrict = (name, id) => {
    setChooseDistrict({name, id});
    setListDistrict(!listDistrict);
    setChooseWard({name: "Phường / Xã"});
    dispatch(GetAllWard(id));
  };

  const handleSelectWard = (name, id) => {
    setChooseWard({name, id});
    setListWard(!listWard);
  };
  return (
    <>
      <div id="order">
        <div className="order-content">
          <form className="order-page" onSubmit={handleSubmit(onSubmit)}>
            <h4>Thông tin đặt hàng</h4>
            <div className="customer">
              <h5>Thông tin khách hàng</h5>
              <div className="form-customer">
                <input
                  placeholder="Họ và tên"
                  {...register("name")}
                  required
                ></input>
                <input
                  placeholder="Số điện thoại"
                  {...register("phone")}
                  required
                ></input>
              </div>
            </div>

            <div className="address">
              <h5>Chọn cách thức giao hàng</h5>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="ship"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="ship"
                    control={<Radio />}
                    label="Giao tận nơi"
                  />
                  <FormControlLabel
                    value="store"
                    control={<Radio />}
                    label="Nhận tại cửa hàng"
                  />
                </RadioGroup>
              </FormControl>
              <div className="address-form">
                <div className="province">
                  {allProvince ? (
                    <button className="" onClick={(e) => handleListProvince(e)}>
                      {chooseProvince.name}
                    </button>
                  ) : (
                    <button className="" onClick={(e) => handleListProvince(e)}>
                      {chooseProvince.name}
                    </button>
                  )}
                  {listProvince ? (
                    <div className="select">
                      <div className="select-list">
                        <aside>
                          {allProvince
                            ? allProvince.data.map((item) => (
                                <span
                                  onClick={() =>
                                    handleSelectProvince(
                                      item.ProvinceName,
                                      item.ProvinceID
                                    )
                                  }
                                >
                                  {item.ProvinceName}
                                </span>
                              ))
                            : ""}
                        </aside>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="province">
                  {chooseProvince ? (
                    <button className="" onClick={(e) => handleListDistrict(e)}>
                      {chooseDistrict.name}
                    </button>
                  ) : (
                    <button
                      className=""
                      onClick={(e) => handleListProvince(e)}
                      disabled="disabled"
                    >
                      {chooseDistrict.name}
                    </button>
                  )}
                  {listDistrict ? (
                    <div className="select">
                      <div className="select-list">
                        <aside>
                          {allDistrict
                            ? allDistrict.data.map((item) => (
                                <span
                                  onClick={() =>
                                    handleSelectDistrict(
                                      item.DistrictName,
                                      item.DistrictID
                                    )
                                  }
                                >
                                  {item.DistrictName}
                                </span>
                              ))
                            : ""}
                        </aside>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="province">
                  {chooseWard ? (
                    <button className="" onClick={(e) => handleListWard(e)}>
                      {chooseWard.name}
                    </button>
                  ) : (
                    <button
                      className=""
                      onClick={(e) => handleListWard(e)}
                      disabled
                    >
                      {chooseWard.name}
                    </button>
                  )}
                  {listWard ? (
                    <div className="select">
                      <div className="select-list">
                        <aside>
                          {allWard && allWard.data !== null
                            ? allWard.data.map((item) => (
                                <span
                                  onClick={() =>
                                    handleSelectWard(
                                      item.WardName,
                                      item.WardCode
                                    )
                                  }
                                >
                                  {item.WardName}
                                </span>
                              ))
                            : ""}
                        </aside>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="province">
                  <input
                    placeholder="Số nhà, đường ..."
                    {...register("more")}
                    required
                  ></input>
                </div>
              </div>
            </div>
            <Payment></Payment>
          </form>
        </div>
      </div>
    </>
  );
}

export default Order;
