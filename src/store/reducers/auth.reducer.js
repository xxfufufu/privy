import { authActionType } from "../actionTypes";

const initState = {
  initLoading: true,
  isLoading: false,
  register: false,
  userRegister: null,
  user: null,
};

const auth = (state = initState, action) => {
  switch (action.type) {
    case authActionType.REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case authActionType.REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        register: true,
        userRegister: action.payload,
      };
    case authActionType.REGISTER_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case authActionType.MATCH_OTP_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case authActionType.MATCH_OTP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        register: false,
        userRegister: action.payload,
      };
    case authActionType.MATCH_OTP_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case authActionType.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case authActionType.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case authActionType.LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case authActionType.FETCH_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case authActionType.FETCH_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        initLoading: false,
      };
    case authActionType.FETCH_USER_FAILED:
      return {
        ...state,
        isLoading: false,
        initLoading: false,
      };

    default:
      return state;
  }
};

export default auth;
