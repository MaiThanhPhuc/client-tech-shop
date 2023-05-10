import axios from "axios";
import actions from "./product.action";
import {BASE_URL} from "../constants/UserConstant";
import {axiosClient} from "../services/config.services";

export const filterProductByType = (name) => async (dispatch) => {
  try {
    const {data} = await axios.get(`${BASE_URL}/products/${name}`);
    dispatch({type: "FILTER_PRODUCT_BY_TYPE", payload: data});
  } catch (error) {}
};

export const filterProductByRandomField = (infoProduct) => async (dispatch) => {
  try {
    const {data} = await axios.post(
      `${BASE_URL}/products/filter/random`,
      infoProduct
    );
    dispatch({type: "FILTER_PRODUCT_BY_RANDOM_FIELD", payload: data});
  } catch (error) {}
};

export const getAllProduct = (slug) => async (dispatch) => {
  try {
    const {data} = await axios.get(
      `${BASE_URL}/api/product/search?keyword=&cate=${slug}&manu=&orderBy=des&sortBy=bestPrice&page=0&size=10`
    );
    dispatch({type: "GET_ALL_PRODUCT", payload: data.data});
  } catch (error) {
    dispatch({type: "GET_ALL_PRODUCT_FAIL", payload: error.message});
  }
};

export const ascendingProduct = (products) => async (dispatch, getState) => {
  dispatch({type: "ASCENDING_PRODUCT"});
};

export const descendingProduct = (products) => async (dispatch, getState) => {
  dispatch({type: "DESCENDING_PRODUCT"});
};

export const filterProduct = (name) => async (dispatch, getState) => {
  dispatch({type: "FILTER_PRODUCT", payload: name});
};

export const filterProductByPrice =
  (startPrice, endPrice) => async (dispatch, getState) => {
    dispatch({
      type: actions.FILTER_PRODUCT_BY_PRICE,
      payload: {startPrice, endPrice},
    });
  };

export const editCurrentPage = (page) => async (dispatch) => {
  dispatch({type: "EDIT_CURRENT_PAGE", payload: page});
};

export const paginationProduct = (page) => async (dispatch) => {
  try {
    const data = await axiosClient.get(`/products/pagination/${page}`);
    dispatch({type: "PAGINATION_PRODUCT", payload: data});
  } catch (error) {}
};

export const getproductById = (id) => async (dispatch) => {
  try {
    const {data} = await axios.get(`${BASE_URL}/api/product/${id}`);
    dispatch({type: "GET_PRODUCT_BY_ID", payload: data.data});
  } catch (error) {
    dispatch({type: "GET_PRODUCT_BY_ID_FAIL", payload: error.message});
  }
};

export const removeProductById = (id) => async (dispatch) => {
  dispatch({type: "REMOVE_PRODUCT_BY_ID"});
};

export const saveProduct = (product) => async (dispatch, getState) => {
  try {
    const {
      userSignin: {userInfo},
    } = getState();
    if (!product.get("_id")) {
      const {data} = await axios.post(`${BASE_URL}/products/create`, product, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({type: "SAVE_PRODUCT", payload: data});
      // document.location.href = '/admin/product';
    } else {
      const {data} = await axios.put(`${BASE_URL}/products/update`, product, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({type: "SAVE_PRODUCT", payload: data});
      // document.location.href = '/admin/product';
    }
  } catch (error) {
    dispatch({type: "SAVE_PRODUCT_FAIL", payload: error.message});
  }
};

export const DeleteProduct = (productId) => async (dispatch, getState) => {
  try {
    const {
      userSignin: {userInfo},
    } = getState();
    const {data} = await axios.delete(
      `${BASE_URL}/products/delete/${productId}`,
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    dispatch({type: "DELETE_PRODUCT", payload: data});
  } catch (error) {
    dispatch({type: "DELETE_PRODUCT_FAIL", payload: error.message});
  }
};

export const searchProduct = (name) => async (dispatch, getState) => {
  try {
    const {data} = await axios.get(
      `${BASE_URL}/products/search/product?name=${name}`
    );
    dispatch({type: "SEARCH_PRODUCT", payload: data});
  } catch (error) {
    dispatch({type: "SEARCH_PRODUCT_FAIL", payload: error.message});
  }
};

export const reviewProduct = (id, review) => async (dispatch, getState) => {
  try {
    const {data} = await axios.post(`${BASE_URL}/products/rate/${id}`, review);
    dispatch({type: "REVIEW_PRODUCT", payload: data});
  } catch (error) {
    dispatch({type: "REVIEW_PRODUCT_FAIL", payload: error});
  }
};

export const commentProduct = (id, comment) => async (dispatch, getState) => {
  try {
    const {data} = await axios.post(
      `${BASE_URL}/products/comment/${id}`,
      comment
    );
    dispatch({type: "COMMENT_PRODUCT", payload: data});
  } catch (error) {
    dispatch({type: "COMMENT_PRODUCT_FAIL", payload: error});
  }
};

export const repCommentProduct =
  (id, comment) => async (dispatch, getState) => {
    try {
      const {data} = await axios.post(
        `${BASE_URL}/products/rep/comment/${id}`,
        comment
      );
      dispatch({type: "REP_COMMENT_PRODUCT", payload: data});
    } catch (error) {
      dispatch({type: "REP_COMMENT_PRODUCT_FAIL", payload: error});
    }
  };

export const pinCommentProduct =
  (id, comment) => async (dispatch, getState) => {
    try {
      const {data} = await axios.post(
        `${BASE_URL}/products/pin/comment/${id}`,
        comment
      );
      dispatch({type: "PIN_COMMENT_PRODUCT", payload: data});
    } catch (error) {
      dispatch({type: "PIN_COMMENT_PRODUCT_FAIL", payload: error});
    }
  };

export const BlogProduct =
  (id, blog, callback) => async (dispatch, getState) => {
    const {
      userSignin: {userInfo},
    } = getState();
    try {
      const {data} = await axios.post(`${BASE_URL}/products/blog/${id}`, blog, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({type: "BLOG_PRODUCT", payload: data});
      callback();
    } catch (error) {
      dispatch({type: "BLOG_PRODUCT_FAIL", payload: error});
    }
  };
