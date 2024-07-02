import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "animate.css";
import "./sass/utils/normalize.css";
import "./sass/main.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router basename="restaurant-app">
    <App />
  </Router>
);
