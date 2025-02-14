import React, { useState, useRef, useEffect } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import axiosInstance from "../config/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { validateCode } from "../helpers/validators";
import { shakeInput } from "../helpers/animators";
import { useTranslation } from "react-i18next";

const VerifyForm = () => {
  useEffect(() => {
    if (!localStorage.getItem("email")) {
      toast.error(t("Something went wrong"));
      navigate("/login");
    }
  }, []);

  const { t } = useTranslation();
  const [verifyForm, setVerifyForm] = useState({
    email: localStorage.getItem("email"),
    code: "",
  });
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const inp = useRef(null);
  const loader = <div className="loader"></div>;

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const validation = validateCode(verifyForm.code, 4);
    if (validation && validation.error) {
      setError(t(validation.error));
      shakeInput(inp);
      setLoading(false);
      return;
    } else {
      setError("");
    }
    const formToSend = { ...verifyForm, code: parseInt(verifyForm.code) };
    axiosInstance
      .post("/auth/verify", formToSend)
      .then((response) => {
        if (response.data.status !== 200) {
          toast.error(t(response.data.message));
          setLoading(false);
          return;
        } else {
          toast.success(t(response.data.message));
          navigate("/login");
        }
      })
      .catch((error) => {
        toast.error(t(error.message));
        setLoading(false);
      });
  };

  const resendCode = () => {
    axiosInstance
      .get("/auth/resend/" + verifyForm.email)
      .then((response) => {
        if (response.data.status !== 200) {
          toast.error(t(response.data.message));
          return;
        } else {
          toast.success(t(response.data.message));
        }
      })
      .catch((error) => {
        toast.error(t(error.message));
      });
  };

  return (
    <Container maxWidth="sm" className="verify-form">
      <Typography variant="h4" component="h1" gutterBottom>
        {t("Verify Email")}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {t("Please enter the OTP code sent to your email")} "{verifyForm.email}
        ".
      </Typography>
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        className="auth-fields"
      >
        <TextField
          label={t("OTP Code")}
          variant="outlined"
          margin="normal"
          fullWidth
          value={verifyForm.code}
          ref={inp}
          onChange={(e) =>
            setVerifyForm({ ...verifyForm, code: e.target.value })
          }
          inputProps={{ maxLength: 4 }}
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
        <p className="inp-err">{error ? error : ""}</p>
        <Link
          className="account-btn"
          style={{ color: "#5e3023" }}
          onClick={resendCode}
        >
          {t("Resend code")}
        </Link>
        <Box mt={2}>
          <button className="auth-submit" onClick={handleSubmit}>
            {loading ? loader : t("Verify")}
          </button>
        </Box>
      </form>
    </Container>
  );
};

export default VerifyForm;
