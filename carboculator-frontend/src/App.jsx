
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import AboutPage from "./Components/LandingPage/AboutPage"; 
  import SignUpPage from "./Components/AccountSettings/SignUpPage"; 
  import LoginPage from "./Components/AccountSettings/LoginPage"; 
  // import RegistrationPage1 from "./Components/RegistrationPage/RegistrationPage1";
  // import RegistrationPage2 from "./Components/RegistrationPage/RegistrationPage2";
import PlantTree from "./Components/DashBoard/PlantTree";
import SideBar from "./Components/DashBoard/SideBar";
import Visualization from "./Components/DashBoard/Visualization";

  
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
      {/* <RegistrationPage2 />
      <RegistrationPage1 /> */}
      {/* <LoginPage /> */}
      {/* <SideBar/> */}
      {/* <PlantTree /> */}
      <Visualization />

      </>
  

    );
  };

  export default App;
