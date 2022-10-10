import axios from "axios";
import { messageActionType } from "../actionTypes";

export const fetchMessage = (id) => {
  return async (dispatch) => {
    dispatch({ type: messageActionType.MESSAGE_REQUEST });
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    return axios(`/message?id=${id}`, {
      method: "GET",
    })
      .then((res) => {
        dispatch({
          type: messageActionType.MESSAGE_SUCCESS,
          payload: res.data,
        });
        return res.data;
      })
      .catch((err) => {
        dispatch({ type: messageActionType.MESSAGE_FAILED });
        throw err.response.data.error.errors[0];
      });
  };
};
