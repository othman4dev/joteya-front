import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Copyright from "../components/Copyright";

const LogoutPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    toast.dismiss();

    const toastId = toast.loading(t("Logging out..."));
    localStorage.removeItem("sub");
    localStorage.removeItem("user");

    setTimeout(() => {
      toast.update(toastId, {
        render: t("Logged out successfully"),
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
      navigate("/login");
    }, 2000);
  }, [navigate, t]);

  return (
    <>
      <Header />
      <div className="centered">
        <h1>{t("Logging out...")}</h1>
        <div className="loader"></div>
      </div>
      <Copyright />
    </>
  );
};

export default LogoutPage;
