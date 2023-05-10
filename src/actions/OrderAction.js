import axios from "axios";
import {BASE_URL} from "../constants/UserConstant";

let config = {
  headers: {
    "Content-Type": "application/json",
    Token: "b1e1bbcb-ef7f-11eb-9388-d6e0030cbbb7",
  },
};

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    const {
      userSignin: {userInfo},
    } = getState();

    const {data} = await axios.post(`${BASE_URL}/api/order`, {
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2NDNhNTQwMzAyMWJkNTFkYWUxNTdiMzYiLCJmaXJzdE5hbWUiOiJhZG1pblN5c3RlbSIsImxhc3ROYW1lIjoiYWRtaW5TeXN0ZW0iLCJyb2xlIjoiYWRtaW5TeXN0ZW0iLCJpc3MiOiJodHRwczovL2tsdG4tZWNvbW1lcmNlLmhlcm9rdWFwcC5jb20vYXBpL2xvZ2luIiwiaWQiOiJhZG1pblN5c3RlbSIsImV4cCI6MTY4NTAzNTc5NywiZW1haWwiOiJhZG1pblN5c3RlbSIsImF2dCI6ImFkbWluU3lzdGVtIn0.4ROBeFghOOD1bwPTtZh0pEcHR2bBwhvnfjr7wkU5szQ`,
      },
      data: JSON.stringify(order),
    });
    dispatch({type: "ORDER_CREATE-SUCCESS", payload: data});
    dispatch({type: "CART_EMTY"});
    localStorage.removeItem("cartItems");
  } catch (error) {}
};

export const updateOrder = (orderId, order) => async (dispatch, getState) => {
  try {
    const {
      userSignin: {userInfo},
    } = getState();

    const {data} = await axios.post(
      `${BASE_URL}/api/order/update/${orderId}`,
      order,
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    dispatch({type: "ORDER_UPDATE-SUCCESS", payload: data});
  } catch (error) {}
};

export const cancelOrder = (orderId) => async (dispatch, getState) => {
  try {
    const {data} = await axios.post(`${BASE_URL}/api/order/cancel/${orderId}`);
    dispatch({type: "CANCEL_ORDER", payload: data});
  } catch (error) {}
};

export const getAllOrder = () => async (dispatch, getState) => {
  try {
    const {
      userSignin: {userInfo},
    } = getState();
    const {data} = await axios.get(`${BASE_URL}/api/order/`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({type: "GET_ALL_ORDER", payload: data});
  } catch (error) {}
};

export const RemoveAllOrder = () => async (dispatch, getState) => {
  dispatch({type: "REMOVE_ALL_ORDER"});
};

// export const GetAllOrderPaypal = () => async (dispatch, getState) => {
//   try {
//     const {
//       userSignin: { userInfo },
//     } = getState();
//     const { data } = await axios.get(`${BASE_URL}/api/order/orderPaypal`, {
//       headers: {
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     });
//     dispatch({ type: "GET_ALL_ORDER_PAYPAL", payload: data });
//   } catch (error) {
//   }
// };

export const GetAllOrderPendding = () => async (dispatch, getState) => {
  try {
    const {
      userSignin: {userInfo},
    } = getState();
    const {data} = await axios.get(`${BASE_URL}/api/order/orderPendding`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({type: "GET_ALL_ORDER_PENDDING", payload: data});
  } catch (error) {}
};

export const GetAllOrderShipping = () => async (dispatch, getState) => {
  try {
    const {
      userSignin: {userInfo},
    } = getState();
    const {data} = await axios.get(`${BASE_URL}/api/order/orderShipping`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({type: "GET_ALL_ORDER_SHIPPING", payload: data});
  } catch (error) {}
};

export const GetAllOrderPaid = () => async (dispatch, getState) => {
  try {
    const {
      userSignin: {userInfo},
    } = getState();
    const {data} = await axios.get(`${BASE_URL}/api/order/orderPaid`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({type: "GET_ALL_ORDER_PAID", payload: data});
  } catch (error) {}
};

export const deleteOrder = (orderId) => async (dispatch, getState) => {
  try {
    const {
      userSignin: {userInfo},
    } = getState();
    const {data} = await axios.delete(
      `${BASE_URL}/api/order/delete/${orderId}`,
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    dispatch({type: "DELETE_ORDER", payload: data});
  } catch (error) {}
};

export const ShippingOrder = (orderId) => async (dispatch, getState) => {
  try {
    const {
      userSignin: {userInfo},
    } = getState();

    const {data} = await axios.put(
      `${BASE_URL}/api/order/shipping/${orderId}`,
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    dispatch({type: "SHIPPING_ORDER", payload: data});
  } catch (error) {}
};

export const PaidOrder = (orderId) => async (dispatch, getState) => {
  try {
    const {
      userSignin: {userInfo},
    } = getState();

    const {data} = await axios.put(`${BASE_URL}/api/order/paid/${orderId}`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({type: "PAID_ORDER", payload: data});
  } catch (error) {}
};

export const GetAllProvince = () => async (dispatch, getState) => {
  try {
    const {data} = await axios.get(
      `https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/province`,
      config
    );
    dispatch({type: "GET_ALL_PROVINCE", payload: data});
  } catch (error) {}
};

export const GetAllDistrict = (provinceId) => async (dispatch, getState) => {
  const newConfig = {
    headers: {
      "Content-Type": "application/json",
      Token: "b1e1bbcb-ef7f-11eb-9388-d6e0030cbbb7",
    },
    params: {
      province_id: provinceId,
    },
  };
  try {
    const {data} = await axios.get(
      `https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/district`,
      newConfig
    );
    dispatch({type: "GET_ALL_DISTRICT", payload: data});
  } catch (error) {}
};

export const GetAllWard = (districtId) => async (dispatch, getState) => {
  const newConfig = {
    headers: {
      "Content-Type": "application/json",
      Token: "b1e1bbcb-ef7f-11eb-9388-d6e0030cbbb7",
    },
    params: {
      district_id: districtId,
    },
  };
  try {
    const {data} = await axios.get(
      `https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/ward?${districtId}`,
      newConfig
    );
    dispatch({type: "GET_ALL_WARD", payload: data});
  } catch (error) {}
};

//-----------------------  user

export const getOrderByUser = (idUser) => async (dispatch, getState) => {
  try {
    const {
      userSignin: {userInfo},
    } = getState();
    const {data} = await axios.get(`${BASE_URL}/api/order/${idUser}`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({type: "GET_ORDER_BY_USER", payload: data});
  } catch (error) {}
};

export const getOrderPenddingByUser =
  (idUser) => async (dispatch, getState) => {
    try {
      const {
        userSignin: {userInfo},
      } = getState();
      const {data} = await axios.get(
        `${BASE_URL}/api/order/orderPendding/${idUser}`,
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      dispatch({type: "GET_ORDER_PENDDING_BY_USER", payload: data});
    } catch (error) {}
  };

export const getOrderShippingByUser =
  (idUser) => async (dispatch, getState) => {
    try {
      const {
        userSignin: {userInfo},
      } = getState();
      const {data} = await axios.get(
        `${BASE_URL}/api/order/orderShipping/${idUser}`,
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      dispatch({type: "GET_ORDER_SHIPPING_BY_USER", payload: data});
    } catch (error) {}
  };

export const getOrderPaidByUser = (idUser) => async (dispatch, getState) => {
  try {
    const {
      userSignin: {userInfo},
    } = getState();
    const {data} = await axios.get(
      `${BASE_URL}/api/order/orderPaid/${idUser}`,
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    dispatch({type: "GET_ORDER_PAID_BY_USER", payload: data});
  } catch (error) {}
};

export const payOrder =
  (order, paymentResult) => async (dispatch, getState) => {
    const {
      userSignin: {userInfo},
    } = getState();
    try {
      const {data} = axios.put(
        `${BASE_URL}/api/order/pay/${order._id}`,
        paymentResult,
        {
          headers: {Authorization: `Bearer ${userInfo.token}`},
        }
      );
      dispatch({type: "ORDER_PAY_SUCCESS", payload: data});
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({type: "ORDER_PAY_FAIL", payload: message});
    }
  };

export const OrderInfo = (orderInfo) => async (dispatch, getState) => {
  dispatch({type: "ORDER_INFO", payload: orderInfo});
};
