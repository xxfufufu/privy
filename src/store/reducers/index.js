import { combineReducers } from "redux";
import auth from "./auth.reducer";
import message from "./message.reducer";

const appReducer = combineReducers({
  auth,
  message,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT_SUCCESS") {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
