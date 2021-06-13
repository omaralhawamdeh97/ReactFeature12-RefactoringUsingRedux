import productsData from "../products";
import { CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "./actions";
import slugify from "slugify";
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

    case CREATE_PRODUCT:
      const { newProduct } = action.payload;
      newProduct.id = state.products[state.products.length - 1].id + 1;

      newProduct.slug = slugify(action.payload.newProduct.name);
      return {
        ...state,
        products: [...state.products, newProduct],
      };

    case UPDATE_PRODUCT:
      const { updated } = action.payload;
      return {
        ...state,
        products: state.products.map((prod) =>
          prod.id === updated.id ? updated : prod
        ),
      };
    default:
      return state;
  }
};

export default reducer;
