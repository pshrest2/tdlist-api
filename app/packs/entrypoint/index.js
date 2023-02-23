import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "core-js/stable";
import "regenerator-runtime/runtime";

import App from "../src/App";

const loadedStates = ["complete", "loaded", "interactive"];

const runOnLoaded = () => {
  const root = ReactDOM.createRoot(document.getElementById("app"));
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

if (loadedStates.includes(document.readyState) && document.body) {
  runOnLoaded();
} else {
  window.addEventListener("DOMContentLoaded", runOnLoaded, false);
}
