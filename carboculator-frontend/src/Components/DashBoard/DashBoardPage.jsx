import React from "react";
import { FaSearch, FaBars, FaRegCommentDots } from "react-icons/fa";
import { MdOutlineFeedback, MdOutlineNotifications, MdLogout } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import img7 from '../../assets/img7.png'
import img8 from '../../assets/img8.png'
import img9 from '../../assets/img9.png'
import img10 from '../../assets/img10.png'
const DashboardPage = () => {
  return (
    <div className="flex bg-[#ECF8F7] min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">dashboard</h2>
        <nav>
          <ul className="space-y-4">
            <li className="font-semibold text-gray-900 bg-gray-200 p-2 rounded">Home</li>
            <li className="text-gray-700 hover:text-gray-900">Calculate</li>
            <li className="text-gray-700 hover:text-gray-900">Visualize</li>
            <li className="text-gray-700 hover:text-gray-900">Plant a tree</li>
            <li className="text-gray-700 hover:text-gray-900">Monitor</li>
            <li className="text-gray-700 hover:text-gray-900">Credits</li>
          </ul>
        </nav>
        <div className="mt-10 space-y-4 text-gray-700">
          <p className="flex items-center gap-2"><MdOutlineFeedback /> Feedback</p>
          <p className="flex items-center gap-2"><MdOutlineNotifications /> Notifications</p>
          <p className="flex items-center gap-2"><IoSettingsOutline /> Settings</p>
          <p className="flex items-center gap-2 text-red-600"><MdLogout /> Logout</p>
        </div>
        <div className="mt-10 text-gray-600 text-sm">
          <p className="font-semibold">Username</p>
          <p>username@gmail.com</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Search Bar */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold">Carbon footprint</h2>
          <div className="relative">
            <input type="text" placeholder="search" className="bg-gray-200 p-2 pl-8 rounded-full text-sm focus:outline-none" />
            <FaSearch className="absolute left-2 top-2 text-gray-500" />
          </div>
        </div>

        {/* Recent Activities */}
        <section>
          <h3 className="text-lg font-bold mb-4">Recent activities</h3>
          <div className="grid grid-cols-4 gap-4">
            <div className="p-4 bg-white shadow-md rounded-lg text-center">
              <img src={img7} alt="Data Entries" className="w-full h-20 object-cover rounded" />
              <p className="font-semibold text-blue-700 mt-2">DATA ENTRIES</p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-lg text-center">
              <img src={img8} alt="Carbon Neutrality" className="w-full h-20 object-cover rounded" />
              <p className="font-semibold text-blue-700 mt-2">CARBON NEUTRALITY</p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-lg text-center">
              <img src={img9} alt="Compliance" className="w-full h-20 object-cover rounded" />
              <p className="font-semibold text-blue-700 mt-2">COMPLIANCE</p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-lg text-center">
              <img src={img10} alt="Monitoring" className="w-full h-20 object-cover rounded" />
              <p className="font-semibold text-blue-700 mt-2">MONITORING</p>
            </div>
          </div>
        </section>

        {/* Graphs and Data */}
        <section className="mt-6 grid grid-cols-2 gap-6">
          <div className="bg-white p-4 shadow-md rounded-lg">Graph 1</div>
          <div className="bg-white p-4 shadow-md rounded-lg">Graph 2</div>
        </section>

        {/* Bottom Section */}
        <section className="mt-6 bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-bold">Carbon footprint calculation</h3>
          <div className="grid grid-cols-5 gap-4 mt-4">
            <p>Carbon emission rate <span className="font-bold">12</span></p>
            <p>Per Capita <span className="font-bold">65%</span></p>
            <p>Keywords <span className="font-bold">98</span></p>
            <p>Weekly emissions <span className="font-bold">53%</span></p>
            <p>Carbon Credits <span className="font-bold">70%</span></p>
          </div>
        </section>
      </main>

      {/* Help Button */}
      <div className="fixed bottom-6 right-6 bg-gray-300 p-4 rounded-full shadow-lg flex items-center">
        <FaRegCommentDots className="text-xl text-gray-700" />
        <span className="ml-2 text-sm font-semibold">HELP?</span>
      </div>
    </div>
  );
};

export default DashboardPage;
