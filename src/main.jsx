import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "uikit/dist/css/uikit.min.css";
import Icons from "uikit/dist/js/uikit-icons.min.js";
import UIkit from "uikit";

UIkit.use(Icons);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
