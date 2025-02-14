import React, { useState, useRef } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import axiosInstance from "../../config/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { validateEmail } from "../../helpers/validators";
import { shakeInput } from "../../helpers/animators";
import { useTranslation } from "react-i18next";

const ResetForm = () => {
  const { t } = useTranslation();
  const [resetForm, setResetForm] = useState({
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const loader = <div className="loader"></div>;
  const [emailError, setEmailError] = useState("");
  const emailRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const validation = validateEmail(resetForm.email);
    if (validation && validation.error) {
      setEmailError(t(validation.error));
      shakeInput(emailRef);
      setLoading(false);
      return;
    }
    setEmailError("");
    axiosInstance
      .post("/auth/reset/email", resetForm)
      .then((response) => {
        if (response.data.status !== 200) {
          toast.error(t(response.data.message));
          setLoading(false);
          return;
        } else {
          toast.success(t(response.data.message));
          localStorage.setItem("email", response.data.email);
          navigate("/reset/verify");
        }
      })
      .catch((error) => {
        toast.error(t(error.message));
        setLoading(false);
      });
  };

  return (
    <Container maxWidth="sm" className="verify-form">
      <Typography variant="h4" component="h1" gutterBottom>
        {t("Find your account")}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {t("Please enter your email to receive the code")}.
      </Typography>
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        className="auth-fields"
      >
        <TextField
          label={t("Email")}
          variant="outlined"
          margin="normal"
          fullWidth
          value={resetForm.email}
          ref={emailRef}
          onChange={(e) => setResetForm({ email: e.target.value })}
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
        <p className="inp-err">{emailError ? emailError : ""}</p>
        <Link
          className="account-btn"
          style={{ color: "#5e3023" }}
          to={"/login"}
        >
          {t("Login with password")}
        </Link>
        <Box mt={2}>
          <button className="auth-submit" onClick={handleSubmit}>
            {loading ? loader : t("Send Code")}
          </button>
        </Box>
      </form>
    </Container>
  );
};

export default ResetForm;
