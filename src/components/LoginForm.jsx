import React, { useState, useRef, useEffect } from "react";
import { TextField } from "@mui/material";
import axiosInstance from "../config/axios";
import { toast } from "react-toastify";
import logo from "../assets/images/jot.svg";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import * as validator from "../helpers/validators";
import { shakeInput } from "../helpers/animators";

const LoginForm = () => {
  const { t } = useTranslation();
  const [user, setUser] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [loader, setLoader] = useState(<div className="loader"></div>);
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    const alreadyEmail = localStorage.getItem("email");
    if (alreadyEmail) {
      setUser({ ...user, email: alreadyEmail });
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    let validation = validator.validateEmail(user.email);
    if (validation && validation.error) {
      setErrors({ email: t(validation.error) });
      shakeInput(emailRef);
      setLoading(false);
      return;
    } else {
      setErrors({ email: "", password: "" });
    }
    validation = validator.validatePassword(user.password);
    if (validation && validation.error) {
      setErrors({ password: t(validation.error) });
      shakeInput(passwordRef);
      setLoading(false);
      return;
    } else {
      setErrors({ email: "", password: "" });
    }
    axiosInstance
      .post("/auth/login", user)
      .then((response) => {
        if (response.data.status !== 200) {
          if (response.data.message == "User not verified") {
            localStorage.setItem("email", user.email);
            navigate("/verify");
          }
          toast.error(t(response.data.message));
          setLoading(false);
          return;
        }
        localStorage.setItem("sub", response.data.access_token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        toast.success(t("Login successful"));
        if (response.data.user.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        toast.error(t(error.message));
        setLoading(false);
      });
  };

  return (
    <div className="auth-form">
      <div className="img-container">
        <img src={logo} alt="Joteya" className="auth-logo" />
      </div>
      <h1 className="auth-title">{t("Sign in")}</h1>
      <form className="auth-fields" noValidate autoComplete="off">
        <TextField
          label={t("Email")}
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={(event) => setUser({ ...user, email: event.target.value })}
          ref={emailRef}
          value={user.email}
          className="auth-input"
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#5e3023",
              },
              "&:hover fieldset": {
                borderColor: "#390101",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#5e3023",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#5e3023",
              "&.Mui-focused": {
                color: "#5e3023",
              },
              "&:hover": {
                color: "#390101",
              },
            },
            "& .MuiInputLabel-shrink": {
              color: "#5e3023",
            },
          }}
        />
        <p className="inp-err">{errors.email ? errors.email : ""}</p>
        <TextField
          label={t("Password")}
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={(event) =>
            setUser({ ...user, password: event.target.value })
          }
          ref={passwordRef}
          value={user.password}
          className="auth-input"
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#5e3023",
              },
              "&:hover fieldset": {
                borderColor: "#390101",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#5e3023",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#5e3023",
              "&.Mui-focused": {
                color: "#5e3023",
              },
              "&:hover": {
                color: "#390101",
              },
            },
            "& .MuiInputLabel-shrink": {
              color: "#5e3023",
            },
          }}
        />
        <p className="inp-err">{errors.password ? errors.password : ""}</p>
        <Link
          className="forgot-btn"
          to="/reset"
          style={{
            color: "#5e3023",
            display: "block",
            marginTop: "5px",
            marginBottom: "5px",
          }}
        >
          {t("Forgot password?")}
        </Link>
        <button className="auth-submit" onClick={handleSubmit}>
          {loading ? loader : t("Sign in")}
        </button>
        <br />
        <Link
          className="account-btn"
          to="/register"
          style={{ color: "#5e3023", marginTop: "15px", marginBottom: "-10px" }}
        >
          {t("Don't have an account? Sign up here")}
        </Link>
        <br />
      </form>
    </div>
  );
};

export default LoginForm;
