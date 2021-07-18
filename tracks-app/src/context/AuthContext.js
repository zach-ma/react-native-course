import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload }; // overwrite errorMessage
    case "signup":
      return { token: action.payload, errorMessage: "" };
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    // make api request to signup with email and password
    try {
      // make request
      const response = await trackerApi.post("/signup", { email, password });
      // store the token
      await AsyncStorage.setItem("token", response.data.token);
      // update our state
      dispatch({ type: "signup", payload: response.data.token });
      // navigate to main flow
      navigate("TrackList");
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
  { token: null, errorMessage: "" }
);
