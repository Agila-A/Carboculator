
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./Components/LandingPage/AboutPage"; 
import SignUpPage from "./Components/AccountSettings/SignUpPage"; 
import LoginPage from "./Components/AccountSettings/LoginPage"; 
import Visualize from "./Components/DashBoard/Visualization/Visualize";
import RegistrationPage1 from "./Components/RegistrationPage/RegistrationPage1";
import RegistrationPage2 from "./Components/RegistrationPage/RegistrationPage2";


  
  const App = () => {
    return (
      <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage1 />} />
          <Route path="/registration2" element={<RegistrationPage2 />} />
        </Routes>
      </BrowserRouter>  
      {/* <SignUpPage /> */}

        {/* <Visualize /> */}
        {/* <RegistrationPage1 /> */}

      </>
  

    );
  };

  export default App;
