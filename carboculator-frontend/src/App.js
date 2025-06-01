import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./Components/LandingPage/AboutPage"; // Ensure correct case
import SignUpPage from "./Components/AccountSettings/SignUpPage"; // Ensure correct case
import LoginPage from "./Components/AccountSettings/LoginPage"; // Ensure correct case
import DashboardPage from "./Components/DashBoard/DashBoardPage";
import RegistrationPage1 from "./Components/RegistrationPage/RegistrationPage1";
import RegistrationPage2 from "./Components/RegistrationPage/RegistrationPage2";

const App = () => {
  return (

    <>
    {/* <DashboardPage />*/}
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>  */}
    <RegistrationPage2 />
    <RegistrationPage1 />
    {/* <LoginPage /> */}

    </>
  );
};

export default App;
