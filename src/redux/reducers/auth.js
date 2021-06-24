import { AUTH, LOGOUT, APPOINT } from "../constants/actionTypes";

const initialState = {
  authData: [],
  appointData: []
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action }));
      return {
        ...state,
        authData: action,
        loading: false,
        errors: null
      };
    case LOGOUT:
      localStorage.clear();

      return {
        ...state,
        authData: null,
        loading: false,
        errors: null
      };
    case APPOINT:
      return {
        ...state,
        appointData: action
      };
    default:
      return state;
  }
};

export default authReducer;
