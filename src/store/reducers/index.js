import { combineReducers } from "redux";
import auth from "./auth.reducer";

const appReducer = combineReducers({
  auth,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT_SUCCESS") {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
