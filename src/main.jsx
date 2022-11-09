// import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import App from "./App";
import PostContextProvider from "./context/PostContextProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <ThemeProvider theme={theme}> */}
    <PostContextProvider>
      <App />
      <ToastContainer />
    </PostContextProvider>
    {/* </ThemeProvider> */}
  </>
);
