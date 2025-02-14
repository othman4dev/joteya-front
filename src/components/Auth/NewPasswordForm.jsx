import React, { useState, useEffect, useRef } from "react";
import { Container, Typography, TextField, Box } from "@mui/material";
import { Link } from "react-router-dom";
import axiosInstance from "../../config/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import * as validator from "../../helpers/validators";
import { shakeInput } from "../../helpers/animators";
import { useTranslation } from "react-i18next";

const NewPasswordForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [newPasswordForm, setNewPasswordForm] = useState({
    newPassword: "",
  });
  const [userEmail, setUserEmail] = useState("");
  const [userCode, setUserCode] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({ password: "", confirmPassword: "" });
  const newPasswordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const loader = <div className="loader"></div>;

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (!email) {
      toast.error(t("Something went wrong"));
      navigate("/reset");
      return;
    } else {
      setUserEmail(email);
    }
    const code = localStorage.getItem("code");
    if (!code) {
      toast.error(t("Something went wrong"));
      navigate("/reset");
      return;
    } else {
      setUserCode(code);
    }
  }, [navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    let validation = validator.validatePassword(newPasswordForm.newPassword);
    if (validation && validation.error) {
      setErrors({ password: t(validation.error) });
      shakeInput(newPasswordRef);
      setLoading(false);
      return;
    }
    validation = validator.confirmPassword(
      newPasswordForm.newPassword,
      confirmPassword
    );
    if (validation && validation.error) {
      setErrors({ confirmPassword: t(validation.error) });
      shakeInput(confirmPasswordRef);
      setLoading(false);
      return;
    }
    setErrors({ password: "", confirmPassword: "" });

    axiosInstance
      .post("/auth/reset/new-password", {
        email: userEmail,
        newPassword: newPasswordForm.newPassword,
        code: parseInt(userCode),
      })
      .then((response) => {
        if (response.data.status !== 200) {
          setLoading(false);
          if (response.data.message == "Invalid code") {
            toast.error(t("Something went wrong"));
            localStorage.removeItem("email");
            localStorage.removeItem("code");
            navigate("/reset");
            return;
          }
          toast.error(t(response.data.message));
          return;
        } else {
          toast.success(t(response.data.message));
          localStorage.removeItem("email");
          localStorage.removeItem("code");
          navigate("/login");
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
        {t("New Password")}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {t("Please enter a new password")}
      </Typography>
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        className="auth-fields"
      >
        <TextField
          label={t("New Password")}
          variant="outlined"
          margin="normal"
          type="password"
          fullWidth
          value={NewPasswordForm.newPassword}
          ref={newPasswordRef}
          onChange={(e) => setNewPasswordForm({ newPassword: e.target.value })}
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
          label={t("Confirm Password")}
          variant="outlined"
          margin="normal"
          type="password"
          fullWidth
          value={confirmPassword}
          ref={confirmPasswordRef}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
        <Box mt={2}>
          <button className="auth-submit" onClick={handleSubmit}>
            {loading ? loader : t("Change Password")}
          </button>
        </Box>
      </form>
    </Container>
  );
};

export default NewPasswordForm;
