import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";

import LoginPage from "./authPages/LoginPage/LoginPage";
import RegisterPage from "./authPages/RegisterPage/RegisterPage";
import DashBoard from "./Dashboard/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/dashboard" element={<DashBoard />} />
          {/* <Route path="/">
            <Navigate to="/dashboard" />
          </Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
