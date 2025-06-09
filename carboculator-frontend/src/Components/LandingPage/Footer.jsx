
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1E2833] text-white py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start">
        {/* Left Side - CTA Section */}
        <div className="md:w-1/3">
          <p className="text-lg font-semibold">Ready to get started?</p>
          <a href="#" className="bg-white text-gray-900 font-bold px-6 py-3 rounded-lg mt-4 inline-block text-lg">
            Get started
          </a>
        </div>

        {/* Right Side - Navigation Links (Reduced Gap) */}
        <div className="grid grid-cols-3 text-sm text-gray-400 md:w-2/3 gap-4"> {/* Reduced gap from 6 to 4 */}
          <div>
            <p className="font-semibold text-white mb-2">Services</p> {/* Reduced bottom margin */}
            <ul className="space-y-1"> {/* Reduced space between list items */}
              <li><a href="#">Calculate CF</a></li>
              <li><a href="#">Solution</a></li>
              <li><a href="#">Strategies</a></li>
              <li><a href="#">Visualize</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white mb-2">About</p>
            <ul className="space-y-1">
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Benefits</a></li>
              <li><a href="#">Team</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white mb-2">Help</p>
            <ul className="space-y-1">
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center mt-8">
        {/* Social Media Icons - Left Bottom */}
        <div className="flex space-x-6 md:order-1">
          <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaFacebookF /></a>
          <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaTwitter /></a>
          <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaInstagram /></a>
        </div>

        {/* Legal Links - Centered on Small Screens, Right-Aligned on Large Screens */}
        <div className="mt-6 text-gray-500 text-sm md:mt-0">
          <a href="#" className="mr-4">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
