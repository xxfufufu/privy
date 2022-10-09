// /* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Route, Routes } from "react-router-dom";
import RegisterPage from "./Register";
import OTP from "./OTP";

export const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<RegisterPage />} />
      <Route path="/otp" element={<OTP />} />
    </Routes>
  );
};

export default Index;
