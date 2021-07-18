import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload }; // overwrite errorMessage
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    // make api request to signup with email and password
    try {
      const response = await trackerApi.post("/signup", { email, password });
      console.log(response.data);
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });
      //   console.log(err.response.data);
    }

    // if we signup, modify our state, and say that we are authenticated
    // if signup fails, reflect and err msg somewhere
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {};
};

const signout = (dispatch) => {
  return () => {};
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { isSignedIn: false, errorMessage: "" }
);
