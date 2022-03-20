import { authAction } from "../actions/authActions";

const initState = {
  userDetail: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case authAction.SET_USER_DETAILS:
      return {
        ...state,
        userDetail: action.userDetail,
      };
    default:
      return state;
  }
};

export default reducer;
