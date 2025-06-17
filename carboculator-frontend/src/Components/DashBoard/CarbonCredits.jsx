
import carboncredit from '../../assets/Dashboardimg/ccimg.jpg';
import SideBar from './SideBar';

const CarbonCredits = () => {
  return (
    <div className="flex min-h-screen bg-white">
      <SideBar />
    <div className="flex-1 p-8">
        <h1 className="text-6xl font-bold text-black mb-16">CARBON CREDIT</h1>

        <div className="border-2 border-black rounded-lg p-12 bg-white flex justify-between items-start">
          {/* Left Side - Form */}
          <div className="w-1/2 space-y-8">
            <h2 className="text-3xl font-bold text-black mb-12">
              REQUIRED DETAILS TO CALCULATE
            </h2>

  <div className="space-y-14">
  {[
    { label: "Total amount consumed", unit: "tons/month" },
    { label: "Water Extraction", unit: "kWh/month" },
    { label: "Fuel Usage", unit: "Liters/month" },
    { label: "Source of Electricity", unit: "tons/month" },
  ].map((field, index) => (
    <div key={index} className="flex gap-6 items-center">
      <div className="w-64">
        <button className="text-white py-4 w-full rounded shadow text-sm text-center shadow-md border border-black font-bold"
        style={{ backgroundColor: '#446891' }}>
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

    <div className="flex justify-between items-center mt-6">
  <div>
    <button className="p-2 border border-black rounded">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    </button>
  </div>

  <div>
    <button
      type="submit"
      className="py-4 px-6 border border-black shadow text-sm font-bold rounded-md text-white"
      style={{ backgroundColor: '#446891' }}
    >
      Submit
    </button>
  </div>

  <div>
    <button className="p-2 border border-black rounded">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
      </svg>
    </button>
  </div>
</div>

</div>
     <div className="w-1/2 flex justify-center">
            <img src={carboncredit} alt="Carbon Credit" className="w-4/5 h-auto mt-16" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarbonCredits;