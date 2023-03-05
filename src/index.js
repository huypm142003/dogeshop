import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./store/store";

import "boxicons/css/boxicons.min.css";
import "./index.css";
import "./assets/js/main.js";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ToastContainer
      position="top-right"
      transition={Zoom}
      progressStyle={{ backgroundImage: "linear-gradient(45deg, #6a5af9, #ff2ced, #ffb4dc, #fc6c8f, #ffb86c)"  }}
      autoClose={5000}
      toastStyle={{ color: "#000", boxShadow: "0 0 3px #333"}}
      pauseOnHover={false}
    />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
