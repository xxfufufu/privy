// /* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";

export const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default Index;
