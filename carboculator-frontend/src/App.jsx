
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import AboutPage from "./Components/LandingPage/AboutPage"; 
  import SignUpPage from "./Components/AccountSettings/SignUpPage"; 
  import LoginPage from "./Components/AccountSettings/LoginPage"; 
import Visualization from "./Components/DashBoard/Visualization/Visualization";
import CarbonCredits from "./Components/DashBoard/CarbonCredits";

  
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
    <CarbonCredits />

      </>
  

    );
  };

  export default App;
