import createDataContext from "./createDataContext";
import { User } from "./DATA";

const userReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signIn":
      return { token: action.payload, errorMessage: "" };
    case "signout":
      return { ...state, token: action.payload };
    default: {
      return state;
    }
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await SecureStore.getItemAsync("Current_User");
  if (token != null) {
    dispatch({ type: "signIn", payload: token });
  }
};

const signout = (dispatch) => {
  return async () => {
    await SecureStore.deleteItemAsync("Current_User");
    dispatch({ type: "signout", payload: null });
  };
};

export const { Provider, Context } = createDataContext(
  userReducer,
  { signout, tryLocalSignin },
  { ...User }
);
