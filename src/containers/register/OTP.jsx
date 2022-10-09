import React, { useState, useCallback } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { matchOTP, requestOTP } from "../../store/action/auth.action";

const Index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [otp, setOtp] = useState({ otp1: "", otp2: "", otp3: "", otp4: "" });
  const { auth } = useSelector((state) => state);
  console.log(auth);

  const handleReqOTP = () => {
    dispatch(requestOTP({ phone: auth.userRegister.phone })).catch((err) =>
      console.log(err)
    );
  };
  const handleMatchOTP = () => {
    dispatch(
      matchOTP({
        user_id: auth.userRegister.id,
        otp_code: `${otp.otp1}${otp.otp2}${otp.otp3}${otp.otp4}`,
      })
    )
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  const handleChange = (event, state) => {
    setOtp((prev) => ({ ...prev, [state]: event.target.value }));
  };

  const handlekeyUp = (el) => {
    if (el.key === "Delete" || el.key === "Backspace") {
      const next = el.target.tabIndex - 2;
      if (next > -1) {
        el.target.form.elements[next].focus();
      }
    } else {
      const next = el.target.tabIndex;
      if (next < 4) {
        el.target.form.elements[next].focus();
      }
    }
  };

  const handleFocus = (event) => event.target.select();

  const otp1 = useCallback((inputElement) => {
    if (inputElement) {
      inputElement.focus();
    }
  }, []);

  if (!auth.register) {
    return <Navigate to="/register" />;
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-1/3 border p-7 bg-slate-200 rounded-md ">
        <h1 className="text-2xl font-semibold text-center mb-7">
          Percobaan OTP
        </h1>
        <form className="flex flex-row gap-x-4 justify-center">
          <input
            name="otp1"
            type="text"
            autoComplete="off"
            ref={otp1}
            className="w-10 text-center p-2"
            value={otp.otp1}
            onChange={(e) => handleChange(e, "otp1")}
            tabIndex="1"
            maxLength="1"
            onFocus={handleFocus}
            onKeyUp={handlekeyUp}
          />
          <input
            name="otp2"
            type="text"
            autoComplete="off"
            className="w-10 text-center p-2"
            value={otp.otp2}
            onChange={(e) => handleChange(e, "otp2")}
            tabIndex="2"
            maxLength="1"
            onFocus={handleFocus}
            onKeyUp={handlekeyUp}
          />
          <input
            name="otp3"
            type="text"
            autoComplete="off"
            className="w-10 text-center p-2"
            value={otp.otp3}
            onChange={(e) => handleChange(e, "otp3")}
            tabIndex="3"
            maxLength="1"
            onFocus={handleFocus}
            onKeyUp={handlekeyUp}
          />
          <input
            name="otp4"
            type="text"
            autoComplete="off"
            className="w-10 text-center p-2"
            value={otp.otp4}
            onChange={(e) => handleChange(e, "otp4")}
            tabIndex="4"
            maxLength="1"
            onFocus={handleFocus}
            onKeyUp={handlekeyUp}
          />
        </form>
        <div className="flex justify-center mt-5">
          <button
            onClick={handleMatchOTP}
            type="button"
            className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Kirim
          </button>
        </div>
        <hr className="my-5 h-0.5 bg-gray-300 border-0 dark:bg-gray-700" />
        <div className="text-center cursor-pointer" onClick={handleReqOTP}>
          Kirim ulang OTP
        </div>
      </div>
    </div>
  );
};

export default Index;
