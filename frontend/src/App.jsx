import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="admin/*" element={<AdminLayout />} />
        <Route path="/" element={<Navigate to="/admin" replace />} />
        {/* <Route path="auth/*" element={<AuthLayout />} /> */}
        {/* <Route path="rtl/*" element={<RtlLayout />} /> */}
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
