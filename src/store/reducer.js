import productsData from "../products";
import { createStore } from "redux";
import { DELETE_PRODUCT } from "./actions";

const initialState = {
  products: productsData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PRODUCT:
      const productsToKeep = state.products.filter(
        (product) => product.id !== action.payload.productId
      );
      return {
        ...state,
        products: productsToKeep,
      };
    default:
      return state;
  }
};

export default reducer;
