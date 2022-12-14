import axios from "axios";
import { imageActionType } from "../actionTypes";

export const uploadImageBanner = (data) => {
  return async (dispatch) => {
    dispatch({ type: imageActionType.IMAGE_BANNER_REQUEST });
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    return axios("/uploads/cover", {
      method: "POST",
      data,
    })
      .then((res) => {
        dispatch({
          type: imageActionType.IMAGE_BANNER_SUCCESS,
          payload: res.data,
        });
        return res.data;
      })
      .catch((err) => {
        dispatch({ type: imageActionType.IMAGE_BANNER_FAILED });
        throw err.response.data.error.errors[0];
      });
  };
};

export const uploadImageProfile = (data) => {
  return async (dispatch) => {
    dispatch({ type: imageActionType.IMAGE_PROFILE_REQUEST });
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    return axios("/uploads/profile", {
      method: "POST",
      data,
    })
      .then((res) => {
        dispatch({
          type: imageActionType.IMAGE_PROFILE_SUCCESS,
          payload: res.data,
        });
        return res.data;
      })
      .catch((err) => {
        dispatch({ type: imageActionType.IMAGE_PROFILE_FAILED });
        throw err.response.data.error.errors[0];
      });
  };
};

export const imageAsProfile = (data) => {
  return async (dispatch) => {
    dispatch({ type: imageActionType.IMAGE_PROFILE_REQUEST });
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    return axios("/uploads/profile/default", {
      method: "POST",
      data,
    })
      .then((res) => {
        dispatch({
          type: imageActionType.IMAGE_PROFILE_SUCCESS,
          payload: res.data,
        });
        return res.data;
      })
      .catch((err) => {
        dispatch({ type: imageActionType.IMAGE_PROFILE_FAILED });
        throw err.response.data.error.errors[0];
      });
  };
};

export const imageDelete = (id) => {
  return async (dispatch) => {
    dispatch({ type: imageActionType.IMAGE_PROFILE_REQUEST });
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    return axios(`/uploads/profile?id=${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        dispatch({
          type: imageActionType.IMAGE_PROFILE_SUCCESS,
          payload: res.data,
        });
        return res.data;
      })
      .catch((err) => {
        dispatch({ type: imageActionType.IMAGE_PROFILE_FAILED });
        throw err.response.data.error.errors[0];
      });
  };
};
