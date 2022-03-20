import * as api from "../../api";

const authActions = {
  SET_USER_DETAILS: "AUTH.SET_USER_DETAILS",
};

export const getActions = (dispatch) => {
  return {
    login: (userDetails, history) => dispatch(login(userDetails, history)),
    register: (userDetails, history) =>
      dispatch(register((userDetails, history))),
  };
};

const setUserDetails = (userDetails) => {
  return {
    type: authActions.SET_USER_DETAILS,
    userDetails,
  };
};

const login = (userDetails, history) => {
  return async (dispatch) => {
    const response = api.login(userDetails);
    console.log("res", response);
    if (response.error) {
      //handle show error message in alert
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem("user", JSON.stringify(userDetails));
      dispatch(setUserDetails(userDetails));
      history.push("/dashboard");
    }
  };
};
const register = (userDetails, history) => {
  return async (dispatch) => {
    const response = api.register(userDetails);

    if (response.error) {
      //handle show error message in alert
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem("user", JSON.stringify(userDetails));
      dispatch(setUserDetails(userDetails));
      history.push("/dashboard");
    }
  };
};