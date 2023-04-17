import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";

import App from "./App";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { BlogContextProvider } from "./store/Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BlogContextProvider>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
  </BlogContextProvider>
);
