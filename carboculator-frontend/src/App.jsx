
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import AboutPage from "./Components/LandingPage/AboutPage"; 
  import SignUpPage from "./Components/AccountSettings/SignUpPage"; 
  import LoginPage from "./Components/AccountSettings/LoginPage"; 
import Visualization from "./Components/DashBoard/Visualization/Visualization";
import CarbonCredits from "./Components/DashBoard/CarbonCredits";
import RegistrationPage1 from "./Components/RegistrationPage/RegistrationPage1";
import RegistrationPage2 from "./Components/RegistrationPage/RegistrationPage2";
import CreateAccount from "./Components/RegistrationPage/CreateAccount";

  
  const App = () => {
    return (
      <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>   */}
      {/* <LoginPage /> */}
      {/* <SideBar/> */}
     {/* <Visualization />
    */}
    {/* <CarbonCredits /> */}
      {/* <RegistrationPage1 /> */}
      <RegistrationPage2 />
      {/* <CreateAccount /> */}

      </>
  

    );
  };

  export default App;
