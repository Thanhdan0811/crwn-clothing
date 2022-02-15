import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// React router dom
import { BrowserRouter } from "react-router-dom";
// BrowserRouter : bao quanh App component.
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
