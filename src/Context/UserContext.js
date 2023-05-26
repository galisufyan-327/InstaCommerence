import createDataContext from "./createDataContext";
import { User } from "./DATA";

// this file generated and updates state for the user object
const userReducer = (state, action) => {
  switch (action.type) {
    case "add_post":
      return { ...state, posts: [action.payload, ...state.posts] };
    case "add_product":
      return { ...state, products: [action.payload, ...state.products] };

    default: {
      return state;
    }
  }
};

const addPost = (dispatch) => (post) => {
  dispatch({ type: "add_post", payload: post });
};

const addProduct = (dispatch) => (product) => {
  dispatch({ type: "add_product", payload: product });
};

export const { Provider, Context } = createDataContext(
  userReducer,
  { addPost, addProduct },
  { ...User }
);
