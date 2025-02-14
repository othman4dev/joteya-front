import React from "react";
import AppRoutes from "./routes/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "./components/Head";

const App = () => {
  return (
    <>
      <Head />
      <AppRoutes />
      <ToastContainer style={{ top: "80px" }} />
    </>
  );
};

export default App;
