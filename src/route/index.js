import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Login from "../containers/login";
import Profile from "../containers/profile";
import Register from "../containers/register";

const useAuth = () => window.localStorage.getItem("token");

const ProtectRoutes = () => {
  return useAuth() ? <Outlet /> : <Navigate to="/login" />;
};

const PublicRoutes = () => {
  return useAuth() ? <Navigate to="/" /> : <Outlet />;
};

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicRoutes />}>
        <Route path="/register/*" element={<Register />} />
        <Route path="/login/*" element={<Login />} />
      </Route>
      <Route path="/" element={<ProtectRoutes />}>
        <Route index element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default Index;
