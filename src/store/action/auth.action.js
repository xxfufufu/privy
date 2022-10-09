import axios from "axios";
import { authActionType } from "../actionTypes";

export const registerUser = (data) => {
  return async (dispatch) => {
    dispatch({ type: authActionType.REGISTER_SUCCESS });
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

    return axios("/register", {
      method: "POST",
      data,
    })
      .then((res) => {
        dispatch({
          type: authActionType.REGISTER_SUCCESS,
          payload: res.data.data.user,
        });
        return res.data;
      })
      .catch((err) => {
        dispatch({ type: authActionType.REGISTER_FAILED });
        throw err.response.data.error.errors[0];
      });
  };
};

export const requestOTP = (data) => {
  return async (dispatch) => {
    dispatch({ type: authActionType.REQUEST_OTP_REQUEST });
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    return axios("/register/otp/request", {
      method: "POST",
      data,
    })
      .then((res) => {
        dispatch({
          type: authActionType.REQUEST_OTP_SUCCESS,
          payload: res.data,
        });
        return res.data;
      })
      .catch((err) => {
        dispatch({ type: authActionType.REQUEST_OTP_FAILED });
        throw err.response.data.error.errors[0];
      });
  };
};

export const matchOTP = (data) => {
  return async (dispatch) => {
    dispatch({ type: authActionType.MATCH_OTP_REQUEST });
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    return axios("/register/otp/match", {
      method: "POST",
      data,
    })
      .then((res) => {
        dispatch({ type: authActionType.MATCH_OTP_SUCCESS, payload: res.data });
        window.localStorage.setItem("token", res.data.data.user.access_token);
        return res.data;
      })
      .catch((err) => {
        dispatch({ type: authActionType.MATCH_OTP_FAILED });
        throw err.response.data.error.errors[0];
      });
  };
};

export const loginUser = (data) => {
  return async (dispatch) => {
    dispatch({ type: authActionType.LOGIN_REQUEST });
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    return axios("http://pretest-qa.dcidev.id/api/v1/oauth/sign_in", {
      method: "POST",
      data,
    })
      .then((res) => {
        dispatch({ type: authActionType.LOGIN_SUCCESS, payload: res.data });
        window.localStorage.setItem("token", res.data.data.user.access_token);
        return res.data;
      })
      .catch((err) => {
        dispatch({ type: authActionType.LOGIN_FAILED });
        throw err.response.data.error.errors[0];
      });
  };
};

export const getDataUser = () => {
  return async (dispatch) => {
    dispatch({ type: authActionType.FETCH_USER_REQUEST });
    const token = window.localStorage.getItem("token");
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axios.defaults.headers.common = { Authorization: `bearer ${token}` };
    return axios("/profile/me", {
      method: "GET",
    })
      .then((res) => {
        dispatch({
          type: authActionType.FETCH_USER_SUCCESS,
          payload: res.data.data.user,
        });
        return res.data;
      })
      .catch((err) => {
        dispatch({ type: authActionType.FETCH_USER_FAILED });
        throw err.response.data.error.errors[0];
      });
  };
};

export const editExperienceUser = (data) => {
  return async (dispatch) => {
    dispatch({ type: authActionType.EDIT_USER_REQUEST });
    const token = window.localStorage.getItem("token");
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axios.defaults.headers.common = { Authorization: `bearer ${token}` };
    return axios("/profile/career", {
      method: "POST",
      data,
    })
      .then((res) => {
        dispatch({
          type: authActionType.EDIT_USER_SUCCESS,
          payload: res.data.data.user,
        });
        return res.data;
      })
      .catch((err) => {
        dispatch({ type: authActionType.EDIT_USER_FAILED });
        throw err.response.data.error.errors[0];
      });
  };
};

export const editEducationUser = (data) => {
  return async (dispatch) => {
    dispatch({ type: authActionType.EDIT_USER_REQUEST });
    const token = window.localStorage.getItem("token");
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axios.defaults.headers.common = { Authorization: `bearer ${token}` };
    return axios("/profile/education", {
      method: "POST",
      data,
    })
      .then((res) => {
        dispatch({
          type: authActionType.EDIT_USER_SUCCESS,
          payload: res.data.data.user,
        });
        return res.data;
      })
      .catch((err) => {
        dispatch({ type: authActionType.EDIT_USER_FAILED });
        throw err.response.data.error.errors[0];
      });
  };
};

export const editProfileUser = (data) => {
  return async (dispatch) => {
    dispatch({ type: authActionType.EDIT_USER_REQUEST });
    const token = window.localStorage.getItem("token");
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axios.defaults.headers.common = { Authorization: `bearer ${token}` };
    return axios("/profile", {
      method: "POST",
      data,
    })
      .then((res) => {
        dispatch({
          type: authActionType.EDIT_USER_SUCCESS,
          payload: res.data.data.user,
        });
        return res.data;
      })
      .catch((err) => {
        dispatch({ type: authActionType.EDIT_USER_FAILED });
        throw err.response.data.error.errors[0];
      });
  };
};
