import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./Components/LandingPage/AboutPage"; // Ensure correct case
import SignUpPage from "./Components/AccountSettings/SignUpPage"; // Ensure correct case
import LoginPage from "./Components/AccountSettings/LoginPage"; // Ensure correct case
import DashboardPage from "./Components/DashBoard/DashBoardPage";

const App = () => {
  return (

    <>
    {/* <DashboardPage />*/}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter> 
    </>
  );
};

export default App;
