
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./Components/Users/LandingPage/AboutPage";
import SignUpPage from "./Components/Users/AccountSettings/SignUpPage";
import LoginPage from "./Components/Users/AccountSettings/LoginPage";
import Dashboard from "./Components/Users/DashBoard/Dashboard";
import Dummy from "./Components/Users/DashBoard/Dummy"
import RegistrationPage1 from "./Components/Users/RegistrationPage/RegistrationPage1";
import RegistrationPage2 from "./Components/Users/RegistrationPage/RegistrationPage2";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/dummy" element={<Dummy />} />
        <Route path="/registration" element={<RegistrationPage1 />} />
        <Route path="/registration2" element={<RegistrationPage2 />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App


