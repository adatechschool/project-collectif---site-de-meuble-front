import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Login from "./Login";
import Inscription from "./Inscription";

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Inscription" element={<Inscription />} />
      </Routes>
    </Router>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById("root")
);
