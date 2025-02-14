import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import VerifyPage from "../pages/VerifyPage";
import ResetPage from "../pages/Auth/ResetPage";
import LandingPage from "../pages/LandingPage";
import HomePage from "../pages/HomePage";
import LogoutPage from "../pages/LogoutPage";
import VerifyResetPage from "../pages/Auth/VerifyResetPage";
import NewPasswordPage from "../pages/Auth/NewPasswordPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/verify" element={<VerifyPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/reset" element={<ResetPage />} />
        <Route path="/reset/verify" element={<VerifyResetPage />} />
        <Route path="/reset/new-password" element={<NewPasswordPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
