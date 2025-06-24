<<<<<<< Updated upstream
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import img4 from '../../assets/img4.png'
=======
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa"; // FaEnvelope is not used here, removed it
import img4 from '../../assets/img4.png';
import { useNavigate } from "react-router-dom"; // Import useNavigate

>>>>>>> Stashed changes
const LoginPage = () => {
    const [language, setLanguage] = useState("English (UK)");
    const [showDropdown, setShowDropdown] = useState(false);

    // Form States
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Initialize navigate hook

    const languages = ["English (UK)", "Tamil (IND)", "Hindi (IND)"];

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent default form submission

        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Login successful:', data);
                localStorage.setItem('token', data.token); // Store the JWT token
                // Optionally, store user details if needed:
                // localStorage.setItem('user', JSON.stringify(data.user));
                alert('Login successful!');
                navigate('/dash'); // Redirect to dashboard
            } else {
                console.error('Login failed:', data.message);
                alert(`Login failed: ${data.message || 'Invalid credentials'}`);
            }
        } catch (error) {
            console.error('Network error during login:', error);
            alert('An error occurred. Please try again.');
        }
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
                    <form onSubmit={handleLogin}> {/* Added onSubmit handler */}
                        {/* Removed Full name and Confirm Password fields as they are not for Login */}
                        <div className="relative mb-3">
                            <FaUser className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="email" // Changed to email type for email input
                                placeholder="Email Address" // Changed placeholder
                                className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="relative mb-6"> {/* Adjusted margin bottom */}
                            <FaLock className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="flex items-center mb-4">
                            <input type="checkbox" id="rememberMe" className="mr-2" />
                            <label htmlFor="rememberMe" className="text-gray-600">Remember Me</label>
                        </div>

                        <button
                            type="submit" // Changed to type="submit"
                            className="w-full bg-blue-700 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-800 transition"
                        >
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