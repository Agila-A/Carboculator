<<<<<<< Updated upstream
import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import img4 from '../../assets/img4.png'
import { Link } from "react-router-dom";
const SignUpPage = () => {
  const [language, setLanguage] = useState("English (UK)");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showFacebookPopup, setShowFacebookPopup] = useState(false);
  
  const languages = ["English (UK)", "Tamil (IND)", "Hindi (IND)"];
=======
import { useState } from "react";
import img4 from '../../assets/img4.png';
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

const SignUpPage = () => {
    const [language, setLanguage] = useState("English (UK)");
    const [showDropdown, setShowDropdown] = useState(false);

    // Form States
    const [fullName, setFullName] = useState(""); // Although not directly used for API call here, keeping for consistency with original login page for now
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate(); // Initialize navigate hook
>>>>>>> Stashed changes

    const languages = ["English (UK)", "Tamil (IND)", "Hindi (IND)"];

    const handleCreateAccount = (e) => {
        e.preventDefault(); // Prevent default form submission

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        // Store email and password temporarily for the next registration step
        localStorage.setItem('registrationData', JSON.stringify({ email, password, fullName })); // Store full name too

        // Redirect to RegistrationPage1
        navigate('/registration');
    };

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
                    <div className="relative">
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
                </div>

                <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Account</h2>

                    {/* Removed Social Signup Buttons and - OR - divider */}

                    {/* Input Fields */}
                    <form onSubmit={handleCreateAccount}> {/* Added onSubmit handler */}
                        {/* Keeping full name for consistency if needed later, but backend does not take it from here */}
                        <input
                            type="text"
                            placeholder="Full name"
                            className="w-full p-3 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full p-3 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-3 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full p-3 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />

                        <button
                            type="submit" // Changed to type="submit"
                            className="w-full bg-blue-700 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-800 transition"
                        >
                            Create Account
                        </button>
                    </form>

                    <p className="text-center text-gray-600 mt-4">
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-700 font-semibold">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
<<<<<<< Updated upstream
      </div>
      
      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-10 relative">
        {/* Language Selector */}
        <div className="absolute top-5 right-5">
          <div className="relative">
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
        </div>

        <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Account</h2>
          
          {/* Social Signup Buttons */}
          <div className="flex flex-col space-y-4 mb-6">
            <GoogleLogin 
              onSuccess={(response) => console.log(response)}
              onError={() => console.log("Login Failed")} 
            />
            <button 
              className="flex items-center justify-center p-3 border rounded-lg shadow-sm text-gray-700 bg-white"
              onClick={() => setShowFacebookPopup(true)}
            >
              <FaFacebook className="h-5 w-5 mr-2" /> Sign up with Facebook
            </button>
          </div>
          
          <div className="text-center text-gray-500 mb-4">- OR -</div>
          
          {/* Input Fields */}
          <form>
            <input
              type="text"
              placeholder="Full name"
              className="w-full p-3 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            <button className="w-full bg-blue-700 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-800 transition">
              Create Account
            </button>
          </form>
          
          <p className="text-center text-gray-600 mt-4">
      Already have an account? <Link to="/login" className="text-blue-700 font-semibold">Login</Link>
         </p>

        </div>
      </div>

      {/* Facebook Login Popup */}
      {showFacebookPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button
              className="absolute top-2 right-2 text-gray-700"
              onClick={() => setShowFacebookPopup(false)}
            >
              ✖
            </button>
            <h2 className="text-xl font-bold text-blue-700 flex items-center">
              <FaFacebook className="h-6 w-6 mr-2" /> Facebook
            </h2>
            <p className="mt-2 text-sm">Login to use your Facebook account with <strong>Carbon Footprint Finder</strong></p>
            <input
              type="email"
              placeholder="Email address or phone number"
              className="w-full p-3 mt-3 border border-gray-300 rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mt-3 border border-gray-300 rounded-md"
            />
            <button className="w-full mt-4 bg-blue-700 text-white py-2 rounded-md font-semibold hover:bg-blue-800 transition">
              Log in
            </button>
          </div>
        </div>
      )}
    </div>
  );
=======
    );
>>>>>>> Stashed changes
};

export default SignUpPage;