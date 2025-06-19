import { useState } from "react";

import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import img4 from '../../assets/img4.png'
const LoginPage = () => {
  const [language, setLanguage] = useState("English (UK)");
  const [showDropdown, setShowDropdown] = useState(false);
  
  const languages = ["English (UK)", "Tamil (IND)", "Hindi (IND)"];

  return (
    <div className="flex h-screen bg-[#F0FAF8]">
      {/* Left Section */}
      <div className="w-1/2 relative hidden lg:block">
        <img
          src={img4}
          alt="Carbon Footprint Finder"
          className="h-full w-full object-cover rounded-tr-[40px] rounded-br-[40px]"
        />
        <div className="absolute bottom-5 left-5 bg-gray-700 text-white px-4 py-2 rounded-md text-sm">
          CARBON FOOTPRINT FINDER
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-10 relative">
        {/* Language Selector */}
        <div className="absolute top-5 right-5">
          <button
            className="text-gray-700 bg-white px-3 py-1 rounded-md border border-gray-300 shadow-sm"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {language} ▼
          </button>
          {showDropdown && (
            <div className="absolute right-0 mt-2 bg-white border border-gray-300 shadow-lg rounded-md w-40">
              {languages.map((lang) => (
                <button
                  key={lang}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    setLanguage(lang);
                    setShowDropdown(false);
                  }}
                >
                  {lang}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">LOGIN</h2>

          {/* Input Fields */}
          <form>
            <div className="relative mb-3">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Full name"
                className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative mb-3">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative mb-6">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center mb-4">
              <input type="checkbox" id="rememberMe" className="mr-2" />
              <label htmlFor="rememberMe" className="text-gray-600">Remember Me</label>
            </div>

            <button className="w-full bg-blue-700 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-800 transition">
              LOGIN
            </button>
          </form>

          <p className="text-center text-gray-600 mt-4">
            Forget password? <a href="#" className="text-blue-700 font-semibold">Click here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
