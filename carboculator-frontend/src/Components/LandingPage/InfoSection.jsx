
import img3 from '../../assets/img3.png'
const InfoSection = () => {
  return (
    <section className="py-32 px-6 bg-white flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center">
        {/* Left Side - Circular Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={img3}
            alt="Coal Industry"
            className="w-96 h-96 rounded-full object-cover shadow-lg"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="md:w-1/2 text-left md:pl-12 mt-8 md:mt-0">
          <h3 className="text-3xl font-semibold text-gray-900 leading-tight">
            PAVING A PATHWAY TO THE GREENER FUTURE
          </h3>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            Introducing a web application tailored specifically for Indian coal mines that will 
            not only quantify their carbon footprint but also explore pathways to carbon neutrality. 
            Our innovative application addresses the challenge head-on with a comprehensive suite 
            of features designed for the unique needs of our coal mining industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
