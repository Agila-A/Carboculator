
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import img2 from '../../assets/img2.png';

const LandingPage = () => {
  return (
    <div className="bg-[#F3F4F6] min-h-screen">
      {/* Navbar (Fixed at Top for Landing Page Only) */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-lg px-8 py-4 flex justify-between items-center z-50">
        <h1 className="text-lg font-semibold text-black uppercase">
          CARBON FOOTPRINT CALCULATOR
        </h1>

        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6 text-gray-800 font-medium">
            <li><a href="#" className="hover:text-gray-500">Home</a></li>
            <li><a href="#" className="hover:text-gray-500">Calculate</a></li>
            <li><a href="#" className="hover:text-gray-500">Our Solutions</a></li>
            <li><a href="#" className="hover:text-gray-500">Contact Us</a></li>
          </ul>

          {/* Use Link for navigation instead of anchor tag */}
          <Link to="/login" className="bg-gray-300 text-gray-900 font-semibold px-6 py-2 rounded-md hover:bg-gray-400">
            Login
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-32 mt-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-black uppercase">
            CARBON FOOTPRINT CALCULATOR
          </h2>
          <p className="text-lg font-medium text-gray-700 mt-2">
            FOR INDIAN COAL MINES
          </p>
          <p className="max-w-md text-gray-600 mt-4">
            Track your mine's impact and turn carbon challenges into green opportunities. 
            Our calculator paves the path to a carbon-neutral future. Calculate your 
            carbon footprint with us and play a vital role in making India a ‘zero carbon emission’ country.
          </p>

          <Link to="/signup" className="mt-16 bg-[#BBCADD] text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-[#AAB9CC]">
            GET STARTED
          </Link>
        </div>

        {/* Circular Image */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img 
            src={img2}
            alt="Carbon Footprint" 
            className="w-80 h-80 rounded-full object-cover shadow-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
