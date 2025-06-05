import Commitment from "./Commitment";
import Footer from "./Footer";
import InfoSection from "./InfoSection";
import Navbar from "./NavBar";
import Services from "./Services";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <InfoSection />
      <Services />
      <Commitment />
      <Footer />
    </div>
  );
};

export default AboutPage;