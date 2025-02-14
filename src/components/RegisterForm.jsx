import React from "react";
import {
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import axiosInstance from "../config/axios";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import logo from "../assets/images/jot.svg";
import { useNavigate } from "react-router-dom";
import * as validator from "../helpers/validators";
import { shakeInput } from "../helpers/animators";
import { useTranslation } from "react-i18next";

const Register = () => {
  const { t } = useTranslation();
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: "",
  });
  const [loading, setLoading] = useState(false);
  const [loader, setLoader] = useState(<div className="loader"></div>);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const agreeRef = useRef(null);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    let validation = validator.validateName(user.name);
    if (validation && validation.error) {
      setErrors({ name: t(validation.error) });
      shakeInput(nameRef);
      setLoading(false);
      return;
    }
    validation = validator.validatePhone(user.phone);
    if (validation && validation.error) {
      setErrors({ phone: t(validation.error) });
      setLoading(false);
      return;
    }
    validation = validator.validateEmail(user.email);
    if (validation && validation.error) {
      setErrors({ email: t(validation.error) });
      shakeInput(emailRef);
      setLoading(false);
      return;
    }
    validation = validator.validatePassword(user.password);
    if (validation && validation.error) {
      setErrors({ password: t(validation.error) });
      shakeInput(passwordRef);
      setLoading(false);
      return;
    }
    validation = validator.confirmPassword(user.password, user.confirmPassword);
    if (validation && validation.error) {
      setErrors({ confirmPassword: t(validation.error) });
      shakeInput(confirmPasswordRef);
      setLoading(false);
      return;
    }
    validation = validator.validateTerms(agree);
    if (validation && validation.error) {
      setErrors({ agree: t(validation.error) });
      shakeInput(agreeRef);
      setLoading(false);
      return;
    }
    setErrors({
      name: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
      agree: "",
    });

    axiosInstance
      .post("/auth/register", user)
      .then((response) => {
        if (response.data.status !== 200) {
          toast.error(t(response.data.message));
          setLoading(false);
          return;
        } else {
          toast.success(t("User registred successfully"));
          localStorage.setItem("email", user.email);
          navigate("/verify");
        }
      })
      .catch((error) => {
        console.error(t(error.message));
        setLoading(false);
      });
  }

  return (
    <div className="auth-form">
      <div className="img-container">
        <img src={logo} alt="Joteya" className="auth-logo" />
      </div>
      <h1 className="auth-title">{t("Sign up")}</h1>
      <form className="auth-fields" noValidate autoComplete="off">
        <TextField
          label={t("Full Name")}
          variant="outlined"
          margin="normal"
          fullWidth
          ref={nameRef}
          onChange={(event) => setUser({ ...user, name: event.target.value })}
          value={user.name}
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
        <p className="inp-err">{errors.name ? errors.name : ""}</p>
        <PhoneInput
          country={"ma"}
          value={user.phone}
          ref={phoneRef}
          onChange={(phone) => setUser({ ...user, phone })}
          inputStyle={{
            width: "100%",
            height: "55px",
            backgroundColor: "transparent",
            color: "black",
            border: "1px solid #5e3023",
            fontSize: "16px",
          }}
        />
        <p className="inp-err" style={{ marginTop: "0px" }}>
          {errors.phone ? errors.phone : ""}
        </p>
        <TextField
          label={t("Email")}
          variant="outlined"
          margin="normal"
          fullWidth
          ref={emailRef}
          onChange={(event) => setUser({ ...user, email: event.target.value })}
          value={user.email}
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
          ref={passwordRef}
          onChange={(event) =>
            setUser({ ...user, password: event.target.value })
          }
          value={user.password}
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
        <TextField
          label={t("Confirm password")}
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          ref={confirmPasswordRef}
          onChange={(event) =>
            setUser({ ...user, confirmPassword: event.target.value })
          }
          value={user.confirmPassword}
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
        <p className="inp-err">
          {errors.confirmPassword ? errors.confirmPassword : ""}
        </p>
        <FormControlLabel
          control={
            <Checkbox
              checked={agree}
              ref={agreeRef}
              onChange={(e) => setAgree(e.target.checked)}
              sx={{
                color: "#5e3023",
                "&.Mui-checked": {
                  color: "#5e3023",
                },
              }}
            />
          }
          label={
            <Typography sx={{ color: "#5e3023" }}>
              {t("I agree to the terms and conditions")}
            </Typography>
          }
        />
        <p className="inp-err">{errors.agree ? errors.agree : ""}</p>
        <button className="auth-submit" onClick={handleSubmit}>
          {loading ? loader : t("Sign up")}
        </button>
        <Link
          className="account-btn"
          component={Link}
          to="/login"
          style={{
            color: "#5e3023",
            marginTop: "15px",
            marginBottom: "10px",
            display: "block",
          }}
        >
          {t("Already have an account? Sign in here")}
        </Link>
      </form>
    </div>
  );
};

export default Register;
