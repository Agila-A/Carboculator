
import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import img4 from '../../assets/img4.png';
import { Link , useNavigate } from "react-router-dom";

const SignUpPage = () => {
    const [language, setLanguage] = useState("English (UK)");
    const [showDropdown, setShowDropdown] = useState(false);
    const [showFacebookPopup, setShowFacebookPopup] = useState(false);
    // Form States
    const [fullName, setFullName] = useState(""); // Although not directly used for API call here, keeping for consistency with original login page for now
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate(); // Initialize navigate hook


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

    );

};

export default SignUpPage;