import React, { useState, useRef, useEffect } from "react";
import { Container, Typography, TextField, Box } from "@mui/material";
import { Link } from "react-router-dom";
import axiosInstance from "../../config/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { validateCode } from "../../helpers/validators";
import { shakeInput } from "../../helpers/animators";
import { useTranslation } from "react-i18next";

const VerifyResetForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [VerifyResetForm, setVerifyResetForm] = useState({
    email: "",
    code: "",
  });
  const [loading, setLoading] = useState(false);
  const loader = <div className="loader"></div>;
  const [codeError, setCodeError] = useState("");
  const codeInput = useRef(null);

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (!email) {
      toast.error(t("Something went wrong"));
      navigate("/reset");
      return;
    } else {
      setVerifyResetForm({ ...VerifyResetForm, email });
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const validation = validateCode(VerifyResetForm.code, 6);
    if (validation && validation.error) {
      setCodeError(t(validation.error));
      shakeInput(codeInput);
      setLoading(false);
      return;
    }
    setCodeError("");
    axiosInstance
      .post("/auth/reset/verify", {
        email: VerifyResetForm.email,
        code: parseInt(VerifyResetForm.code),
      })
      .then((response) => {
        if (response.data.status !== 200) {
          toast.error(t(response.data.message));
          setLoading(false);
          return;
        } else {
          toast.success(t(response.data.message));
          localStorage.setItem("code", VerifyResetForm.code);
          navigate("/reset/new-password");
        }
      })
      .catch((error) => {
        toast.error(t(error.message));
        setLoading(false);
      });
  };

  const resendCode = () => {
    axiosInstance
      .get("/auth/reset/resend/" + verifyForm.id)
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
        {t("Reset Password Verification")}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {t("We sent a code to this email")} {VerifyResetForm.email}
      </Typography>
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        className="auth-fields"
      >
        <TextField
          label={t("Code")}
          variant="outlined"
          margin="normal"
          fullWidth
          value={VerifyResetForm.code}
          ref={codeInput}
          inputProps={{ maxLength: 6 }}
          onChange={(e) =>
            setVerifyResetForm({ ...VerifyResetForm, code: e.target.value })
          }
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
        <p className="inp-err">{codeError}</p>
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

export default VerifyResetForm;
