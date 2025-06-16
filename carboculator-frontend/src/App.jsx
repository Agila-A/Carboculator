import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutPage from "./Components/LandingPage/AboutPage";
import SignUpPage from "./Components/AccountSettings/SignUpPage";
import LoginPage from "./Components/AccountSettings/LoginPage";
import Dashboard from "./Components/Dashboard/Dashboard";
import Dummy from "./Components/Dashboard/Dummy"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/dummy" element={<Dummy />} />
       
        

      </Routes>
    </BrowserRouter>
  );
};

export default App;
