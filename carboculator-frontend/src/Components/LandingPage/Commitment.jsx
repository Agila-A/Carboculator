import React from "react";
import img2 from '../../assets/img2.png'
import img1 from '../../assets/img1.png'
const Commitment = () => {
  return (
    <section className="py-16 px-6 bg-white relative">
      {/* Optional Coal Rock Decoration */}
      <img 
        src={img1} 
        alt="Coal Rocks" 
        className="absolute top-0 left-0 w-32"
      />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold">Commitment to Sustainability</h3>
          <p className="text-gray-800 mt-4 font-medium">
            <strong>Alignment with Sustainable Development Goals (SDGs)</strong>
          </p>
          <p className="text-gray-600 mt-2 text-sm">
            Our solution supports SDG 13: Climate Action by reducing carbon emissions 
            and mitigating climate change. It also promotes SDG 15: Life on Land through 
            afforestation efforts, enhancing biodiversity. Additionally, the focus on 
            energy efficiency aligns with SDG 7: Affordable and Clean Energy, advancing 
            the use of cleaner energy sources.
          </p>
        </div>

        {/* Circular Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-gray-300">
            <img 
              src={img2} 
              alt="Mining Sustainability" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
