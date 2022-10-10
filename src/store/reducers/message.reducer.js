import { messageActionType } from "../actionTypes";

const initState = {
  initLoading: true,
  isLoading: false,
  message: [],
};

const message = (state = initState, action) => {
  switch (action.type) {
    case messageActionType.MESSAGE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case messageActionType.MESSAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: action.payload,
      };
    case messageActionType.MESSAGE_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default message;
