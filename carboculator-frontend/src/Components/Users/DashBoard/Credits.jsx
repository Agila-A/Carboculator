<<<<<<< HEAD:carboculator-frontend/src/Components/DashBoard/Credits.jsx
import carboncredit from "../../assets/Dashboardimg/ccimg.jpg";
import React from 'react'
=======
import carboncredit from "../../../assets/Dashboardimg/ccimg.jpg";
>>>>>>> 46caa1038a898c3dfec754e61e7a9aedf52bf7ea:carboculator-frontend/src/Components/Users/DashBoard/Credits.jsx

const Credits = () => {
  return (
    <div className="flex h-screen bg-white w-17/20">
      <div className=" flex-1 p-8">
        <h1 className="text-4xl font-bold text-black pb-10">CARBON CREDIT</h1>
        <div className="flex items-center justify-center">
        <div className="border-2 border-black rounded-lg p-8 bg-white flex justify-between items-start w-19/20">
          {/* Left Side - Form */}
          <div className="w-1/2 ">
            <h2 className="text-2xl font-bold text-black pb-8">
              REQUIRED DETAILS TO CALCULATE
            </h2>

            <div className="space-y-10">
              {[
                { label: "Total amount consumed", unit: "tons/month" },
                { label: "Water Extraction", unit: "kWh/month" },
                { label: "Fuel Usage", unit: "Liters/month" },
                { label: "Source of Electricity", unit: "tons/month" },
              ].map((field, index) => (
                <div key={index} className="flex gap-6 items-center">
                  <div className="w-64">
                    <button
                      className="text-white py-4 w-full rounded  text-sm text-center shadow-md border border-black font-bold"
                      style={{ backgroundColor: "#446891" }}
                    >
                      {field.label}
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder={field.unit}
                    className="border border-black rounded py-4 px-3 text-sm w-80 "
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center pt-10">
              <div>
                <button className="p-2 border border-black rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <div>
                <button
                  type="submit"
                  className="py-4 px-6 border border-black shadow text-sm font-bold rounded-md text-white"
                  style={{ backgroundColor: "#446891" }}
                >
                  Submit
                </button>
              </div>

              <div>
                <button className="p-2 border border-black rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center ">
            <img
              src={carboncredit}
              alt="Carbon Credit"
              className="w-4/5 h-auto py-20 ml-10"
            />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Credits;