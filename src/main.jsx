import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/script/script.js";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App.jsx";
import theme from "./theme";
import "./assets/styles/style.css";
import "./assets/styles/responsive.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </ThemeProvider>
  </StrictMode>
);
