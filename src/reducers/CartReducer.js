export const CartReducer = (state = {cartItems: []}, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      console.log(action);
      let newList = [...state.cartItems];
      const exists = newList.find(
        (item) => item.entityId === action.payload.entityId
      );
      if (exists) {
        newList = newList.map((item) =>
          item.entityId === action.payload.entityId
            ? {...exists, qty: exists.qty + 1}
            : item
        );
      } else {
        const product = {
          ...action.payload,
          qty: 1,
        };
        newList.push(product);
      }

      localStorage.setItem("cartItems", JSON.stringify(newList));
      return {
        ...state,
        cartItems: newList,
      };
    }

    case "DELETE_TO_CART": {
      let newList = [...state.cartItems];
      const exists = newList.find(
        (item) => item.entityId === action.payload.entityId
      );

      if (exists.qty === 1) {
        newList = newList.filter((item) => item.entityId !== exists.entityId);
      } else {
        newList = newList.map((item) =>
          item.entityId === action.payload.entityId
            ? {...exists, qty: exists.qty - 1}
            : item
        );
      }

      localStorage.setItem("cartItems", JSON.stringify(newList));
      return {
        ...state,
        cartItems: newList,
      };
    }

    case "DELETE_QTY_PRODUCT": {
      let newList = [...state.cartItems];

      newList = newList.filter(
        (item) => item.entityId !== action.payload.entityId
      );

      localStorage.setItem("cartItems", JSON.stringify(newList));
      return {
        ...state,
        cartItems: newList,
      };
    }

    case "CART_EMTY": {
      return {...state, cartItems: []};
    }
    default:
      return state;
  }
};
