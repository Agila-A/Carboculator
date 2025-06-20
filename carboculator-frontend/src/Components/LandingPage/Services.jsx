import React from "react";
import { FaRegClipboard } from "react-icons/fa"; // Clipboard icon for uniformity
import { BsArrowRight } from "react-icons/bs"; // Arrow icon for navigation

const services = [
  {
    title: "Carbon calculator",
    description:
      "Emission Estimation. Our app allows users to input data on various mining activities—excavation, transportation, and equipment usage—calculating the associated carbon emissions based on established factors.",
    bgColor: "bg-gray-200",
  },
  {
    title: "Carbon neutrality",
    description:
      "Our app provides actionable pathways towards carbon neutrality by calculating the number of trees required to offset emissions based on land availability. It integrates with Environmental Management Systems (EMS) to monitor.",
    bgColor: "bg-gray-300", // Center card has a slightly darker shade
    arrow: true, // Show arrow for navigation hint
  },
  {
    title: "Data Analysis",
    description:
      "Offers robust data analysis tools that process the input data to generate insights into carbon emissions trends, visualize the results through interactive charts and graphs, enabling them to identify sources, track reduction progress.",
    bgColor: "bg-gray-200",
  },
];

const Services = () => {
  return (
    <section className="py-32 px-6 bg-gray-100">

      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-bold">Our Services and Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {services.map((service, index) => (
            <div
  key={index} className={`cursor-pointer p-6 rounded-xl shadow-md ${service.bgColor} flex flex-col justify-between transform transition duration-500 ease-in-out hover:-translate-y-3 hover:scale-105 hover:shadow-2xl`}
>
  

              <div className="flex items-center space-x-2">
                <FaRegClipboard className="text-xl text-gray-700" />
                <h4 className="font-semibold">{service.title}</h4>
              </div>
              <p className="text-gray-700 mt-2 text-sm">{service.description}</p>
              {service.arrow && (
                <div className="mt-4 text-right text-gray-600">
                  <BsArrowRight className="inline text-2xl" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
